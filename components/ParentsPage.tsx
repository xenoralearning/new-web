import React from 'react';
import { ShieldCheck, RefreshCw, Book, Home } from 'lucide-react';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import { useLanguage } from '../LanguageContext';
import ptimg1Image from '../images/ptimg1.png';
import hmpt2Image from '../images/hmpt2.png';
import hmpt3Image from '../images/hmpt3.png';

const ParentsPage: React.FC = () => {
  const { content } = useLanguage();
  const t = content.parentsPage;

  return (
    <div className="w-full">
      {/* Hero */}

      <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 min-h-[40vh] sm:min-h-[50vh] flex items-center bg-slate-50 dark:bg-black/20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
             <div className="lg:col-span-6 space-y-4 sm:space-y-6">
                 <Reveal>
                    <h1 className="text-3xl sm:text-4xl lg:text-7xl font-display font-bold text-slate-900 dark:text-white">
                        {t.hero.titleStart} <br/><span className="text-emerald-500">{t.hero.titleEnd}</span>
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mt-4 sm:mt-6">

                        {t.hero.description}
                    </p>
                    <button 
                        onClick={() => window.open("https://wa.me/9746302648?text=I'm%20interested%20in%20joining%20the%20Digital%20Parenting%20with%20AI%20program%20by%20XenoraLearning", "_blank")}

                        className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-emerald-600 text-white font-bold text-sm sm:text-base hover:bg-emerald-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-600/20 min-h-[48px] inline-flex items-center justify-center">

                        {t.hero.button}
                    </button>
                 </Reveal>
             </div>
             <div className="lg:col-span-6">
                 <Reveal delay={200} className="w-full h-full">

                    <TiltCard className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden border border-emerald-500/30 shadow-2xl">

                        <img src={ptimg1Image} alt="Parent and Child" className="w-full h-full object-cover opacity-90" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/60 to-transparent"></div>
                    </TiltCard>
                 </Reveal>
             </div>
        </div>
      </section>

      {/* The YouTube Reset */}

      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
                {/* Text (~62%) */}
                <div className="lg:col-span-7">
                    <Reveal>
                        <div className="flex items-center gap-3 mb-4 sm:mb-6">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                                <RefreshCw className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">{t.reset.title}</h2>
                        </div>
                        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 leading-relaxed">
                            {t.reset.description}
                        </p>
                    </Reveal>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <Reveal delay={100}>
                            <TiltCard className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-emerald-500/30">
                                <h4 className="font-bold text-sm sm:text-base text-slate-800 dark:text-white mb-2">{t.reset.card1Title}</h4>
                                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-snug">{t.reset.card1Desc}</p>
                            </TiltCard>
                        </Reveal>
                        <Reveal delay={200}>
                            <TiltCard className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-emerald-500/30">
                                <h4 className="font-bold text-sm sm:text-base text-slate-800 dark:text-white mb-2">{t.reset.card2Title}</h4>
                                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-snug">{t.reset.card2Desc}</p>

                            </TiltCard>
                        </Reveal>
                    </div>
                </div>
                
                {/* Visual (~38%) */}
                <div className="lg:col-span-5">
                    <Reveal delay={300} className="w-full h-full">

                        <TiltCard className="h-full min-h-[250px] sm:min-h-[300px] rounded-2xl sm:rounded-3xl bg-slate-900 border border-white/10 p-6 sm:p-8 flex flex-col justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-0"></div>
                            <div className="relative z-10 text-center">
                                <div className="text-4xl sm:text-6xl font-black text-emerald-500 mb-2 group-hover:scale-110 transition-transform">{t.reset.visualStats}</div>
                                <p className="text-white font-medium text-sm sm:text-base">{t.reset.visualLabel}</p>

                            </div>
                        </TiltCard>
                    </Reveal>
                </div>
            </div>
        </div>
      </section>

      {/* AI Tools Categories */}

      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-slate-50 dark:bg-xenora-800/30">
        <div className="w-full text-center mb-10 sm:mb-16">
            <Reveal>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white">{t.tools.titleStart} <span className="text-emerald-500">{t.tools.titleEnd}</span></h2>

                <p className="text-slate-600 dark:text-slate-400 mt-4">{t.tools.description}</p>
            </Reveal>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.tools.list.map((item, i) => {
                const icons = [Book, Home, ShieldCheck, RefreshCw];
                const Icon = icons[i % icons.length];
                return (
                <Reveal key={i} delay={i * 50}>
                    <TiltCard className="p-6 rounded-2xl bg-white dark:bg-xenora-800 border border-slate-200 dark:border-white/5 hover:border-emerald-500/50 h-full">
                        <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-white/5 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
                            <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                    </TiltCard>
                </Reveal>
            )})}
        </div>
      </section>

      {/* Golden Ratio Image Grid */}
      <section className="py-12 px-6 lg:px-12 pb-24">
         <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 h-[400px]">
            <div className="md:col-span-8 rounded-2xl overflow-hidden border border-white/10 shadow-lg relative group">
                <Reveal className="w-full h-full">
                    <img src={hmpt2Image} alt="Family learning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg text-white font-bold group-hover:bg-emerald-600/80 transition-colors">{t.imgLabel}</div>
                </Reveal>
            </div>
            <div className="md:col-span-4 rounded-2xl overflow-hidden border border-white/10 shadow-lg group">
                <Reveal delay={100} className="w-full h-full">
                    <img src={hmpt3Image} alt="Safe Tablet" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </Reveal>
            </div>
         </div>
      </section>

    </div>
  );
};

export default ParentsPage;