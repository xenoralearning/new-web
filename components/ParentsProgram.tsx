import React from 'react';
import { ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import { useLanguage } from '../LanguageContext';
import hmpt1 from '../images/hmpt1.png';
import hmpt2 from '../images/hmpt2.png';
import hmpt3 from '../images/hmpt3.png';

const ParentsProgram: React.FC = () => {
  const { content } = useLanguage();
  const t = content.homeSections.parents;

  return (
    <section id="parents" className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 z-10 bg-slate-100 dark:bg-xenora-800/50 w-full">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-24 items-center">
        
        {/* Content (~62%) */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
                {t.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-6 sm:mb-10 leading-relaxed">
                {t.description}
            </p>
          </Reveal>

          <div className="space-y-4 sm:space-y-6">
            {t.features.map((feature, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="flex items-start gap-3 sm:gap-4 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors duration-300 cursor-default">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 flex-shrink-0 shadow-sm mt-0.5">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                        <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">{feature.title}</h3>
                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-snug">{feature.description}</p>
                    </div>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal delay={400}>
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-xl hover:scale-[1.02] transition-transform duration-300">
                <h4 className="text-xs sm:text-sm text-yellow-600 dark:text-yellow-400 font-bold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse flex-shrink-0"></span>
                    {t.featuredTitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-snug">
                    {t.featuredDesc}
                </p>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="mt-6 sm:mt-10">
                <button 
                  onClick={() => window.open("https://wa.me/9746302648?text=I'm%20interested%20in%20joining%20the%20Digital%20Parenting%20with%20AI%20program%20by%20XenoraLearning", "_blank")}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all font-semibold uppercase tracking-wider text-xs sm:text-sm hover:shadow-lg hover:shadow-emerald-500/30 active:scale-95 min-h-[48px] flex items-center justify-center"
                >
                    Book digital parenting with ai
                </button>
            </div>
          </Reveal>
        </div>

        {/* Visuals (~38%) */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4 h-auto sm:h-[400px] lg:h-[500px] order-1 lg:order-2">
            {/* Main large image */}
            <div className="col-span-1 sm:row-span-2 relative h-[250px] sm:h-full">
                <Reveal className="w-full h-full">
                    <TiltCard className="w-full h-full rounded-2xl overflow-hidden group">
                        <img src={hmpt1} alt="Parent and child" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent"></div>
                    </TiltCard>
                </Reveal>
            </div>
            {/* Small image 1 */}
            <div className="relative h-[180px] sm:h-full">
                <Reveal delay={100} className="w-full h-full">
                    <div className="rounded-2xl overflow-hidden h-full relative group hover:shadow-lg transition-shadow">
                        <img src={hmpt2} alt="Safe tablet use" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                </Reveal>
            </div>
            {/* Small image 2 */}
            <div className="relative h-[180px] sm:h-full">
                <Reveal delay={200} className="w-full h-full">
                    <div className="rounded-2xl overflow-hidden h-full relative group hover:shadow-lg transition-shadow">
                        <img src={hmpt3} alt="Family learning together" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                </Reveal>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ParentsProgram;