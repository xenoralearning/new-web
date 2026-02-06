import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import { useLanguage } from '../LanguageContext';
import hmt1 from '../images/hmt1.png';
import hmt2 from '../images/hmt2.png';
import hmt3 from '../images/hmt3.png';

interface TeachersProgramProps {
  onNavigate?: () => void;
}

const TeachersProgram: React.FC<TeachersProgramProps> = ({ onNavigate }) => {
  const { content } = useLanguage();
  const t = content.homeSections.teachers;

  return (
    <section id="teachers" className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 z-10 w-full">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-24 items-center">
        
        {/* Visuals (~45%) - Responsive to single column on mobile */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4 h-auto sm:h-[400px] lg:h-[500px]">
            {/* Main large image */}
            <div className="col-span-1 sm:col-span-1 sm:row-span-2 relative h-[250px] sm:h-full">
                <Reveal className="w-full h-full">
                    <TiltCard className="w-full h-full rounded-2xl overflow-hidden group">
                        <img src={hmt1} alt="Teacher using AI" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-black/60 backdrop-blur-md px-3 sm:px-4 py-2 rounded-lg text-white text-xs sm:text-sm font-semibold border border-white/10 group-hover:bg-blue-600/80 transition-colors">{t.imgLabel}</div>
                    </TiltCard>
                </Reveal>
            </div>
            {/* Small image 1 */}
            <div className="relative h-[180px] sm:h-full">
                <Reveal delay={100} className="w-full h-full">
                    <div className="rounded-2xl overflow-hidden h-full relative group hover:shadow-lg transition-shadow">
                        <img src={hmt2} alt="Classroom" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                </Reveal>
            </div>
            {/* Small image 2 */}
            <div className="relative h-[180px] sm:h-full">
                <Reveal delay={200} className="w-full h-full">
                    <div className="rounded-2xl overflow-hidden h-full relative group hover:shadow-lg transition-shadow">
                        <img src={hmt3} alt="Grading" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-black/60 backdrop-blur-md px-3 sm:px-4 py-2 rounded-lg text-white text-xs sm:text-sm font-semibold border border-white/10 group-hover:bg-blue-600/80 transition-colors">{t.imgLabel}</div>
                    </div>
                </Reveal>
            </div>
        </div>

        {/* Content (~55%) */}
        <div className="lg:col-span-7">
          <Reveal delay={300}>
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 font-semibold text-xs tracking-widest uppercase">
                {t.badge}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6 sm:mb-8">
                {t.title}
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {t.features.map((feature, idx) => (
              <Reveal key={idx} delay={300 + (idx * 50)}>
                  <div className="flex gap-3 sm:gap-4 p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-blue-500/30 hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                    <CheckCircle2 className="w-5 sm:w-6 h-5 sm:h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <h4 className="font-bold text-sm sm:text-base text-slate-800 dark:text-white mb-1">{feature.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-snug">{feature.description}</p>
                    </div>
                  </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={600}>
            <div className="mt-8 sm:mt-10">
                <button 
                  onClick={onNavigate}
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all font-semibold uppercase tracking-wider text-sm hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 min-h-[48px] w-full sm:w-auto"
                >
                    {t.button}
                </button>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};

export default TeachersProgram;