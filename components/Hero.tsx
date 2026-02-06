import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import video from '../images/xenoralearning opening video.mp4'
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { content } = useLanguage();

  const handleExploreClick = () => {
    const section = document.getElementById('kids');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-12 z-10 overflow-hidden w-full">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
        
        {/* Golden Ratio: Text Content (~38%) */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6 sm:space-y-8 order-2 lg:order-1">
          <Reveal>
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse mr-2"></span>
                <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">{content.hero.badge}</span>
              </div>
              
              {/* Responsive title with golden ratio scaling */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-black leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 dark:from-white dark:via-purple-200 dark:to-cyan-300 drop-shadow-lg break-words">
                {content.hero.titleStart} <br />
                <span className="text-xl sm:text-2xl lg:text-5xl font-light text-slate-600 dark:text-slate-300">{content.hero.titleEnd}</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {content.hero.description}
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button 
                onClick={handleExploreClick}
                className="group px-6 sm:px-8 py-4 sm:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base sm:text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px]"
              >
                {content.hero.explore} <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="https://wa.me/9746302648?text=I%20would%20like%20to%20join%20the%20Next%20Gen%20Saturday%20free%20AI%20workshop"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 sm:px-8 py-4 sm:py-4 rounded-xl border border-slate-300 dark:border-white/20 bg-white/50 dark:bg-white/5 backdrop-blur-md text-slate-800 dark:text-white font-semibold text-base sm:text-lg hover:bg-white/80 dark:hover:bg-white/10 hover:border-blue-500/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px]"
              >
                <Play className="w-4 sm:w-5 h-4 sm:h-5 fill-current" /> {content.hero.workshop}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Golden Ratio: Visual/Video (~62%) */}
        <div className="lg:col-span-7 h-[300px] sm:h-[450px] lg:h-[650px] w-full relative order-1 lg:order-2">
          <Reveal delay={300} className="w-full h-full">
             <TiltCard className="w-full h-full rounded-[2rem]">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-[2rem] transform rotate-1 opacity-20 blur-xl"></div>
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl bg-slate-900 group">
                  <video
                    src={video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Decorative UI Overlay - Responsive */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-4 sm:p-6 bg-black/40 backdrop-blur-lg rounded-xl border border-white/10 flex items-center gap-3 sm:gap-4 hover:bg-black/60 transition-colors duration-300">
                      <div className="h-10 sm:h-12 w-10 sm:w-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-white text-lg sm:text-xl shadow-lg flex-shrink-0">{content.hero.videoBadge}</div>
                      <div className="min-w-0">
                          <h3 className="text-white font-bold text-sm sm:text-base truncate">{content.hero.videoTitle}</h3>
                          <div className="h-1 w-20 sm:w-32 bg-white/20 rounded-full mt-2 overflow-hidden">
                              <div className="h-full w-2/3 bg-cyan-400 rounded-full animate-pulse"></div>
                          </div>
                      </div>
                  </div>
                </div>
             </TiltCard>
          </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Hero;