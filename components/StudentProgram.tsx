import React from 'react';
import { STUDENT_PHASES } from '../constants';
import * as LucideIcons from 'lucide-react';
import Reveal from './Reveal';
import TiltCard from './TiltCard';

const StudentProgram: React.FC = () => {
  return (
    <section id="students" className="relative py-24 px-6 lg:px-12 z-10">
      <Reveal>
        <div className="w-full mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-800 dark:text-white mb-6">
            8-Phase <span className="text-blue-500">Student Journey</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            From basic conversations to building future tech, our curriculum guides students through the complete landscape of Artificial Intelligence.
          </p>
        </div>
      </Reveal>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STUDENT_PHASES.map((phase, index) => {
          // Dynamic Icon Rendering
          const IconComponent = (LucideIcons as any)[phase.icon] || LucideIcons.Zap;

          return (
            <Reveal key={phase.id} delay={index * 50}>
              <TiltCard className="h-full rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-xl">
                <div className="p-8 h-full flex flex-col relative overflow-hidden group">
                  {/* Background Glow on Hover */}
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-slate-100 dark:bg-white/10 text-blue-600 dark:text-cyan-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <div className="mb-3 text-sm font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase">
                    Phase {phase.id.toString().padStart(2, '0')}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {phase.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                    {phase.description}
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default StudentProgram;