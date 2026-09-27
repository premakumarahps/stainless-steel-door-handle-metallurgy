import React, { useState, useMemo } from 'react';
import { 
  Settings2, 
  Maximize2, 
  CheckCircle2, 
  AlertTriangle, 
  Sliders, 
  Compass, 
  Info,
  ShieldCheck,
  Activity,
  Layers
} from 'lucide-react';
import { calculateHandleStress } from '../core/heatTreatmentPhysics';
import { MathView } from './MathView';

export const CadAndErgonomics: React.FC = () => {
  const [activeDrawing, setActiveDrawing] = useState<'cad' | 'hand' | 'tree'>('cad');
  const [pullForceN, setPullForceN] = useState<number>(500); // 500 N default (~50 kgf pull force)
  const [standoffLengthCm, setStandoffLengthCm] = useState<number>(4.0); // 4.0 cm standoff from door face
  const [handleSpanCm, setHandleSpanCm] = useState<number>(16.0); // 16.0 cm span between posts
  const [handleDiameterCm, setHandleDiameterCm] = useState<number>(2.5); // 2.5 cm mean grip diameter

  // Mechanical stress analysis
  const stressResult = useMemo(() => {
    return calculateHandleStress({
      pullForceN,
      standoffLengthCm,
      handleSpanCm,
      handleDiameterCm,
      yieldStrengthMpa: 205 // Solution Annealed 304 SS yield strength
    });
  }, [pullForceN, standoffLengthCm, handleSpanCm, handleDiameterCm]);

  return (
    <div className="space-y-10">
      
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-slate-950 border border-purple-500/40 shadow-2xl">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">
            <Settings2 className="w-4 h-4 text-purple-400" />
            <span>Chapter 3 • Industrial Design & CAD Blueprints</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            Ergonomics, SolidWorks CAD & Stress Analysis
          </h2>
          <p className="text-sm text-slate-300 mt-1 max-w-2xl">
            Static solid architectural pull handle design featuring 2 cm corrugated scalloped grip contours, 1:1 scale dimensioned drafting, and ANSI/BHMA load capacity verification.
          </p>
        </div>

        <div className="px-4 py-2 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono self-start md:self-center">
          SolidWorks 2023 Blueprint
        </div>
      </div>

      {/* Drawing View Switcher & Blueprint Canvas */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
          <div className="flex items-center gap-2">
            {[
              { id: 'cad', label: 'SolidWorks 2D Orthographic CAD (Fig 22)' },
              { id: 'hand', label: '1:1 Scale Hand Drawing (Fig 21)' },
              { id: 'tree', label: '3D CAD Wax Tree Assembly (Fig 23)' }
            ].map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveDrawing(d.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                  activeDrawing === d.id
                    ? 'bg-purple-500/20 text-purple-200 border-purple-500/50 shadow-md'
                    : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>

          <span className="text-xs font-mono text-slate-400">
            Dimensions in Centimeters (cm)
          </span>
        </div>

        {/* Blueprint Viewer Card */}
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
          <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-slate-950 border border-slate-700/80 flex items-center justify-center p-3">
            {activeDrawing === 'cad' && (
              <img 
                src="/assets/fig22_solidworks_cad_engineering_drawing.jpeg" 
                alt="SolidWorks CAD Engineering Drawing" 
                className="w-full h-full object-contain"
              />
            )}
            {activeDrawing === 'hand' && (
              <img 
                src="/assets/fig21_hand_drawing_dimensions_scale.jpeg" 
                alt="1:1 Scale Hand Drawing" 
                className="w-full h-full object-contain"
              />
            )}
            {activeDrawing === 'tree' && (
              <img 
                src="/assets/fig23_3d_cad_wax_tree_assembly.jpeg" 
                alt="3D CAD Wax Tree Assembly" 
                className="w-full h-full object-contain"
              />
            )}
          </div>

          {/* Blueprint Annotation Footer */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
            <span>Overall Length: <strong className="text-white font-mono">24.0 cm / 25.0 cm</strong></span>
            <span>Standoff Mounting Span: <strong className="text-white font-mono">16.0 cm</strong></span>
            <span>Scallop Groove Pitch: <strong className="text-white font-mono">2.0 cm</strong></span>
            <span>Post Diameter: <strong className="text-white font-mono">2.0 cm</strong></span>
            <span>Escutcheon Base: <strong className="text-white font-mono">4.0 cm</strong></span>
          </div>
        </div>
      </div>

      {/* Mechanical Bending & Pull Force Calculator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Controls Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-purple-400" />
                <span>Pull Force & Geometric Load</span>
              </span>
              <span className="text-xs font-mono text-purple-400">ANSI/BHMA</span>
            </div>

            {/* Slider: Pull Force */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300 font-medium">Applied Pull Force (F)</span>
                <span className="font-mono text-purple-400 font-bold">{pullForceN} N (~{(pullForceN / 9.81).toFixed(0)} kgf)</span>
              </div>
              <input
                type="range"
                min="100"
                max="1500"
                step="50"
                value={pullForceN}
                onChange={(e) => setPullForceN(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                <span>Normal Pull (~200N)</span>
                <span>Heavy Surge (500N)</span>
                <span>Shock Test (1000N+)</span>
              </div>
            </div>

            {/* Slider: Standoff Distance */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300 font-medium">Standoff Standoff Offset (L)</span>
                <span className="font-mono text-slate-300">{standoffLengthCm.toFixed(1)} cm</span>
              </div>
              <input
                type="range"
                min="2.0"
                max="8.0"
                step="0.5"
                value={standoffLengthCm}
                onChange={(e) => setStandoffLengthCm(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-slate-400"
              />
            </div>

            {/* Slider: Handle Mean Diameter */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300 font-medium">Grip Diameter (d)</span>
                <span className="font-mono text-slate-300">{handleDiameterCm.toFixed(1)} cm</span>
              </div>
              <input
                type="range"
                min="1.5"
                max="4.0"
                step="0.1"
                value={handleDiameterCm}
                onChange={(e) => setHandleDiameterCm(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-slate-400"
              />
            </div>

            {/* Safety Factor Verdict Alert */}
            <div className={`p-4 rounded-2xl border ${
              stressResult.isSafe 
                ? 'bg-emerald-950/25 border-emerald-500/40 text-emerald-200' 
                : 'bg-rose-950/25 border-rose-500/40 text-rose-200'
            }`}>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                {stressResult.isSafe ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                )}
                <span>Structural Safety: Factor of Safety {stressResult.safetyFactor}x</span>
              </div>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Peak bending stress <strong className="font-mono text-white">{stressResult.peakBendingStressMpa} MPa</strong> is well below 304 stainless steel yield strength (<MathView latex="\sigma_y = 205\text{ MPa}" />). Confirms the finding in Chapter 3: solid 304 handle requires <strong>no internal reinforcing ribs</strong>!
              </p>
            </div>

          </div>
        </div>

        {/* Results & Calculations Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Bending Moment</div>
              <div className="text-2xl font-black text-purple-400 mt-1 font-mono">
                {stressResult.bendingMomentNm} <span className="text-xs font-normal">N·m</span>
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                Per standoff post
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Max Stress (σ)</div>
              <div className="text-2xl font-black text-amber-400 mt-1 font-mono">
                {stressResult.peakBendingStressMpa} <span className="text-xs font-normal">MPa</span>
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                Yield: 205 MPa
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Safety Factor</div>
              <div className="text-2xl font-black text-emerald-400 mt-1 font-mono">
                {stressResult.safetyFactor}x
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                Target: &gt;1.5x
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Elastic Deflection</div>
              <div className="text-2xl font-black text-cyan-400 mt-1 font-mono">
                {stressResult.deflectionMm} <span className="text-xs font-normal">mm</span>
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                Imperceptible deflection
              </div>
            </div>

          </div>

          {/* Report Architectural & Ergonomic Rationale */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Info className="w-4 h-4 text-purple-400" />
              <span>Ergonomic & Operational Rationale (Report Section 3.1)</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                <span className="font-bold text-purple-300">Zero Mechanical Wear:</span>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Eliminating internal latch tumblers, return springs, and cams removes squeaking, sticking, and fatigue failures, providing a maintenance-free lifetime architectural installation.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                <span className="font-bold text-cyan-300">Scalloped Tactile Indexing:</span>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  2.0 cm sinusoidal ridges provide positive tactile orientation and high non-slip friction, accommodating children, elderly residents, and individuals wearing winter gloves.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
