import React, { useState, useMemo } from 'react';
import { 
  Flame, 
  Droplet, 
  Wind, 
  Settings2, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  RefreshCw, 
  Activity, 
  Sparkles,
  Info,
  Thermometer,
  Layers,
  Award
} from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { simulateHeatTreatmentCycle, HeatTreatmentCycleParams } from '../core/heatTreatmentPhysics';
import { MathView } from './MathView';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const HeatTreatmentSimulator: React.FC = () => {
  // Simulator input parameters
  const [solutionTempC, setSolutionTempC] = useState<number>(1050); // 1050 C benchmark (GB1200: 1020-1080 C)
  const [soakingTimeMin, setSoakingTimeMin] = useState<number>(60); // 60 min standard
  const [heatingRateCPerMin, setHeatingRateCPerMin] = useState<number>(15); // 15 C/min gradual ramp
  const [coolingMedium, setCoolingMedium] = useState<'water' | 'forced_air' | 'still_air' | 'furnace'>('water');
  const [sectionThicknessMm, setSectionThicknessMm] = useState<number>(20); // 20 mm door handle cross-section

  // Run simulation calculation
  const params: HeatTreatmentCycleParams = useMemo(() => ({
    solutionTempC,
    soakingTimeMin,
    heatingRateCPerMin,
    coolingMedium,
    sectionThicknessMm
  }), [solutionTempC, soakingTimeMin, heatingRateCPerMin, coolingMedium, sectionThicknessMm]);

  const sim = useMemo(() => simulateHeatTreatmentCycle(params), [params]);

  // Chart configuration
  const chartData = useMemo(() => {
    const labels = sim.timeTempProfile.map(p => `${p.timeMin}m`);
    const temperatures = sim.timeTempProfile.map(p => p.tempC);

    return {
      labels,
      datasets: [
        {
          label: 'Alloy Temperature [°C]',
          data: temperatures,
          borderColor: coolingMedium === 'water' ? '#f97316' : '#ef4444',
          backgroundColor: 'rgba(249, 115, 22, 0.1)',
          fill: true,
          tension: 0.25,
          borderWidth: 2.5,
          pointRadius: 0,
          pointHoverRadius: 5
        }
      ]
    };
  }, [sim, coolingMedium]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#0f172a',
        borderColor: '#334155',
        borderWidth: 1,
        titleColor: '#f97316',
        callbacks: {
          label: (ctx: any) => `Temp: ${ctx.parsed.y} °C (${sim.timeTempProfile[ctx.dataIndex]?.stage})`
        }
      }
    },
    scales: {
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: '#94a3b8', font: { size: 10 }, maxTicksLimit: 12 },
        title: { display: true, text: 'Cycle Elapsed Time [Minutes]', color: '#64748b' }
      },
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: '#94a3b8', font: { size: 10 } },
        min: 0,
        max: 1250,
        title: { display: true, text: 'Furnace / Part Temperature [°C]', color: '#64748b' }
      }
    }
  };

  const handleResetBenchmark = () => {
    setSolutionTempC(1050);
    setSoakingTimeMin(60);
    setHeatingRateCPerMin(15);
    setCoolingMedium('water');
    setSectionThicknessMm(20);
  };

  return (
    <div className="space-y-8">
      
      {/* Header Banner with Dedicated Attribution */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-orange-950/40 via-slate-900 to-cyan-950/40 border border-orange-500/40 shadow-2xl relative overflow-hidden">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-500/20 text-orange-300 border border-orange-500/40 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              <span>Chapter 4 • Solution Treatment Kinetics</span>
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Designed by Sadun Premakumara (210494D)</span>
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Solution Annealing & Water Quenching Simulator
          </h2>

          <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
            Simulates carbide dissolution thermodynamics, sensitization avoidance across the <code className="text-rose-400 font-mono">500°C – 850°C</code> danger zone, Sigma (<MathView latex="\sigma" />) phase suppression, and residual stress relief for the cast AISI 304 stainless steel door handle.
          </p>
        </div>

        <button
          onClick={handleResetBenchmark}
          className="self-start md:self-center flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/40 transition-all hover:scale-105 shadow-lg"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Load Premakumara's Optimal Plan (1050°C, Water Quench)</span>
        </button>
      </div>

      {/* Main Grid: Controls vs Visual Output & Microstructure */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Interactive Parameters (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md space-y-5">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <Settings2 className="w-4 h-4 text-orange-400" />
                <span>Thermal Cycle Parameters</span>
              </span>
              <span className="text-xs font-mono text-amber-400">GB1200 Standard</span>
            </div>

            {/* Slider: Solution Temperature */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300 font-medium">Solution Annealing Temp (T_sol)</span>
                <span className="font-mono text-orange-400 font-bold">{solutionTempC} °C</span>
              </div>
              <input
                type="range"
                min="950"
                max="1200"
                step="10"
                value={solutionTempC}
                onChange={(e) => setSolutionTempC(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                <span>Incomplete (&lt;1000°C)</span>
                <span className="text-emerald-400 font-semibold">GB1200: 1020–1080°C</span>
                <span>Excessive (&gt;1150°C)</span>
              </div>
            </div>

            {/* Slider: Soaking Time */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300 font-medium">Soaking Duration (t_soak)</span>
                <span className="font-mono text-amber-400 font-bold">{soakingTimeMin} minutes</span>
              </div>
              <input
                type="range"
                min="10"
                max="120"
                step="5"
                value={soakingTimeMin}
                onChange={(e) => setSoakingTimeMin(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="text-[10px] text-slate-500 mt-1">
                Required for 20mm section: 60 minutes for complete carbide dissolution
              </div>
            </div>

            {/* Cooling Quench Medium Selector */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-2">
                Quenching & Cooling Medium:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'water', label: 'Water Quenching', rate: '~120°C/s', safe: true, badge: 'Recommended' },
                  { id: 'forced_air', label: 'Forced Air Blast', rate: '~22°C/s', safe: false },
                  { id: 'still_air', label: 'Quiescent Still Air', rate: '~4.5°C/s', safe: false },
                  { id: 'furnace', label: 'Furnace Cooling', rate: '~1.5°C/min', safe: false, danger: true }
                ].map((medium) => (
                  <button
                    key={medium.id}
                    onClick={() => setCoolingMedium(medium.id as any)}
                    className={`p-2.5 rounded-xl text-left transition-all border ${
                      coolingMedium === medium.id
                        ? medium.id === 'water'
                          ? 'bg-orange-500/20 text-orange-200 border-orange-500/60 shadow-md'
                          : 'bg-rose-500/20 text-rose-200 border-rose-500/60 shadow-md'
                        : 'bg-slate-800/40 text-slate-400 border-slate-700/50 hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold">{medium.label}</span>
                      {medium.badge && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono">
                          {medium.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 mt-1">{medium.rate}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders: Heating Rate & Section Thickness */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300 font-medium">Heating Ramp</span>
                  <span className="font-mono text-slate-300">{heatingRateCPerMin} °C/m</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={heatingRateCPerMin}
                  onChange={(e) => setHeatingRateCPerMin(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-slate-400"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300 font-medium">Section Size</span>
                  <span className="font-mono text-slate-300">{sectionThicknessMm} mm</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="40"
                  step="1"
                  value={sectionThicknessMm}
                  onChange={(e) => setSectionThicknessMm(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-slate-400"
                />
              </div>
            </div>

            {/* Quenching Sensitization Verdict Alert */}
            <div className={`p-4 rounded-2xl border ${
              coolingMedium === 'water'
                ? 'bg-emerald-950/25 border-emerald-500/40 text-emerald-200'
                : 'bg-rose-950/25 border-rose-500/40 text-rose-200'
            }`}>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                {coolingMedium === 'water' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                )}
                <span>
                  {coolingMedium === 'water' ? 'Water Quench: Sensitization Prevented' : 'Warning: Grain Boundary Sensitization Risk'}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Traverse time through 850°C–500°C: <strong className="font-mono text-white">{sim.sensitizationTraverseTimeSec} seconds</strong>.
                {coolingMedium === 'water' ? (
                  <> Water quenching rapidly traverses the danger zone in under 3 seconds, freezing all 0.08% carbon in solid solution and preventing intergranular chromium depletion.</>
                ) : (
                  <> Slower cooling causes carbon to react with chromium, forming intergranular <code className="text-rose-300 font-mono">Cr23C6</code> precipitates and causing severe knife-line attack.</>
                )}
              </p>
            </div>

          </div>
        </div>

        {/* Right Column: Dynamic TTT Chart & Key Metallurgical Metrics (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Key Output Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Carbide Dissolution</div>
              <div className="text-2xl font-black text-amber-400 mt-1 font-mono">
                {sim.carbideDissolutionPercent}%
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                M23C6 dissolved
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Corrosion Immunity</div>
              <div className="text-2xl font-black text-emerald-400 mt-1 font-mono">
                {sim.sensitizationAvoidanceIndex}%
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                Sensitization index
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Stress Relief</div>
              <div className="text-2xl font-black text-cyan-400 mt-1 font-mono">
                {sim.residualStressReliefPercent}%
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                Residual casting stress
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Sigma Suppression</div>
              <div className="text-2xl font-black text-purple-400 mt-1 font-mono">
                {sim.sigmaPhaseSuppressionPercent}%
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                Fe-Cr σ phase
              </div>
            </div>

          </div>

          {/* Time-Temperature Thermal Cycle Curve Chart */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Activity className="w-4 h-4 text-orange-400" />
                  <span>Time-Temperature Solution Annealing Curve</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Heating ({sim.heatingTimeMin}m) → Soaking ({soakingTimeMin}m) → Quench ({sim.coolingTimeSec}s)
                </p>
              </div>

              {/* ASTM A262 Microstructure Quality Badge */}
              <div className="self-start sm:self-center">
                <span className={`px-3 py-1 rounded-xl text-xs font-mono font-bold border ${
                  sim.astmA262PracticeRating.includes('Acceptable')
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                }`}>
                  ASTM A262: {sim.astmA262PracticeRating.split(' ')[0]}
                </span>
              </div>
            </div>

            <div className="h-[280px] w-full">
              <Line data={chartData} options={chartOptions} />
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400">
              <span>Sensitization Hazard Zone: <strong className="text-rose-400 font-mono">500°C – 850°C</strong></span>
              <span>Predicted Hardness: <strong className="text-slate-200 font-mono">{sim.predictedHardnessHrb} HRB</strong></span>
              <span>Yield Strength: <strong className="text-slate-200 font-mono">{sim.predictedYieldStrengthMpa} MPa</strong></span>
            </div>
          </div>

          {/* Report Metallurgical Principles Callout */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
              <Info className="w-4 h-4 text-amber-400" />
              <span>Premakumara's Metallurgical Findings (Report Chapter 4)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="font-bold text-orange-400">Carbide Solubility Shift:</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Carbon solubility in austenite is high at elevated temperatures (<MathView latex="0.34\%" /> at 1200°C) and low at room temperature (<MathView latex="0.02\%" /> at 600°C). Heating to 1050°C completely dissolves <MathView latex="M_{23}C_6" /> carbides.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="font-bold text-cyan-400">Why Water Quenching is Mandatory:</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Slow cooling precipitates carbides at grain boundaries, stripping adjacent areas of chromium below <MathView latex="12\%" />. Rapid water cooling freezes carbon in solid solution, preserving corrosion resistance.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
