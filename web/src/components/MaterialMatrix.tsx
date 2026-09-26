import React, { useState } from 'react';
import { 
  Compass, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Sparkles, 
  Award,
  Info,
  Layers,
  Activity
} from 'lucide-react';
import { MATERIAL_COMPARISONS, STAINLESS_GRADES, MaterialComparison, StainlessGrade } from '../core/castingAndDesignData';
import { MathView } from './MathView';

export const MaterialMatrix: React.FC = () => {
  const [selectedMatId, setSelectedMatId] = useState<string>('stainless-steel');
  const [selectedGrade, setSelectedGrade] = useState<string>('AISI 304 (18-8)');

  const activeMaterial = MATERIAL_COMPARISONS.find(m => m.id === selectedMatId) || MATERIAL_COMPARISONS[0];
  const activeGradeData = STAINLESS_GRADES.find(g => g.grade === selectedGrade) || STAINLESS_GRADES[0];

  const elements304 = [
    { name: 'Iron (Fe)', percent: '68.0 - 72.0%', role: 'Base matrix element', color: '#94a3b8' },
    { name: 'Chromium (Cr)', percent: '18.0 - 20.0%', role: 'Forms spontaneous self-healing Cr2O3 passive layer', color: '#38bdf8' },
    { name: 'Nickel (Ni)', percent: '8.0 - 10.5%', role: 'Stabilizes FCC austenite phase down to -50°C', color: '#f59e0b' },
    { name: 'Manganese (Mn)', percent: '2.0% max', role: 'Deoxidizer & hot workability promoter', color: '#a855f7' },
    { name: 'Silicon (Si)', percent: '1.0% max', role: 'Fluidity promoter during casting', color: '#10b981' },
    { name: 'Carbon (C)', percent: '0.08% max', role: 'Kept minimal to prevent grain boundary sensitization', color: '#f97316' },
    { name: 'Phosphorus (P)', percent: '0.045% max', role: 'Trace impurity', color: '#64748b' },
    { name: 'Sulfur (S)', percent: '0.030% max', role: 'Trace impurity controlled for weldability', color: '#64748b' }
  ];

  return (
    <div className="space-y-10">
      
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-950 border border-amber-500/40 shadow-2xl">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>Chapter 2 • Materials Science & Alloy Selection</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            Materials Selection & AISI 304 Stainless Metallurgy
          </h2>
          <p className="text-sm text-slate-300 mt-1 max-w-2xl">
            Systematic engineering comparison across 6 architectural handle materials and 4 stainless steel grades, justifying the selection of 304 austenitic alloy for superior corrosion resistance and hygiene.
          </p>
        </div>

        <div className="px-4 py-2 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono self-start md:self-center">
          18-8 Austenitic Stainless
        </div>
      </div>

      {/* 6 Materials Selector Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {MATERIAL_COMPARISONS.map((mat) => {
          const isSelected = mat.id === selectedMatId;
          return (
            <button
              key={mat.id}
              onClick={() => setSelectedMatId(mat.id)}
              className={`p-3 rounded-2xl text-left transition-all border ${
                isSelected
                  ? 'bg-amber-500/20 text-white border-amber-500/60 shadow-lg shadow-amber-500/10 scale-[1.02]'
                  : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-850'
              }`}
            >
              <div className="text-[10px] font-mono text-amber-400">{mat.hygieneRating} Hygiene</div>
              <div className="text-xs font-bold text-slate-100 mt-0.5 truncate">{mat.name}</div>
            </button>
          );
        })}
      </div>

      {/* Active Material Deep-Dive */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Real Extracted Report Image (4 cols) */}
        <div className="lg:col-span-4 h-64 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center p-3">
          <img 
            src={activeMaterial.image} 
            alt={activeMaterial.name} 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Material Specs & Pros/Cons (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase">Evaluated Material</span>
              <h3 className="text-2xl font-black text-white mt-0.5">{activeMaterial.name}</h3>
            </div>

            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-1 rounded-xl text-xs font-mono font-bold ${
                activeMaterial.outdoorSuitability
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
              }`}>
                {activeMaterial.outdoorSuitability ? 'Outdoor Weatherproof' : 'Interior Only'}
              </span>
              <span className="px-2.5 py-1 rounded-xl text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                Cost: {activeMaterial.costRating}
              </span>
            </div>
          </div>

          {/* Performance Sliders / Bars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Durability</span>
                <span className="font-mono text-amber-400 font-bold">{activeMaterial.durability} / 5</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-400 h-full" style={{ width: `${(activeMaterial.durability / 5) * 100}%` }} />
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Corrosion Resistance</span>
                <span className="font-mono text-cyan-400 font-bold">{activeMaterial.corrosionResistance} / 5</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-cyan-400 h-full" style={{ width: `${(activeMaterial.corrosionResistance / 5) * 100}%` }} />
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Aesthetic Polish</span>
                <span className="font-mono text-purple-400 font-bold">{activeMaterial.aestheticFlexibility} / 5</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-purple-400 h-full" style={{ width: `${(activeMaterial.aestheticFlexibility / 5) * 100}%` }} />
              </div>
            </div>
          </div>

          {/* Advantages & Limitations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
            <div className="space-y-1.5">
              <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> Key Architectural Strengths
              </span>
              <ul className="text-slate-300 space-y-1 text-[11px]">
                {activeMaterial.pros.map((p, i) => (
                  <li key={i}>• {p}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-1.5">
              <span className="font-bold text-amber-400 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" /> Engineering Constraints
              </span>
              <ul className="text-slate-300 space-y-1 text-[11px]">
                {activeMaterial.cons.map((c, i) => (
                  <li key={i}>• {c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* 304 Elemental Composition & Grade Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Chemical Composition Breakdown (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md space-y-4">
            <div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase">Elemental Chemistry</span>
              <h3 className="text-xl font-bold text-white mt-0.5">
                AISI 304 Chemical Composition (Report Page 12)
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Also designated as 18-8 stainless steel (18% Cr, 8% Ni).
              </p>
            </div>

            <div className="space-y-2.5">
              {elements304.map((elem) => (
                <div key={elem.name} className="p-3 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <div className="font-bold text-white flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: elem.color }} />
                      <span>{elem.name}</span>
                    </div>
                    <div className="text-[10px] text-slate-400">{elem.role}</div>
                  </div>
                  <div className="font-mono font-bold text-slate-200">{elem.percent}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stainless Grades Comparison (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md space-y-4">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase">Grade Matrix</span>
              <h3 className="text-xl font-bold text-white mt-0.5">
                Stainless Steel Grades (304 vs 201 vs 439 vs 441)
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Comparison of austenitic vs ferritic stainless steel grades analyzed in Chapter 2.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {STAINLESS_GRADES.map((g) => (
                <button
                  key={g.grade}
                  onClick={() => setSelectedGrade(g.grade)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                    selectedGrade === g.grade
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-md'
                      : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  {g.grade}
                </button>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="font-bold text-white">{activeGradeData.grade}</span>
                <span className="font-mono text-cyan-400">{activeGradeData.series}</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {activeGradeData.keyStrengths}
              </p>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400">
                <div>Formability: <strong className="text-slate-200">{activeGradeData.formability}</strong></div>
                <div>Relative Cost: <strong className="text-slate-200">{activeGradeData.relativeCost}</strong></div>
              </div>
              <div className="pt-2 text-[11px] text-amber-300">
                Target Application: {activeGradeData.bestFit}
              </div>
            </div>

            {/* Why 304 cannot be quenched into martensite */}
            <div className="p-4 rounded-2xl bg-orange-950/20 border border-orange-500/30 text-xs text-slate-300 space-y-1.5">
              <div className="font-bold text-orange-400 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" />
                <span>Fundamental Metallurgy: Non-Hardenability</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Austenitic stainless steels cannot be hardened by heating and quenching because high Cr and Ni concentrations stabilize the FCC austenite lattice down to sub-zero temperatures (<MathView latex="M_s = -30^{\circ}\text{C} \text{ to } -70^{\circ}\text{C}" />). No martensitic phase transformation occurs upon cooling.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
