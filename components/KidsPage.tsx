import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Shield, MonitorPlay, Users, Sparkles } from 'lucide-react';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import { useLanguage } from '../LanguageContext';

import phase1Image from '../images/phase1.png';
import phase2Image from '../images/phase2.png';
import phase3Image from '../images/phase3.png';
import phase4Image from '../images/phase4.png';
import phase5Image from '../images/phase5.png';
import phase6Image from '../images/phase6.png';
import phase7Image from '../images/phase7.png';
import phase8Image from '../images/phase8.png';
import kidsimg1Image from '../images/kidsimg1.png';

const phaseImages = [phase1Image, phase2Image, phase3Image, phase4Image, phase5Image, phase6Image, phase7Image, phase8Image];

const KidsPage: React.FC = () => {
  const { content } = useLanguage();
  const t = content.kidsPage;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 z-10 flex items-center justify-center min-h-[50vh]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
             <Reveal>
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse mr-2"></span>
                  <span className="text-xs font-semibold tracking-wider text-purple-400 uppercase">{t.hero.badge}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-black leading-tight text-slate-900 dark:text-white mt-4">
                  {t.hero.titleStart} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">{t.hero.titleEnd}</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
                  {t.hero.description}
                </p>
             </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={200} className="w-full h-full">
                <TiltCard className="relative rounded-[2.5rem] overflow-hidden border border-purple-500/30 shadow-2xl min-h-[250px] sm:min-h-[350px]">
                    <img src={kidsimg1Image} alt="Kids Learning" className="w-full h-full object-cover opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/60 to-transparent"></div>
                </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Training Modes Section */}
      <section className="py-16 sm:py-20 lg:py-20 px-4 sm:px-6 lg:px-12 bg-white/50 dark:bg-white/5 backdrop-blur-sm">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
            
            {/* Online Mode */}
            <Reveal>
                <TiltCard className="relative p-6 sm:p-8 rounded-3xl bg-white dark:bg-xenora-800 border border-slate-200 dark:border-white/10 overflow-hidden group hover:border-blue-500/50">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors"></div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                            <MonitorPlay className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">{t.online.title}</h3>
                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            {t.online.description}
                        </p>
                        <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                            {t.online.list.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></div> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all shadow-lg min-h-[48px] flex items-center justify-center">{t.online.button}</button>
                    </div>
                </TiltCard>
            </Reveal>

            {/* Offline Mode Info */}
            <Reveal delay={200}>
                <TiltCard className="relative p-6 sm:p-8 rounded-3xl bg-white dark:bg-xenora-800 border border-slate-200 dark:border-white/10 overflow-hidden group hover:border-purple-500/50">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors"></div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">{t.offline.title}</h3>
                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            {t.offline.description}
                        </p>
                        <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                            {t.offline.list.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0"></div> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 hover:scale-105 active:scale-95 transition-all shadow-lg min-h-[48px] flex items-center justify-center">{t.offline.button}</button>
                    </div>
                </TiltCard>
            </Reveal>
        </div>
      </section>

      {/* Offline Workshop: 8-Phase Curriculum */}
      <section id="phases" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 relative">
         <div className="w-full">
            <Reveal>
                <div className="mb-10 sm:mb-16 text-center">
                    <span className="text-purple-500 font-bold tracking-widest uppercase text-xs sm:text-sm">{t.phases.badge}</span>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white">
                        {t.phases.title}
                    </h2>
                    <p className="mt-4 sm:mt-6 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto px-2">
                        {t.phases.description}
                    </p>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {t.phases.list.map((phase, index) => {
                    const IconComponent = (LucideIcons as any)[phase.icon] || LucideIcons.Zap;
                    return (
                        <Reveal key={phase.id} delay={index * 50}>
                            <TiltCard className="rounded-2xl bg-white dark:bg-xenora-800/50 border border-slate-200 dark:border-white/5 hover:border-purple-500/50 hover:bg-white dark:hover:bg-xenora-800 h-full overflow-hidden flex flex-col group">
                                {/* Image Placeholder - Golden Ratio aspect / Full Width */}
                                <div className="w-full aspect-square relative bg-slate-100 dark:bg-white/5 border-b border-white/5 overflow-hidden">
                                    <img src={phaseImages[index]} alt={`Phase ${phase.id}`} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    {/* Tech Glow Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 dark:to-black/20"></div>
                                </div>

                                <div className="p-4 sm:p-6 flex flex-col flex-1">
                                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                                        <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-white/10 flex items-center justify-center text-purple-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-bold text-slate-400 dark:text-slate-600 tracking-wider">PHASE {phase.id}</span>
                                    </div>
                                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-500 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">{phase.title}</h4>
                                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">{phase.description}</p>
                                </div>
                            </TiltCard>
                        </Reveal>
                    );
                })}
            </div>
         </div>
      </section>

      {/* Safe Usage & Image Grid */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-slate-50 dark:bg-black/20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            
            {/* Text (~38%) */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
                <Reveal>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white">
                        {t.safety.title}
                    </h2>
                    <div className="space-y-4 sm:space-y-6 mt-6">
                        <div className="flex gap-3 sm:gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                                <Shield className="w-5 h-5" />
                            </div>
                            <div className="min-w-0">
                                <h4 className="font-bold text-sm sm:text-base text-slate-800 dark:text-white">{t.safety.safetyTitle}</h4>
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-snug">{t.safety.safetyDesc}</p>
                            </div>
                        </div>
                        <div className="flex gap-3 sm:gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 flex-shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <div className="min-w-0">
                                <h4 className="font-bold text-sm sm:text-base text-slate-800 dark:text-white">{t.safety.creativeTitle}</h4>
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-snug">{t.safety.creativeDesc}</p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Images (~62%) */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
               
              </div>

        </div>
      </section>

    </div>
  );
};

export default KidsPage;