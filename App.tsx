import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Background from './components/Background';
import Logo from './components/Logo';
import Hero from './components/Hero';
import KidsProgram from './components/KidsProgram';
import TeachersProgram from './components/TeachersProgram';
import ParentsProgram from './components/ParentsProgram';
import Footer from './components/Footer';
import KidsPage from './components/KidsPage';
import TeachersPage from './components/TeachersPage';
import ParentsPage from './components/ParentsPage';
import TeamPage from './components/TeamPage';
import LanguageSwitcher from './components/LanguageSwitcher';
import TopRibbon from './components/TopRibbon';
import MovingRibbon from './components/MovingRibbon';
import BottomRibbon from './components/BottomRibbon';
import AIQuizPage from './components/AIQuizPage';
import { LanguageProvider, useLanguage } from './LanguageContext';

type ViewState = 'home' | 'kids' | 'teachers' | 'parents' | 'team' | 'aiquiz';

const MainApp: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [view, setView] = useState<ViewState>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { content } = useLanguage();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  useEffect(() => {
    // This effect now handles scrolling.
    // It's separate from navigation to keep concerns separate.
    // A more advanced solution might use a state for the scroll target.
  }, [view]);

  const handleNavigate = (targetView: ViewState, elementId?: string) => {
    if (view === targetView && elementId) {
      // If we are on the same page, just scroll
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // If changing views, set the new view
      setView(targetView);
      if (elementId) {
        // Schedule scroll to happen after the new view renders
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100); // A small delay is often needed for the DOM to update
      } else {
        // If no elementId, just scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false); // Close mobile menu on navigation
  };

  const toggleTheme = () => setDarkMode(!darkMode);

  const NavButton = ({ target, label }: { target: ViewState; label: string }) => (
    <button 
        onClick={() => handleNavigate(target)}
        className={`group relative py-3 text-base font-semibold tracking-wide transition-colors uppercase ${
            view === target 
            ? 'text-blue-500 dark:text-cyan-400' 
            : 'text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-cyan-400'
        }`}
    >
        {label}
        {/* Animated Underline */}
        <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform origin-left transition-transform duration-300 ${
            view === target ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}></span>
    </button>
  );

  const renderContent = () => {
    switch (view) {
      case 'kids': return <KidsPage />;
      case 'teachers': return <TeachersPage />;
      case 'parents': return <ParentsPage />;
      case 'team': return <TeamPage />;
      case 'aiquiz': return <AIQuizPage />;
      default:
        return (
          <>
            <Hero />
            <KidsProgram onNavigate={handleNavigate} />
            <TeachersProgram onNavigate={() => handleNavigate('teachers')} />
            <ParentsProgram />
          </>
        );
    }
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-cyan-500 selection:text-white`}>
      <Background />

      {/* Premium top ribbon anchor */}
      <TopRibbon />
      
      {/* Sticky Header - offset to accommodate top ribbon */}
      <header className="fixed top-[2.25rem] left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between bg-white/70 dark:bg-xenora-900/70 backdrop-blur-md border-b border-slate-200 dark:border-white/5 transition-all duration-300 hover:bg-white/90 dark:hover:bg-xenora-900/90 min-h-[60px] sm:min-h-[70px]">
        <div onClick={() => handleNavigate('home')} className="cursor-pointer flex-shrink-0">
           <Logo darkMode={darkMode} />
        </div>
        
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Desktop-only content */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <nav className="flex items-center gap-6 lg:gap-8">
              <NavButton target="home" label={content.nav.home} />
              <NavButton target="kids" label={content.nav.kids} />
              <NavButton target="teachers" label={content.nav.teachers} />
              <NavButton target="parents" label={content.nav.parents} />
              <NavButton target="aiquiz" label="Quiz" />
              <NavButton target="team" label={content.nav.team} />
            </nav>
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <a 
                href="https://wa.me/9746302648?text=I%20would%20like%20to%20join%20XenoraLearning's%20AI%20journey"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-xenora-900 font-bold text-base hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 whitespace-nowrap"
              >
                  {content.nav.join}
              </a>
            </div>
          </div>

          {/* Mobile-only hamburger button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-2 text-slate-800 dark:text-white hover:bg-white/30 dark:hover:bg-white/10 rounded-lg transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu - Improved */}
      {isMenuOpen && (
        <>
          {/* Backdrop overlay for clicking outside */}
          <div 
            className="md:hidden fixed inset-0 top-[calc(2.25rem+60px)] sm:top-[calc(2.25rem+70px)] z-40 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          {/* Mobile Menu - offset below top ribbon + header */}
          <nav className="md:hidden fixed top-[calc(2.25rem+60px)] sm:top-[calc(2.25rem+70px)] left-0 right-0 z-40 bg-white/95 dark:bg-xenora-900/95 backdrop-blur-md border-b border-slate-200 dark:border-white/5 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col items-stretch gap-0 py-3 px-4 sm:px-6">
              {/* Navigation Items - Touch friendly (48px min height) */}
              <button
                onClick={() => handleNavigate('home')}
                className={`py-4 px-4 text-center font-semibold uppercase text-base tracking-wide rounded-lg transition-all duration-200 ${
                  view === 'home'
                    ? 'bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/30'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-white/5'
                }`}
              >
                {content.nav.home}
              </button>
              <button
                onClick={() => handleNavigate('kids')}
                className={`py-4 px-4 text-center font-semibold uppercase text-base tracking-wide rounded-lg transition-all duration-200 ${
                  view === 'kids'
                    ? 'bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/30'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-white/5'
                }`}
              >
                {content.nav.kids}
              </button>
              <button
                onClick={() => handleNavigate('teachers')}
                className={`py-4 px-4 text-center font-semibold uppercase text-base tracking-wide rounded-lg transition-all duration-200 ${
                  view === 'teachers'
                    ? 'bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/30'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-white/5'
                }`}
              >
                {content.nav.teachers}
              </button>
              <button
                onClick={() => handleNavigate('parents')}
                className={`py-4 px-4 text-center font-semibold uppercase text-base tracking-wide rounded-lg transition-all duration-200 ${
                  view === 'parents'
                    ? 'bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/30'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-white/5'
                }`}
              >
                {content.nav.parents}
              </button>
              <button
                onClick={() => handleNavigate('team')}
                className={`py-4 px-4 text-center font-semibold uppercase text-base tracking-wide rounded-lg transition-all duration-200 ${
                  view === 'team'
                    ? 'bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/30'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-white/5'
                }`}
              >
                {content.nav.team}
              </button>
              <button
                onClick={() => handleNavigate('aiquiz')}
                className={`py-4 px-4 text-center font-semibold uppercase text-base tracking-wide rounded-lg transition-all duration-200 ${
                  view === 'aiquiz'
                    ? 'bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/30'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-white/5'
                }`}
              >
                Quiz
              </button>
              
              {/* Divider */}
              <div className="h-px bg-slate-200 dark:bg-white/10 my-3" />
              
              {/* Language Switcher */}
              <div className="py-3 px-2">
                <LanguageSwitcher />
              </div>
              
              {/* Join Now Button - CTA */}
              <a 
                href="https://wa.me/9746302648?text=I%20would%20like%20to%20join%20XenoraLearning's%20AI%20journey"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="py-4 px-4 mt-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base text-center hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 transition-all duration-300 shadow-md"
              >
                {content.nav.join}
              </a>
            </div>
          </nav>
        </>
      )}

      <MovingRibbon />

      {/* Main content with top + header spacing + bottom ribbon spacing */}
      <main className="relative min-h-screen pt-[calc(2.25rem+60px)] sm:pt-[calc(2.25rem+70px)] pb-[2.25rem]">
        {/* Page Transition Wrapper */}
        <div key={view} className="page-enter">
            {renderContent()}
        </div>
      </main>


      {/* Premium bottom ribbon anchor */}
      <BottomRibbon />
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
};

export default App;
