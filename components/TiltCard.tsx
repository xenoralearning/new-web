import React, { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  rotationIntensity?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = "", rotationIntensity = 5 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  const [glow, setGlow] = useState("0% 0%");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2);
    const y = (e.clientY - top - height / 2);
    
    // Rotate
    const rotX = (y / (height / 2)) * -rotationIntensity;
    const rotY = (x / (width / 2)) * rotationIntensity;

    setTransform(`perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`);
    
    // Calculate glow position
    const glowX = ((e.clientX - left) / width) * 100;
    const glowY = ((e.clientY - top) / height) * 100;
    setGlow(`${glowX}% ${glowY}%`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlow("50% 50%");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out will-change-transform relative group ${className}`}
      style={{ transform }}
    >
      {/* Dynamic Glow Overlay */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[inherit] z-10"
        style={{
            background: `radial-gradient(circle at ${glow}, rgba(59,130,246,0.15), transparent 60%)`
        }}
      />
      {children}
    </div>
  );
};

export default TiltCard;