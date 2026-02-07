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

    <section id="parents" className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 2xl:py-48 px-4 sm:px-6 lg:px-12 xl:px-16 z-10 bg-slate-100 dark:bg-xenora-800/50 w-full">
      {/* Subtle top accent line - premium visual anchor */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
      
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 xl:gap-24 items-center">
        
        {/* Content (~62%) - Enhanced desktop */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 lg:mb-8 xl:mb-10">
                {t.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-10 lg:mb-12 xl:mb-16 leading-relaxed">

                {t.description}
            </p>
          </Reveal>


          <div className="space-y-4 sm:space-y-6 lg:space-y-7 xl:space-y-8">
            {t.features.map((feature, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="flex items-start gap-3 sm:gap-4 lg:gap-5 xl:gap-6 p-4 lg:p-6 xl:p-8 rounded-xl lg:rounded-2xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors duration-300 cursor-default">
                    <div className="w-10 lg:w-12 xl:w-14 h-10 lg:h-12 xl:h-14 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 flex-shrink-0 shadow-sm mt-0.5">
                      <ShieldCheck className="w-5 lg:w-6 xl:w-7 h-5 lg:h-6 xl:h-7" />
                    </div>
                    <div className="min-w-0">
                        <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-slate-800 dark:text-white">{feature.title}</h3>
                        <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600 dark:text-slate-400 leading-snug">{feature.description}</p>

                    </div>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal delay={400}>

            <div className="mt-8 lg:mt-10 xl:mt-12 p-4 lg:p-6 xl:p-8 bg-yellow-500/10 border border-yellow-500/20 rounded-xl lg:rounded-2xl hover:scale-[1.02] transition-transform duration-300">
                <h4 className="text-xs sm:text-sm lg:text-base xl:text-lg text-yellow-600 dark:text-yellow-400 font-bold mb-2 lg:mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-yellow-500 animate-pulse flex-shrink-0"></span>
                    {t.featuredTitle}
                </h4>
                <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-slate-700 dark:text-slate-300 leading-snug">

                    {t.featuredDesc}
                </p>
            </div>
          </Reveal>

          <Reveal delay={500}>

            <div className="mt-8 lg:mt-10 xl:mt-12">
                <button 
                  onClick={() => window.open("https://wa.me/9746302648?text=I'm%20interested%20in%20joining%20the%20Digital%20Parenting%20with%20AI%20program%20by%20XenoraLearning", "_blank")}
                  className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 lg:py-5 xl:py-6 rounded-lg lg:rounded-xl border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all font-semibold uppercase tracking-wider text-xs sm:text-sm lg:text-base xl:text-lg hover:shadow-lg hover:shadow-emerald-500/30 active:scale-95 min-h-[48px] lg:min-h-[56px] xl:min-h-[64px] flex items-center justify-center"

                >
                    Book digital parenting with ai
                </button>
            </div>
          </Reveal>
        </div>


        {/* Visuals (~38%) - Enhanced desktop spacing */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4 lg:gap-5 xl:gap-6 h-auto sm:h-[400px] lg:h-[500px] xl:h-[600px] order-1 lg:order-2">
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