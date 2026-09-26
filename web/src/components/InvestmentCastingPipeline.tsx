import React, { useState } from 'react';
import { 
  Layers, 
  ChevronRight, 
  ChevronLeft, 
  Flame, 
  Droplet, 
  Box, 
  GitFork, 
  Thermometer, 
  Clock, 
  Activity, 
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Info
} from 'lucide-react';
import { CASTING_STEPS, CASTING_METHODS, InvestmentCastingStep, CastingMethod } from '../core/castingAndDesignData';

export const InvestmentCastingPipeline: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [selectedMethodIndex, setSelectedMethodIndex] = useState<number>(0);

  const currentStep = CASTING_STEPS[activeStepIndex];
  const activeMethod = CASTING_METHODS[selectedMethodIndex];

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Box': return Box;
      case 'GitFork': return GitFork;
      case 'Layers': return Layers;
      case 'Flame': return Flame;
      case 'Thermometer': return Thermometer;
      case 'Droplet': return Droplet;
      case 'Clock': return Clock;
      case 'Activity': return Activity;
      case 'ShieldCheck': return ShieldCheck;
      default: return Layers;
    }
  };

  const CurrentIcon = getStepIcon(currentStep.iconName);

  return (
    <div className="space-y-10">
      
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-500/40 shadow-2xl">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Chapter 3.2 • Manufacturing Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            9-Stage Investment (Lost-Wax) Casting Workflow
          </h2>
          <p className="text-sm text-slate-300 mt-1 max-w-2xl">
            Selected for its ability to cast high-melting AISI 304 stainless steel (<code className="text-cyan-400 font-mono">1371°C – 1427°C</code>) into complex ergonomic scalloped contours with fine <code className="text-cyan-400 font-mono">Ra 1.6 μm</code> surface finish and zero parting draft angles.
          </p>
        </div>

        <div className="px-4 py-2 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono self-start md:self-center">
          Pouring Temp: 2500°F – 2600°F
        </div>
      </div>

      {/* 9-Step Horizontal Progress Tracker */}
      <div className="p-4 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl overflow-x-auto">
        <div className="flex items-center justify-between min-w-[750px] gap-2">
          {CASTING_STEPS.map((step, idx) => {
            const isCompleted = idx < activeStepIndex;
            const isCurrent = idx === activeStepIndex;
            const StepIcon = getStepIcon(step.iconName);

            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex-1 flex flex-col items-center text-center p-2.5 rounded-2xl transition-all border ${
                  isCurrent
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/60 shadow-lg shadow-cyan-500/10 scale-105'
                    : isCompleted
                    ? 'bg-slate-950/60 text-slate-300 border-slate-700/60 hover:bg-slate-800'
                    : 'bg-slate-950/30 text-slate-500 border-slate-800/40 hover:text-slate-400'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-1.5 ${
                  isCurrent ? 'bg-cyan-500 text-slate-950 font-bold' : isCompleted ? 'bg-slate-800 text-cyan-400' : 'bg-slate-900 text-slate-600'
                }`}>
                  <StepIcon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono font-bold">Step 0{step.stepNumber}</span>
                <span className="text-[11px] font-semibold truncate max-w-[85px]">{step.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Deep-Dive Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Step Details Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shadow-lg">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-cyan-400 uppercase">
                    Stage {currentStep.stepNumber} of 09
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                    {currentStep.name}
                  </h3>
                </div>
              </div>

              <span className="px-3 py-1 rounded-xl text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                {currentStep.parameter}
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {currentStep.summary}
            </p>

            {/* Step Sub-Operations List */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Process Execution & Technical Criteria</span>
              </h4>
              <div className="space-y-2">
                {currentStep.details.map((detail, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-mono font-bold text-[10px] flex-shrink-0 mt-0.5">
                      0{i + 1}
                    </span>
                    <span className="leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prev/Next Step Navigation */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => setActiveStepIndex(Math.max(0, activeStepIndex - 1))}
                disabled={activeStepIndex === 0}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none text-slate-200 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Stage</span>
              </button>

              <span className="text-xs font-mono text-slate-400">
                {activeStepIndex + 1} of {CASTING_STEPS.length}
              </span>

              <button
                onClick={() => setActiveStepIndex(Math.min(CASTING_STEPS.length - 1, activeStepIndex + 1))}
                disabled={activeStepIndex === CASTING_STEPS.length - 1}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 disabled:opacity-40 disabled:pointer-events-none text-white transition-colors shadow-md shadow-cyan-600/30"
              >
                <span>Next Stage</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Visual Schematics & Report Figures Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Wax Tree 3D CAD Drawing (Figure 23) */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <GitFork className="w-4 h-4 text-cyan-400" />
                <span>Report Figure 23: 3D CAD Wax Tree</span>
              </h4>
              <span className="text-[10px] font-mono text-cyan-400">4-Handle Tree</span>
            </div>

            <div className="h-64 w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center p-2 group">
              <img 
                src="/assets/fig23_3d_cad_wax_tree_assembly.jpeg" 
                alt="3D CAD drawing of wax tree" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              SolidWorks CAD model of four wax door handle replicas mounted symmetrically around the central pouring sprue and feeder gating manifold to optimize laminar mold filling.
            </p>
          </div>

          {/* Investment Casting Procedure Diagram (Figure 16) */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Report Figure 16: Ceramic Shell Method</span>
              </h4>
              <span className="text-[10px] font-mono text-cyan-400">Lost-Wax</span>
            </div>

            <div className="h-56 w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center p-2 group">
              <img 
                src="/assets/fig16_investment_casting_steps.png" 
                alt="Investment Casting Procedure" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Illustrated progression: Pattern creation → Wax tree assembly → Ceramic slurry dipping → Stucco buildup → Steam dewaxing → Molten metal pouring.
            </p>
          </div>

        </div>

      </div>

      {/* Comparative Matrix: 5 Metal Casting Processes */}
      <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-6">
        <div>
          <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
            Report Section 2.3 Evaluation
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
            Why Investment Casting Over Alternative Foundry Methods?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Rigorous comparison of the 5 casting methods evaluated in the University of Moratuwa thesis.
          </p>
        </div>

        {/* Casting Method Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {CASTING_METHODS.map((method, idx) => {
            const isSelected = idx === selectedMethodIndex;
            return (
              <button
                key={method.name}
                onClick={() => setSelectedMethodIndex(idx)}
                className={`p-3 rounded-2xl text-left transition-all border ${
                  isSelected
                    ? 'bg-cyan-500/20 text-cyan-200 border-cyan-500/60 shadow-lg'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    method.suitabilityFor304SS === 'Ideal'
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : method.suitabilityFor304SS === 'Limited'
                      ? 'bg-amber-500/20 text-amber-300'
                      : 'bg-rose-500/20 text-rose-300'
                  }`}>
                    {method.suitabilityFor304SS}
                  </span>
                </div>
                <div className="text-xs font-bold text-white truncate">{method.name.split(' ')[0]}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Method Detailed Breakdown */}
        <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-4 h-48 rounded-2xl overflow-hidden bg-black border border-slate-800 flex items-center justify-center p-2">
            <img 
              src={activeMethod.image} 
              alt={activeMethod.name} 
              className="w-full h-full object-contain"
            />
          </div>

          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold text-white">{activeMethod.name}</h4>
              <span className="text-xs font-mono text-cyan-400">Tolerance: {activeMethod.dimensionalAccuracy}</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase font-mono block">Surface Finish</span>
                <span className="font-semibold text-slate-200 mt-0.5 block">{activeMethod.surfaceFinish}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase font-mono block">Tooling Cost</span>
                <span className="font-semibold text-slate-200 mt-0.5 block">{activeMethod.toolingCost}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase font-mono block">Volume</span>
                <span className="font-semibold text-slate-200 mt-0.5 block">{activeMethod.productionVolume}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Advantages
                </span>
                <ul className="text-slate-400 space-y-1 text-[11px]">
                  {activeMethod.advantages.map((adv, i) => (
                    <li key={i}>• {adv}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-amber-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" /> Limitations
                </span>
                <ul className="text-slate-400 space-y-1 text-[11px]">
                  {activeMethod.limitations.map((lim, i) => (
                    <li key={i}>• {lim}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
