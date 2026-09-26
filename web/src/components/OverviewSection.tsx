import React from 'react';
import { 
  Flame, 
  Layers, 
  Settings2, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Info,
  Droplet
} from 'lucide-react';
import { MathView } from './MathView';

interface OverviewSectionProps {
  setActiveTab: (tab: string) => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({ setActiveTab }) => {
  return (
    <div className="space-y-12">
      
      {/* Executive Summary Card */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-orange-500/15 text-orange-400 border border-orange-500/30">
            <Flame className="w-3.5 h-3.5" />
            <span>Ferrous Metallurgy & Architectural Hardware</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            Engineering an Architectural Masterpiece: From Liquid Steel to Precision Heat Treatment
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            In modern architectural engineering, the door handle is the foremost tactile interface connecting human occupancy with structural spaces. Rather than a complex moving mechanical assembly prone to latch sticking, spring fatigue, and squeaking, this project engineers a <strong>solid static architectural pull handle</strong> cast from <strong>AISI 304 austenitic stainless steel</strong>.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Due to the extreme melting point of stainless steel (<code className="text-orange-300 font-mono">1371°C – 1427°C</code>) and intricate 2.0 cm ergonomic wave scallops, <strong>Investment (Lost-Wax) Casting</strong> is employed with 3D printed wax pattern trees and ceramic refractory shells. Following casting, the handle undergoes a rigorous <strong>Solution Annealing & Water Quenching Heat Treatment</strong> engineered by <strong>Sadun Premakumara (210494D)</strong> to dissolve chromium carbides, suppress brittle Sigma (<MathView latex="\sigma" />) phase, and guarantee absolute immunity to intergranular corrosion.
          </p>
        </div>
      </div>

      {/* 3 Core Engineering Pillars Grid */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-orange-400" />
            <span>The Three Engineering Pillars of the Project</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Grounded in the research findings of the MT2220 University of Moratuwa thesis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1: Material & Metallurgy */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition-all group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono font-bold text-amber-400 uppercase">
                Pillar 01 • Materials Selection
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                AISI 304 Austenitic Alloy
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Selected over wood, brass, aluminum, and zinc alloys for its passive self-healing <MathView latex="\text{Cr}_2\text{O}_3" /> film and non-porous oligodynamic hygienic surface.
              </p>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                18–20% Cr • 8–10.5% Ni • C ≤ 0.08%
              </div>

              <ul className="text-xs text-slate-400 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Tensile strength 515–620 MPa</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>40% elongation for high impact toughness</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Non-magnetic FCC austenite matrix</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setActiveTab('materials')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 text-xs font-semibold border border-amber-500/30 transition-colors"
            >
              <span>Explore Materials Matrix</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pillar 2: Investment Casting */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl flex flex-col justify-between space-y-4 hover:border-cyan-500/40 transition-all group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono font-bold text-cyan-400 uppercase">
                Pillar 02 • Manufacturing
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                9-Stage Investment Casting
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Precision lost-wax casting utilizes 3D printed wax patterns assembled into 4-handle cluster trees and coated in 6–8 refractory ceramic stucco layers.
              </p>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                Pour: 1371–1427°C • Preheating: 1204°C
              </div>

              <ul className="text-xs text-slate-400 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>±0.1 mm tight dimensional tolerance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Ra 1.6 μm smooth as-cast surface finish</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Withstands extreme stainless melting temps</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setActiveTab('investment-casting')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 text-xs font-semibold border border-cyan-500/30 transition-colors"
            >
              <span>View Casting Workflow</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pillar 3: Heat Treatment Plan (Premakumara) */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl flex flex-col justify-between space-y-4 hover:border-orange-500/40 transition-all group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                <Flame className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono font-bold text-orange-400 uppercase flex items-center justify-between">
                <span>Pillar 03 • Heat Treatment</span>
                <span className="text-[10px] text-amber-300">★ 210494D</span>
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors">
                Solution Annealing & Quench
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Engineered by Sadun Premakumara: Soaking at 1050°C dissolves grain boundary carbides; rapid water quench avoids the 500–850°C sensitization window.
              </p>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                1050°C (60 min) + Agitated Water Quench
              </div>

              <ul className="text-xs text-slate-400 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <span>100% dissolution of M23C6 carbides</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <span>Suppression of brittle intermetallic σ phase</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <span>95% alleviation of casting residual stresses</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setActiveTab('heat-treat-sim')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-orange-500/15 hover:bg-orange-500/25 text-orange-300 text-xs font-semibold border border-orange-500/30 transition-colors"
            >
              <span>Launch Heat Treatment Simulator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

      {/* Hand Sketch vs SolidWorks CAD Preview Row */}
      <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
              CAD & Industrial Design
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              From Ergonomic Hand Sketch to SolidWorks Blueprint
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Full orthographic drawing (Figure 22) and 1:1 scale dimensioned drawing (Figure 21)
            </p>
          </div>

          <button
            onClick={() => setActiveTab('cad-ergonomics')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/40 hover:bg-purple-500/30 transition-colors self-start sm:self-center"
          >
            <span>View Full Blueprints</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="h-56 w-full rounded-xl overflow-hidden bg-black flex items-center justify-center p-2">
              <img 
                src="/assets/fig21_hand_drawing_dimensions_scale.jpeg" 
                alt="1:1 Hand Drawing" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-xs font-bold text-white">Figure 21: 1:1 Scale Hand Drawing</div>
            <p className="text-[11px] text-slate-400">
              Detailed dimensioning: 24 cm overall length, 16 cm standoff span, 2 cm scalloped grip pitch, 4 cm standoff clearance.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="h-56 w-full rounded-xl overflow-hidden bg-black flex items-center justify-center p-2">
              <img 
                src="/assets/fig22_solidworks_cad_engineering_drawing.jpeg" 
                alt="SolidWorks CAD Drawing" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-xs font-bold text-white">Figure 22: SolidWorks Orthographic CAD Drawing</div>
            <p className="text-[11px] text-slate-400">
              Four standard views: Plan View, Side View, Front View, and 3D Isometric View with University of Moratuwa department title block.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
