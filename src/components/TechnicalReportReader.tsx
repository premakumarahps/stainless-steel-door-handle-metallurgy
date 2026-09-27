import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  BookOpen, 
  Search, 
  Info, 
  Layers, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { REPORT_CHAPTERS_DATA, ReportChapterData } from '../core/castingAndDesignData';
import { MathView } from './MathView';

export const TechnicalReportReader: React.FC = () => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>('ch5');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeChapter = REPORT_CHAPTERS_DATA.find(c => c.id === selectedChapterId) || REPORT_CHAPTERS_DATA[0];

  return (
    <div className="space-y-8">
      
      {/* Top Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-orange-950/40 via-slate-900 to-slate-950 border border-orange-500/40 shadow-2xl">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
            <BookOpen className="w-4 h-4 text-orange-500" />
            <span>Complete 46-Page Academic Thesis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            Technical Project Report Reader
          </h2>
          <p className="text-sm text-slate-300 mt-1 max-w-2xl">
            Department of Materials Science and Engineering, University of Moratuwa • MT2220 Ferrous Metals and Alloys (October 26, 2023).
          </p>
        </div>

        <a
          href="/docs/Door_Handle_Design_and_Heat_Treatment_Report.pdf"
          download="Door_Handle_Design_and_Heat_Treatment_Report.pdf"
          className="self-start md:self-center flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-cyan-600 hover:from-orange-500 hover:to-cyan-500 text-white shadow-lg shadow-orange-600/30 border border-orange-400/30 transition-all hover:scale-105"
        >
          <Download className="w-4 h-4" />
          <span>Download Original Report (PDF)</span>
        </a>
      </div>

      {/* Chapter Selection Pills */}
      <div className="flex flex-wrap gap-2 p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
        {REPORT_CHAPTERS_DATA.map((ch) => {
          const isSelected = ch.id === selectedChapterId;
          return (
            <button
              key={ch.id}
              onClick={() => setSelectedChapterId(ch.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                isSelected
                  ? 'bg-orange-500/20 text-orange-300 border-orange-500/50 shadow-md shadow-orange-500/10'
                  : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span className="font-mono opacity-80">{ch.chapterNumber}:</span> {ch.title.split(' ')[0]}
            </button>
          );
        })}
      </div>

      {/* Active Chapter Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Summary, Derivations & Takeaways (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-orange-400 uppercase">
                  {activeChapter.chapterNumber} • {activeChapter.pageRange}
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  {activeChapter.title}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-orange-500/10 text-orange-300 border border-orange-500/30">
                MT2220 Report
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {activeChapter.summary}
            </p>

            {/* Mathematical Derivations */}
            {activeChapter.equations.length > 0 && (
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  <span>Governing Formulations & Metallurgy</span>
                </h4>
                <div className="space-y-3">
                  {activeChapter.equations.map((eq, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                      <div className="text-xs font-bold text-orange-300">{eq.name}</div>
                      <div className="py-1">
                        <MathView latex={eq.latex} block={true} />
                      </div>
                      <p className="text-[11px] text-slate-400 italic">
                        {eq.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Takeaways */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Info className="w-4 h-4 text-cyan-400" />
                <span>Empirical Findings & Key Takeaways</span>
              </h4>
              <ul className="space-y-2">
                {activeChapter.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 flex-shrink-0" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Right Column: Embedded Real Thesis Figures (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md space-y-6">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-orange-400" />
              <span>Extracted Thesis Figures & Diagrams</span>
            </h4>

            {activeChapter.keyFigures.length > 0 ? (
              <div className="space-y-5">
                {activeChapter.keyFigures.map((fig, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-3 space-y-2">
                    <div className="h-48 w-full flex items-center justify-center overflow-hidden rounded-xl bg-black">
                      <img 
                        src={fig.image} 
                        alt={fig.title}
                        className="w-full h-full object-contain p-2 hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="text-xs font-bold text-white">{fig.title}</div>
                    <p className="text-[11px] text-slate-400">{fig.caption}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center text-xs text-slate-500">
                Refer to Chapter 6 bibliography and conclusion text.
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
