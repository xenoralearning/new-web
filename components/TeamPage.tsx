import React from 'react';
import { Linkedin, Instagram, Sparkles, Facebook } from 'lucide-react';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import { useLanguage } from '../LanguageContext';

const TeamPage: React.FC = () => {
  const { content } = useLanguage();
  const t = content.teamPage;

  return (
    <div className="w-full">
      {/* Hero Section */}

      <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 flex items-center justify-center min-h-[40vh] sm:min-h-[50vh]">
        <div className="w-full text-center relative z-10">
            <Reveal>
                <div className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-6 sm:mb-8">
                  <Sparkles className="w-3 h-3 text-blue-400 mr-2" />
                  <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">{t.badge}</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-7xl font-display font-black text-slate-900 dark:text-white mb-4 sm:mb-8">
                  {t.titleStart} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400">{t.titleEnd}</span>
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl mx-auto px-2 sm:px-0">
                  {t.description}

                </p>
            </Reveal>
        </div>

        {/* Decorative background elements */}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      </section>

      {/* Team Grid Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 pb-20 sm:pb-24 lg:pb-32">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {t.members.map((member, index) => (
            <Reveal key={member.id} delay={index * 50}>
                <TiltCard 
                  className="group relative rounded-2xl sm:rounded-3xl bg-white dark:bg-xenora-800 border border-slate-200 dark:border-white/10 overflow-hidden hover:border-blue-500/50 shadow-xl transition-all duration-300"
                >
                  {/* Image Container - Golden Ratio approx aspect */}
                  <div className="relative aspect-square overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-xenora-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                      
                      {/* Overlay Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-blue-300 font-semibold tracking-wide text-xs sm:text-sm uppercase mb-3 sm:mb-4">
                          {member.role}
                        </p>
                      </div>
                  </div>

                  {/* Description Content */}
                  <div className="p-4 sm:p-6 lg:p-8 pt-2 sm:pt-4">
                      <p className="text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4 sm:mb-6 min-h-[60px] sm:min-h-[80px]">
                        {member.description}
                      </p>
                      
                      <div className="flex items-center gap-3 sm:gap-4 border-t border-slate-100 dark:border-white/10 pt-4 sm:pt-6">
                        {member.linkedin && (
                          <a 
                            href={member.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-slate-400 hover:text-blue-500 transition-all hover:scale-110 flex-shrink-0"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                        {member.instagram && (
                          <a 
                            href={member.instagram} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-slate-400 hover:text-pink-500 transition-all hover:scale-110 flex-shrink-0"
                            aria-label="Instagram"
                          >
                            <Instagram className="w-5 h-5" />
                          </a>
                        )}
                        {member.facebook && (
                          <a 
                            href={member.facebook} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-slate-400 hover:text-blue-600 transition-all hover:scale-110 flex-shrink-0"
                            aria-label="Facebook"
                          >
                            <Facebook className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamPage;