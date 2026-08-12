import React from 'react';
import { processSteps } from '../data/portfolioData';

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="mb-12">
        <span className="font-mono text-xs text-[#BEF202] uppercase tracking-widest">[ WORKFLOW ]</span>
        <h2 className="text-4xl font-bold font-mono tracking-tight mt-2 text-white">Engineering Process</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {processSteps.map((step, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-between">
            <div>
              <span className="font-mono text-3xl font-black text-[#BEF202]">{step.step}</span>
              <h3 className="text-lg font-bold mt-2 text-white">{step.title}</h3>
              <p className="text-xs text-[#BEF202]/80 font-mono mt-1">{step.subtitle}</p>
              <p className="text-xs text-white/60 mt-4 leading-relaxed">{step.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-white/10">
              {step.tags.map((tag, tIdx) => (
                <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-white/70">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
