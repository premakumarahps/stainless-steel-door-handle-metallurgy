/**
 * Metallurgical Heat Treatment Physics & Kinetics Engine
 * Grounded in MT2220 Research: Solution Treatment, Carbide Dissolution,
 * Sensitization Prevention, and Stress Relief of AISI 304 Stainless Steel
 *
 * Process Architecture Designed by: PREMAKUMARA H.P.S. (210494D)
 */

export interface HeatTreatmentCycleParams {
  solutionTempC: number; // Solution annealing temperature (typically 1000 - 1150 C, benchmark 1050 C)
  soakingTimeMin: number; // Soaking duration at temperature (typically 30 - 90 min, benchmark 60 min)
  heatingRateCPerMin: number; // Heating ramp rate (typically 10 - 25 C/min, benchmark 15 C/min)
  coolingMedium: 'water' | 'forced_air' | 'still_air' | 'furnace';
  sectionThicknessMm: number; // Typically 20 mm for the door handle
}

export interface HeatTreatmentCycleResult {
  heatingTimeMin: number;
  soakingTimeMin: number;
  coolingTimeSec: number;
  sensitizationTraverseTimeSec: number; // Time spent traversing 850 C -> 500 C
  carbideDissolutionPercent: number; // Dissolution of M23C6 carbides (0 - 100%)
  sensitizationAvoidanceIndex: number; // 0 - 100% (100% = complete immunity to intergranular corrosion)
  sigmaPhaseSuppressionPercent: number; // 0 - 100%
  residualStressReliefPercent: number; // 0 - 100%
  astmA262PracticeRating: 'Step Structure (Acceptable)' | 'Dual Structure (Marginal)' | 'Ditch Structure (Rejected - Sensitized)';
  predictedHardnessHrb: number; // Rockwell B hardness (typically 75 - 85 HRB)
  predictedYieldStrengthMpa: number; // Typically ~205 MPa
  predictedTensileStrengthMpa: number; // Typically 550 - 610 MPa
  predictedElongationPercent: number; // Typically 40 - 50%
  timeTempProfile: { timeMin: number; tempC: number; stage: string }[];
}

export function simulateHeatTreatmentCycle(params: HeatTreatmentCycleParams): HeatTreatmentCycleResult {
  const { solutionTempC, soakingTimeMin, heatingRateCPerMin, coolingMedium, sectionThicknessMm } = params;

  // 1. Heating Phase Calculation
  const ambientTempC = 25;
  const deltaT = solutionTempC - ambientTempC;
  const heatingTimeMin = Math.round((deltaT / heatingRateCPerMin) * 10) / 10;

  // 2. Cooling Phase Calculation based on Quench Media
  // Agitated water quench provides ~120 C/s for 20mm section
  // Forced air provides ~20 C/s
  // Still air provides ~4 C/s
  // Furnace cool provides ~0.02 C/s (~1.2 C/min)
  let coolingRateCPerSec = 120;
  if (coolingMedium === 'forced_air') coolingRateCPerSec = 22;
  else if (coolingMedium === 'still_air') coolingRateCPerSec = 4.5;
  else if (coolingMedium === 'furnace') coolingRateCPerSec = 0.025;

  // Thickness factor: heavier sections cool slower
  const thicknessFactor = Math.pow(sectionThicknessMm / 20, 1.2);
  const effectiveCoolingRate = coolingRateCPerSec / thicknessFactor;

  const coolingTimeSec = Math.round((solutionTempC - ambientTempC) / effectiveCoolingRate);
  const coolingTimeMin = Math.round((coolingTimeSec / 60) * 10) / 10;

  // Sensitization traversal window: 850 C down to 500 C (deltaT = 350 C)
  const sensitizationTraverseTimeSec = Math.round((350 / effectiveCoolingRate) * 10) / 10;

  // 3. Carbide Dissolution Kinetics (Equilibrium Solubility + Soaking Activation)
  // Carbon solubility at solution temperature C_sol(T)
  // C = 0.08% in 304 stainless steel.
  // Full solubility threshold is reached at ~1020 C
  let solubilityCapacityPercent = 0.02;
  if (solutionTempC >= 600) {
    solubilityCapacityPercent = 0.02 + 0.32 * Math.pow((solutionTempC - 600) / (1200 - 600), 1.8);
  }

  // Time requirement: 60 minutes for 25mm thickness according to GB1200 standard
  const requiredSoakMin = (sectionThicknessMm / 25) * 60;
  const soakSufficiency = Math.min(1.0, soakingTimeMin / requiredSoakMin);
  
  let carbideDissolutionPercent = 0;
  if (solutionTempC >= 1000) {
    carbideDissolutionPercent = Math.min(100, Math.round((solubilityCapacityPercent / 0.08) * 100 * soakSufficiency));
  } else {
    carbideDissolutionPercent = Math.min(65, Math.round((solubilityCapacityPercent / 0.08) * 80 * soakSufficiency));
  }

  // 4. Sensitization Avoidance Index (Controlled by Quench Speed through 850 C - 500 C)
  // Safe limit for 304 with C=0.08% is traverse time < 10 seconds (Water quench = ~3s)
  let sensitizationAvoidanceIndex = 100;
  if (sensitizationTraverseTimeSec > 500) {
    sensitizationAvoidanceIndex = 15; // Furnace cool: heavily sensitized
  } else if (sensitizationTraverseTimeSec > 60) {
    sensitizationAvoidanceIndex = Math.max(25, Math.round(100 - (sensitizationTraverseTimeSec / 100) * 80));
  } else if (sensitizationTraverseTimeSec > 10) {
    sensitizationAvoidanceIndex = Math.max(70, Math.round(100 - (sensitizationTraverseTimeSec / 30) * 20));
  } else {
    sensitizationAvoidanceIndex = 98; // Water quench
  }

  // 5. Sigma Phase Suppression (500 C - 900 C danger zone)
  const sigmaPhaseSuppressionPercent = Math.min(100, Math.max(10, Math.round(100 - (sensitizationTraverseTimeSec / 600) * 90)));

  // 6. Stress Relief & Dislocation Recovery
  // Hot yield strength drop at solution temperature
  const stressReliefRatio = 1 - Math.exp(-soakingTimeMin / 25);
  const tempActivation = Math.min(1.0, (solutionTempC - 550) / (1050 - 550));
  const residualStressReliefPercent = Math.round(Math.min(98, Math.max(10, 95 * stressReliefRatio * tempActivation)));

  // ASTM A262 Rating determination
  let astmA262PracticeRating: HeatTreatmentCycleResult['astmA262PracticeRating'] = 'Step Structure (Acceptable)';
  if (sensitizationAvoidanceIndex < 40) {
    astmA262PracticeRating = 'Ditch Structure (Rejected - Sensitized)';
  } else if (sensitizationAvoidanceIndex < 85) {
    astmA262PracticeRating = 'Dual Structure (Marginal)';
  }

  // Predicted Mechanical Properties (Normalized for annealed 304)
  const predictedHardnessHrb = Math.round((80 - (solutionTempC - 1000) * 0.015) * 10) / 10;
  const predictedYieldStrengthMpa = Math.round(205 + (100 - carbideDissolutionPercent) * 0.4);
  const predictedTensileStrengthMpa = Math.round(580 + (100 - carbideDissolutionPercent) * 0.5);
  const predictedElongationPercent = Math.round(42 + (carbideDissolutionPercent / 100) * 8);

  // Time-Temperature Curve Points
  const timeTempProfile: { timeMin: number; tempC: number; stage: string }[] = [];

  // Stage 1: Heating
  const heatSteps = 15;
  for (let i = 0; i <= heatSteps; i++) {
    const t = (i / heatSteps) * heatingTimeMin;
    const temp = ambientTempC + (i / heatSteps) * (solutionTempC - ambientTempC);
    timeTempProfile.push({
      timeMin: Math.round(t * 10) / 10,
      tempC: Math.round(temp),
      stage: 'Heating'
    });
  }

  // Stage 2: Soaking
  const soakSteps = 15;
  for (let i = 1; i <= soakSteps; i++) {
    const t = heatingTimeMin + (i / soakSteps) * soakingTimeMin;
    timeTempProfile.push({
      timeMin: Math.round(t * 10) / 10,
      tempC: solutionTempC,
      stage: 'Soaking (Homogenization)'
    });
  }

  // Stage 3: Cooling
  const coolSteps = 15;
  const totalCoolMin = Math.max(0.5, coolingTimeMin);
  for (let i = 1; i <= coolSteps; i++) {
    const t = heatingTimeMin + soakingTimeMin + (i / coolSteps) * totalCoolMin;
    // Exponential or rapid linear decay depending on quench
    const fraction = i / coolSteps;
    const temp = ambientTempC + (solutionTempC - ambientTempC) * Math.exp(-3.5 * fraction);
    timeTempProfile.push({
      timeMin: Math.round(t * 10) / 10,
      tempC: Math.round(temp),
      stage: coolingMedium === 'water' ? 'Water Quench' : 'Air / Furnace Cool'
    });
  }

  return {
    heatingTimeMin,
    soakingTimeMin,
    coolingTimeSec,
    sensitizationTraverseTimeSec,
    carbideDissolutionPercent,
    sensitizationAvoidanceIndex,
    sigmaPhaseSuppressionPercent,
    residualStressReliefPercent,
    astmA262PracticeRating,
    predictedHardnessHrb,
    predictedYieldStrengthMpa,
    predictedTensileStrengthMpa,
    predictedElongationPercent,
    timeTempProfile
  };
}

/**
 * Mechanical Bending & Pull Load Analysis for Door Handle
 * ANSI / BHMA A156.2 Load Verification
 */
export interface HandleMechanicalParams {
  pullForceN: number; // e.g. 500 N (human pull ~ 200 - 500 N, shock pull ~ 1000 N)
  standoffLengthCm: number; // 4.0 cm standoff from door face
  handleSpanCm: number; // 16.0 cm between posts
  handleDiameterCm: number; // 2.5 cm mean diameter
  yieldStrengthMpa: number; // 205 MPa for solution annealed 304
}

export function calculateHandleStress(params: HandleMechanicalParams) {
  const { pullForceN, standoffLengthCm, handleSpanCm, handleDiameterCm, yieldStrengthMpa } = params;

  // Standoff Bending Moment: M = (F / 2) * standoffLength
  const forcePerPostN = pullForceN / 2;
  const standoffM = standoffLengthCm / 100;
  const bendingMomentNm = forcePerPostN * standoffM;

  // Section Modulus for Solid Circular Post: Z = (pi * d^3) / 32
  const dM = handleDiameterCm / 100;
  const sectionModulusM3 = (Math.PI * Math.pow(dM, 3)) / 32;

  // Peak Bending Stress: sigma = M / Z in Pascals -> convert to MPa
  const peakBendingStressMpa = (bendingMomentNm / sectionModulusM3) / 1e6;

  // Mid-Span Beam Bending: Three-point / two-point distributed pull
  // M_beam = (F * span) / 4
  const spanM = handleSpanCm / 100;
  const beamMomentNm = (pullForceN * spanM) / 4;
  const beamBendingStressMpa = (beamMomentNm / sectionModulusM3) / 1e6;

  const maxStressMpa = Math.max(peakBendingStressMpa, beamBendingStressMpa);
  const safetyFactor = maxStressMpa > 0 ? yieldStrengthMpa / maxStressMpa : 999;

  // Deflection delta = (F * L^3) / (48 * E * I) where E = 193 GPa for 304 SS
  const E_Pa = 193e9;
  const momentOfInertiaM4 = (Math.PI * Math.pow(dM, 4)) / 64;
  const deflectionMm = ((pullForceN * Math.pow(spanM, 3)) / (48 * E_Pa * momentOfInertiaM4)) * 1000;

  return {
    forcePerPostN: Math.round(forcePerPostN),
    bendingMomentNm: Math.round(bendingMomentNm * 100) / 100,
    peakBendingStressMpa: Math.round(maxStressMpa * 10) / 10,
    safetyFactor: Math.round(safetyFactor * 10) / 10,
    deflectionMm: Math.round(deflectionMm * 1000) / 1000,
    isSafe: safetyFactor >= 1.5
  };
}
