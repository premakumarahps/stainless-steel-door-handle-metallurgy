import React from 'react';
import { 
  Flame, 
  Layers, 
  Settings2, 
  Compass, 
  ShieldCheck, 
  Cpu, 
  ChevronRight, 
  Download, 
  FileText, 
  Award, 
  Sparkles,
  Zap,
  Droplet
} from 'lucide-react';
import { MathView } from './MathView';

interface HeroProps {
  setActiveTab: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setActiveTab }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-800/80">
      
      {/* Background Metallurgical Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-orange-600/15 via-amber-500/10 to-sky-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-orange-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Decorative Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges & Academic Lineage */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold shadow-inner">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
            <span>University of Moratuwa</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">Department of Materials Science & Engineering</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>MT2220: Ferrous Metals and Alloys</span>
          </div>

          {/* Prominent Lead Heat Treatment Specialist Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-950/80 via-slate-900 to-cyan-950/80 border border-amber-500/60 text-amber-300 text-xs font-medium shadow-lg shadow-amber-950/40">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Heat Treatment Architect: <strong>Sadun Premakumara</strong></span>
            <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-200 font-mono text-[10px] font-bold border border-amber-500/40">
              210494D
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
            DESIGN OF STAINLESS STEEL{' '}
            <span className="bg-gradient-to-r from-slate-100 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              DOOR HANDLE
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            An advanced digital materials engineering showcase covering <strong>ergonomic SolidWorks CAD modeling</strong>, 
            <strong>9-stage lost-wax investment casting</strong>, and the <strong>solution annealing heat treatment plan</strong> engineered to eliminate intergranular sensitization and residual casting stress.
          </p>

          {/* Key Metallurgical Formula / Parameter Teaser Pill */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 px-5 py-2.5 rounded-2xl bg-slate-900/80 border border-slate-700/60 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <span className="text-orange-400 font-bold">Solution Annealing:</span>
              <span className="text-white font-bold">1020°C – 1080°C</span>
            </div>
            <span className="hidden sm:inline text-slate-700">|</span>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <span className="text-cyan-400 font-bold">Quenching:</span>
              <span className="text-white font-bold">Water Quench (&lt;3s)</span>
            </div>
            <span className="hidden sm:inline text-slate-700">|</span>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <span className="text-amber-400 font-bold">Sensitization Window:</span>
              <span className="text-white font-bold">500°C – 850°C</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setActiveTab('heat-treat-sim')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-500 hover:to-amber-500 text-white shadow-xl shadow-orange-600/30 hover:shadow-orange-600/50 border border-orange-400/40 transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <Flame className="w-4 h-4 fill-current text-white" />
              <span>Launch Heat Treatment Simulator</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('investment-casting')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-900/90 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/60 shadow-lg shadow-cyan-950/30 transition-all hover:scale-[1.02]"
            >
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Investment Casting Workflow</span>
            </button>

            <button
              onClick={() => setActiveTab('cad-ergonomics')}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/70 hover:bg-slate-800/90 text-slate-200 border border-slate-700 transition-all"
            >
              <Settings2 className="w-4 h-4 text-amber-400" />
              <span>CAD Blueprints & Dimensions</span>
            </button>

            <button
              onClick={() => setActiveTab('report')}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/70 hover:bg-slate-800/90 text-slate-200 border border-slate-700 transition-all"
            >
              <FileText className="w-4 h-4 text-orange-400" />
              <span>46-Page Technical Report</span>
            </button>
          </div>
        </div>

        {/* 4 Multi-Disciplinary Core Pillar Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Heat Treatment Plan */}
          <div 
            onClick={() => setActiveTab('heat-treat-sim')}
            className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-orange-500/40 transition-all hover:-translate-y-1 cursor-pointer group shadow-xl"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform">
              <Flame className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider flex items-center justify-between">
              <span>Chapter 4 • Specialization</span>
              <span className="text-[10px] text-amber-300">★ 210494D</span>
            </div>
            <h3 className="text-lg font-bold text-white mt-1 group-hover:text-orange-300 transition-colors">
              Solution Heat Treatment
            </h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Engineered by Sadun Premakumara: 1050°C soaking dissolves chromium carbides (<MathView latex="M_{23}C_6" />) followed by rapid water quench to freeze carbon in solid solution.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-orange-400">
              <span>Simulate TTT Kinetics</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 2: Investment Casting */}
          <div 
            onClick={() => setActiveTab('investment-casting')}
            className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-cyan-500/40 transition-all hover:-translate-y-1 cursor-pointer group shadow-xl"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
              Chapter 3.2 • Manufacturing
            </div>
            <h3 className="text-lg font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">
              9-Stage Investment Casting
            </h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Lost-wax process with 3D printed wax patterns, 4-handle wax trees, ceramic slurry shell building (6-8 stucco dips), and 1400°C induction pouring.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-cyan-400">
              <span>Explore Casting Pipeline</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 3: Material Matrix */}
          <div 
            onClick={() => setActiveTab('materials')}
            className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-amber-500/40 transition-all hover:-translate-y-1 cursor-pointer group shadow-xl"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
              Chapter 2 • Materials Science
            </div>
            <h3 className="text-lg font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">
              AISI 304 Metallurgy
            </h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Comparison across 6 handle materials and 4 stainless steel grades (304, 201, 439, 441). Passive <MathView latex="\text{Cr}_2\text{O}_3" /> film and oligodynamic hygienic properties.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-amber-400">
              <span>Compare Alloys</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 4: CAD & Ergonomics */}
          <div 
            onClick={() => setActiveTab('cad-ergonomics')}
            className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-purple-500/40 transition-all hover:-translate-y-1 cursor-pointer group shadow-xl"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
              <Settings2 className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
              Chapter 3.1 • Drafting
            </div>
            <h3 className="text-lg font-bold text-white mt-1 group-hover:text-purple-300 transition-colors">
              Ergonomic CAD Blueprints
            </h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              SolidWorks 2D orthographic projections (Plan, Side, Front, 3D views) and 1:1 scale dimensioned drawings with 2.0 cm scalloped finger grips.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-purple-400">
              <span>Inspect CAD Blueprints</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
