import React from 'react';
import { X, ExternalLink } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#0a0f05] border border-[#BEF202]/30 rounded-2xl p-6 text-white space-y-4 shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-[#BEF202] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="font-mono text-xs text-[#BEF202] uppercase tracking-widest">{project.category}</span>
        <h3 className="text-2xl font-bold font-mono">{project.title}</h3>
        <p className="text-xs text-white/80 leading-relaxed font-sans">{project.longDescription || project.description}</p>

        {project.stats && (
          <div className="grid grid-cols-3 gap-3 py-3 border-y border-white/10">
            {project.stats.map((s, idx) => (
              <div key={idx} className="text-center font-mono">
                <div className="text-lg font-bold text-[#BEF202]">{s.value}</div>
                <div className="text-[10px] text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-end gap-3 pt-2">
          <button 
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white/10 text-xs font-mono hover:bg-white/20 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
