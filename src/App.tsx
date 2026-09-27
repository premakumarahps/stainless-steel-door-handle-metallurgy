import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OverviewSection } from './components/OverviewSection';
import { HeatTreatmentSimulator } from './components/HeatTreatmentSimulator';
import { InvestmentCastingPipeline } from './components/InvestmentCastingPipeline';
import { MaterialMatrix } from './components/MaterialMatrix';
import { CadAndErgonomics } from './components/CadAndErgonomics';
import { TechnicalReportReader } from './components/TechnicalReportReader';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Auto-Hiding Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Body */}
      <main className="flex-1 w-full">
        
        {/* Hero Section (On Overview tab) */}
        {activeTab === 'overview' && (
          <Hero setActiveTab={setActiveTab} />
        )}

        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${activeTab === 'overview' ? 'py-12' : 'pt-28 pb-16'}`}>
          
          {/* Overview Section */}
          {activeTab === 'overview' && (
            <OverviewSection setActiveTab={setActiveTab} />
          )}

          {/* Solution Heat Treatment Simulator (Designed by Sadun Premakumara) */}
          {activeTab === 'heat-treat-sim' && (
            <HeatTreatmentSimulator />
          )}

          {/* 9-Stage Investment Casting Pipeline */}
          {activeTab === 'investment-casting' && (
            <InvestmentCastingPipeline />
          )}

          {/* Material Matrix & 304 Metallurgy */}
          {activeTab === 'materials' && (
            <MaterialMatrix />
          )}

          {/* CAD Blueprints & Ergonomics */}
          {activeTab === 'cad-ergonomics' && (
            <CadAndErgonomics />
          )}

          {/* 46-Page Technical Report Reader */}
          {activeTab === 'report' && (
            <TechnicalReportReader />
          )}

          {/* Research Team Directory */}
          {activeTab === 'team' && (
            <TeamSection />
          )}

        </div>
      </main>

      {/* Global Footer */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  );
}

export default App;
