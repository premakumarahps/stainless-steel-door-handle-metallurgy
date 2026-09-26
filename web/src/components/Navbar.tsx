import React, { useState, useEffect } from 'react';
import { 
  Flame, 
  Layers, 
  Settings2, 
  Compass, 
  FileText, 
  Users, 
  Download, 
  Menu, 
  X,
  ChevronDown,
  ShieldCheck,
  Cpu,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 80) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 10) {
          setIsVisible(false); // Scrolling down
        } else if (lastScrollY - currentScrollY > 10) {
          setIsVisible(true); // Scrolling up
        }
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: Flame },
    { id: 'heat-treat-sim', label: 'Heat Treatment Simulator', icon: Flame, badge: 'Premakumara' },
    { id: 'investment-casting', label: 'Investment Casting', icon: Layers },
    { id: 'materials', label: 'Material Matrix', icon: Compass },
    { id: 'cad-ergonomics', label: 'CAD & Ergonomics', icon: Settings2 },
    { id: 'report', label: 'Technical Report', icon: FileText },
    { id: 'team', label: 'Group B Team', icon: Users },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        } bg-[#0b0f19]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/70`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Brand Logo & Title */}
          <div 
            onClick={() => setActiveTab('overview')}
            className="flex items-center gap-3.5 cursor-pointer group"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-orange-500/40 p-0.5 bg-slate-900 group-hover:border-orange-400 transition-colors shadow-lg shadow-orange-950/40">
              <img 
                src="/assets/door_handle_logo.jpg" 
                alt="Door Handle Heat Treatment Logo" 
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent pointer-events-none" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-extrabold tracking-wider bg-gradient-to-r from-slate-100 via-amber-200 to-orange-400 bg-clip-text text-transparent">
                  DOOR HANDLE DESIGN
                </span>
                <span className="hidden md:inline-block px-2 py-0.5 text-[10px] font-mono font-semibold bg-orange-500/20 text-orange-300 rounded border border-orange-500/30">
                  HEAT TREATMENT
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">
                MT2220 Ferrous Metals & Alloys • University of Moratuwa
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-orange-500/15 text-orange-400 border border-orange-500/40 shadow-sm shadow-orange-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-orange-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-1 px-1.5 py-0.2 rounded text-[9px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      ★
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Downloads & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/docs/Door_Handle_Design_and_Heat_Treatment_Report.pdf"
              download="Door_Handle_Design_and_Heat_Treatment_Report.pdf"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-orange-600 via-amber-600 to-cyan-600 hover:from-orange-500 hover:to-cyan-500 text-white shadow-lg shadow-orange-600/30 border border-orange-400/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download Report (PDF)</span>
              <span className="sm:hidden">PDF</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/60 border border-slate-700/60"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-medium text-left transition-all ${
                      isActive
                        ? 'bg-orange-500/20 text-orange-300 border border-orange-500/40'
                        : 'text-slate-300 hover:bg-slate-900/80 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-orange-400' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Floating Bottom Quick Dock for Desktop */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-1.5 px-3 py-2 bg-slate-900/85 backdrop-blur-xl border border-slate-700/60 rounded-full shadow-2xl shadow-black/80">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              title={item.label}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-orange-600 via-amber-600 to-cyan-600 text-white shadow-md shadow-orange-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};
