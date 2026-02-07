import React from 'react';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import { useLanguage } from '../LanguageContext';
import hmkids1 from '../images/hmkids1.png';
import hmkids2 from '../images/hmkids2.png';
import hmkids3 from '../images/hmkids3.png';

interface KidsProgramProps {
  onNavigate: (view: 'kids', section: 'phases') => void;
}

const KidsProgram: React.FC<KidsProgramProps> = ({ onNavigate }) => {
  const { content } = useLanguage();
  const t = content.homeSections.kids;

  return (
    <section id="kids" className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 z-20 bg-slate-50 dark:bg-black/20 w-full mb-16 sm:mb-20 lg:mb-24">
      {/* Subtle top accent line - premium visual anchor */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-24 items-center">
        
        {/* Content (~62%) */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <Reveal>
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-xenora-800 border border-purple-200 dark:border-purple-500/30 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
               
               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
                 {t.title}
               </h2>
               <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                 {t.description}
               </p>
               
               <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {t.list.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                          <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] flex-shrink-0"></div>
                          {item}
                      </li>
                  ))}
               </ul>

               <button 
                  onClick={() => onNavigate('kids', 'phases')}
                  className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-base sm:text-lg transition-all shadow-lg shadow-purple-500/20 hover:scale-105 active:scale-95 min-h-[48px]"
               >
                  {t.button}
               </button>
            </div>
          </Reveal>
        </div>

        {/* Image Grid (~38%) */}
        <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6 order-1 lg:order-2">
            <Reveal className="w-full">
                <TiltCard className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-square relative group w-full">
                    <img src={hmkids1} alt="Kids Learning AI" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end p-4 sm:p-6 opacity-80 group-hover:opacity-100 transition-opacity">
                        <span className="text-white font-bold text-base sm:text-lg">{t.img1}</span>
                    </div>
                </TiltCard>
            </Reveal>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <Reveal delay={100}>
                    <div className="rounded-2xl overflow-hidden h-24 sm:h-40 relative group hover:shadow-lg transition-shadow">
                        <img src={hmkids2} alt="Creative kids" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                </Reveal>
                <Reveal delay={200}>
                    <div className="rounded-2xl overflow-hidden h-24 sm:h-40 relative group hover:shadow-lg transition-shadow">
                        <img src={hmkids3} alt="Kids with robots" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                </Reveal>
            </div>
        </div>

      </div>
    </section>
  );
};

export default KidsProgram;