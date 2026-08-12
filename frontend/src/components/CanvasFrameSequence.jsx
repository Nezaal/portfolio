import React from 'react';

export default function CanvasFrameSequence() {
  // Pure background canvas placeholder, hardware accelerated overlay
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(190,242,2,0.05),transparent_70%)]" />
  );
}
