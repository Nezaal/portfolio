import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="mb-12">
        <span className="font-mono text-xs text-[#BEF202] uppercase tracking-widest">[ SKILLS & ARCHITECTURE ]</span>
        <h2 className="text-4xl font-bold font-mono tracking-tight mt-2 text-white">Technical Arsenal</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsData.map((group, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h3 className="text-xl font-bold font-mono mb-2 text-[#BEF202]">{group.category}</h3>
            <p className="text-xs text-white/60 mb-6">{group.description}</p>
            
            <div className="space-y-4">
              {group.items.map((skill, sIdx) => (
                <div key={sIdx}>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-white/90">{skill.name}</span>
                    <span className="text-[#BEF202]">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div 
                      className="h-full bg-[#BEF202] rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
