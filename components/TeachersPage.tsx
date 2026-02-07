import React from 'react';
import { BookOpen, Presentation, BrainCircuit, BarChart3, GraduationCap, Users } from 'lucide-react';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import { useLanguage } from '../LanguageContext';

const TeachersPage: React.FC = () => {
  const { content } = useLanguage();
  const t = content.teachersPage;

  return (
    <div className="w-full">
      {/* Hero */}

      <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 flex items-center justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
            
            {/* Content (~62%) */}
            <div className="lg:col-span-7 order-2 lg:order-1">
                <Reveal>

                    <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500 font-bold text-xs uppercase tracking-widest mb-4 sm:mb-6">
                        {t.hero.badge}
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                        {t.hero.title}
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-10 leading-relaxed">
                        {t.hero.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <a 
                            href="https://wa.me/9746302648?text=I%20would%20like%20to%20join%20Teaching%20with%20AI%20Online%20Training"
                            target="_blank"
                            rel="noopener noreferrer"

                            className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-blue-600 text-white font-bold text-sm sm:text-base hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20 inline-block text-center min-h-[48px] flex items-center justify-center"
                        >
                            {t.hero.btnOnline}
                        </a>
                        <a 
                            href="https://wa.me/9746302648?text=I%20want%20to%20book%20an%20offline%20AI%20tools%20workshop%20for%20our%20school%20or%20college"
                            target="_blank"
                            rel="noopener noreferrer"

                            className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-slate-300 dark:border-white/20 text-slate-800 dark:text-white font-semibold text-sm sm:text-base hover:bg-white/5 transition-all hover:scale-105 active:scale-95 inline-block text-center min-h-[48px] flex items-center justify-center"
                        >
                            {t.hero.btnOffline}
                        </a>
                    </div>
                </Reveal>
            </div>

            {/* Visual (~38%) */}
            <div className="lg:col-span-5 order-1 lg:order-2">
                <Reveal delay={200} className="w-full h-full">

                    <TiltCard className="relative aspect-[1/1.2] rounded-2xl sm:rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl">
                        <img src="c:\Users\ASUS\xenoralearning\images\kdimg1.png" alt="Teacher using AI" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-xenora-900/90 via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8">
                            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-blue-500 flex items-center justify-center text-white animate-pulse-glow flex-shrink-0">
                                    <GraduationCap className="w-5 sm:w-6 h-5 sm:h-6" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-white font-bold text-sm sm:text-base">{t.hero.certTitle}</p>
                                    <p className="text-blue-200 text-xs sm:text-sm">{t.hero.certSubtitle}</p>
                                </div>
                            </div>
                        </div>
                    </TiltCard>
                </Reveal>
            </div>
        </div>
      </section>

      {/* Benefits Grid */}

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 bg-slate-50 dark:bg-white/5">
        <div className="w-full">
            <Reveal>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white mb-8 sm:mb-12 lg:mb-16 text-center">
                    {t.benefits.title}
                </h2>
            </Reveal>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {t.benefits.list.map((item, i) => {
                    // Map icons based on index or title if dynamic content didn't include icon names
                    const icons = [BookOpen, Presentation, Users, BrainCircuit, BarChart3, GraduationCap];
                    const Icon = icons[i % icons.length];
                    
                    return (
                    <Reveal key={i} delay={i * 50}>

                        <TiltCard className="p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-white dark:bg-xenora-800 border border-slate-200 dark:border-white/10 hover:border-blue-500/40 shadow-lg h-full">
                            <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-blue-50 dark:bg-white/5 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 sm:mb-6">
                                <Icon className="w-5 sm:w-6 h-5 sm:h-6" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">{item.title}</h3>
                            <p className="text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                        </TiltCard>
                    </Reveal>
                )})}
            </div>
        </div>
      </section>

      {/* Training Options */}
      <section className="py-24 px-6 lg:px-12">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Offline Card */}
            <Reveal>
                <TiltCard className="group relative rounded-3xl overflow-hidden h-[400px] border border-white/10 shadow-2xl">
                    <img src="c:\Users\ASUS\xenoralearning\images\kdoff.png" alt="Offline Training" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent p-10 flex flex-col justify-end">
                        <h3 className="text-3xl font-display font-bold text-white mb-2">{t.training.offlineTitle}</h3>
                        <p className="text-slate-300 mb-6">{t.training.offlineDesc}</p>
                        <span className="inline-flex items-center text-blue-400 font-bold uppercase tracking-wider text-sm group-hover:text-white transition-colors">
                            {t.training.offlineBtn}
                        </span>
                    </div>
                </TiltCard>
            </Reveal>

            {/* Online Card */}
            <Reveal delay={200}>
                <TiltCard className="group relative rounded-3xl overflow-hidden h-[400px] border border-white/10 shadow-2xl">
                    <img src="/images/kdon.png" alt="Online Training" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/50 to-transparent p-10 flex flex-col justify-end">
                        <h3 className="text-3xl font-display font-bold text-white mb-2">{t.training.onlineTitle}</h3>
                        <p className="text-blue-200 mb-6">{t.training.onlineDesc}</p>
                        <span className="inline-flex items-center text-white font-bold uppercase tracking-wider text-sm group-hover:text-cyan-300 transition-colors">
                            {t.training.onlineBtn}
                        </span>
                    </div>
                </TiltCard>
            </Reveal>

        </div>
      </section>

      {/* Image Gallery - Golden Ratio */}
      <section className="py-12 px-6 lg:px-12 pb-24">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 h-[400px]">
             <div className="md:col-span-1 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <Reveal className="w-full h-full">
                    <img src="/images/tcimg2.png" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Teacher gallery image 1" />
                </Reveal>
             </div>
             <div className="md:col-span-2 rounded-2xl overflow-hidden border border-white/10 shadow-lg relative">
                <Reveal delay={100} className="w-full h-full">
                    <img src="/images/tcimg3.png" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Teacher 2" />
                    <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors"></div>
                </Reveal>
             </div>
        </div>
      </section>
    </div>
  );
};

export default TeachersPage;