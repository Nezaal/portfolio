import React from 'react';
import { projectsData } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';

export default function WorkSection({ onSelectProject }) {
  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="mb-12">
        <span className="font-mono text-xs text-[#BEF202] uppercase tracking-widest">[ PORTFOLIO ]</span>
        <h2 className="text-4xl font-bold font-mono tracking-tight mt-2 text-white">Featured Engineering Work</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div 
            key={project.id}
            onClick={() => onSelectProject && onSelectProject(project)}
            className="group cursor-pointer rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-[#BEF202]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-[#BEF202] border border-[#BEF202]/30">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-[#BEF202] transition-colors">{project.title}</h3>
                <p className="text-xs text-[#BEF202]/80 font-mono mt-1">{project.tagline}</p>
                <p className="text-xs text-white/60 mt-3 line-clamp-2">{project.description}</p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/10">
              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 3).map((t, idx) => (
                  <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/70">
                    {t}
                  </span>
                ))}
              </div>
              <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[#BEF202] transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
