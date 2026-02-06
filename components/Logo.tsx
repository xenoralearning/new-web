import React from 'react';
import xenoraLearningLogo from '../images/xenoralearninglogo.png';

interface LogoProps {
  darkMode: boolean;
}

const Logo: React.FC<LogoProps> = ({ darkMode }) => {
  return (
    <div className="flex items-center gap-3">
      <img src={xenoraLearningLogo} alt="XenoraLearning Logo" className="h-12" />
      <div className="text-left">
        <h1 className="font-brand font-semibold text-2xl tracking-wide text-slate-800 dark:text-white transition-colors">
          Xenora<span className="font-normal text-slate-500 dark:text-cyan-400">Learning</span>
        </h1>
      </div>
    </div>
  );
};

export default Logo;