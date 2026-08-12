import { useState } from 'react';
import NeonMesh from './components/ui/neon-mesh';
import HeroSection from './components/HeroSection';
import ProjectsHorizontalScroll from './components/ProjectsHorizontalScroll';
import ContactSection from './components/ContactSection';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-white font-sans antialiased overflow-x-hidden">
      {/* Full-page Neon Mesh background */}
      <NeonMesh
        title=""
        description=""
        className="!fixed inset-0 z-0 w-screen h-screen"
      />

      {/* Main Single-Page Layout */}
      <main className="relative z-10">
        {/* Hero — name/location/role over the full-page mesh */}
        <HeroSection />

        {/* Projects — GSAP horizontal scroll */}
        <ProjectsHorizontalScroll />

        {/* Contact — socials, email, resume */}
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-white/10 text-center text-xs font-mono text-white/30">
        <p>© 2026 Nezaal — Precision-Engineered Portfolio Experience.</p>
      </footer>

      {/* Resume Modal */}
      {resumeOpen && (
        <ResumeModal onClose={() => setResumeOpen(false)} />
      )}
    </div>
  );
}
