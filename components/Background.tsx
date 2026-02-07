import React, { useEffect, useState } from 'react';

const Background: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position from -1 to 1
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 dark:to-xenora-900/50"></div>
      
      {/* Floating Blobs with Parallax */}
      <div 
        className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` }}
      ></div>
      
      <div 
        className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000 transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` }}
      ></div>
      
      <div 
        className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000 transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x * -10}px, ${mousePos.y * 30}px)` }}
      ></div>
      
      {/* Interactive Particles Layer */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse transition-transform duration-500" style={{ transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)` }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-700 transition-transform duration-500" style={{ transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)` }}></div>
        <div className="absolute top-1/2 right-10 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-300 transition-transform duration-500" style={{ transform: `translate(${mousePos.x * 50}px, ${mousePos.y * -20}px)` }}></div>
      </div>

      {/* Circuit Pattern Overlay (SVG) */}
      <svg className="absolute w-full h-full opacity-[0.03] dark:opacity-[0.05]" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10 10 L90 10 M10 10 L10 90 M90 10 L90 90 M10 90 L90 90" stroke="currentColor" fill="none" strokeWidth="0.5"/>
            <circle cx="10" cy="10" r="2" fill="currentColor" />
            <circle cx="90" cy="90" r="2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
};

export default Background;