import { X, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#0a0f05] border border-[#BEF202]/30 rounded-2xl p-6 text-white space-y-4 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-[#BEF202] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="font-mono text-xs text-[#BEF202] uppercase tracking-widest">[ RESUME ]</span>
        <h3 className="text-xl font-bold font-mono">{personalInfo.name} — Resume</h3>

        <iframe
          src="/nezaal_resume.pdf"
          title="Resume preview"
          className="w-full h-[70vh] rounded-xl bg-white/5 border border-white/10"
        />

        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white/10 text-xs font-mono hover:bg-white/20 transition-colors cursor-pointer"
          >
            Close
          </button>
          <a
            href="/nezaal_resume.pdf"
            download="Nezaal_Ahmad_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#BEF202] text-black text-xs font-mono font-bold hover:bg-[#a8d602] transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
}
