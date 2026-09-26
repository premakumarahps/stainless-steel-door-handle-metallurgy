import React from 'react';
import { 
  Flame, 
  GraduationCap, 
  FileText, 
  Download, 
  ShieldCheck, 
  ArrowUp,
  Layers,
  Settings2
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-slate-800/80 bg-slate-950/90 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Department */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden border border-orange-500/40 p-0.5 bg-slate-900 shadow-md">
                <img 
                  src="/assets/door_handle_logo.jpg" 
                  alt="Door Handle Logo" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <span className="font-extrabold text-sm text-white tracking-wide">
                DOOR HANDLE DESIGN
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Materials science, investment casting engineering, and solution annealing heat treatment analysis.
            </p>
            <div className="text-[11px] text-slate-500 font-mono">
              University of Moratuwa • Sri Lanka
            </div>
          </div>

          {/* Solvers & Tools */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Interactive Engineering
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => { setActiveTab('heat-treat-sim'); scrollToTop(); }}
                  className="hover:text-orange-400 transition-colors"
                >
                  Solution Heat Treatment Simulator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('investment-casting'); scrollToTop(); }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  9-Stage Investment Casting Workflow
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('materials'); scrollToTop(); }}
                  className="hover:text-amber-400 transition-colors"
                >
                  AISI 304 Materials Selection Matrix
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('cad-ergonomics'); scrollToTop(); }}
                  className="hover:text-purple-400 transition-colors"
                >
                  SolidWorks CAD Blueprints & Stress
                </button>
              </li>
            </ul>
          </div>

          {/* Academic Report */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Academic Documents
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/docs/Door_Handle_Design_and_Heat_Treatment_Report.pdf" 
                  download 
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Technical Report (46-Page PDF)</span>
                </a>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('report'); scrollToTop(); }}
                  className="hover:text-orange-400 transition-colors"
                >
                  Online Thesis Chapter Reader
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('team'); scrollToTop(); }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Group B Research Directory
                </button>
              </li>
            </ul>
          </div>

          {/* Attribution Box */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Heat Treatment Specialist
            </h4>
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-1.5 text-amber-300 font-semibold text-xs">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Sadun Premakumara</span>
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                Index: <strong className="text-amber-300">210494D</strong>
              </div>
              <div className="text-[10px] text-slate-400">
                Lead Metallurgist & Heat Treatment Process Architect
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800 transition-colors text-xs font-semibold"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © 2023–2026 Department of Materials Science and Engineering, University of Moratuwa. All academic rights reserved.
          </div>
          <div className="font-mono text-slate-400">
            MT2220: Ferrous Metals and Alloys
          </div>
        </div>
      </div>
    </footer>
  );
};
