import React, { useState } from 'react';
import { Youtube, Linkedin, Instagram, Mail } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { content } = useLanguage();
  const t = content.footer;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setResponseMessage('');

    try {
        const response = await fetch('http://localhost:3001/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            setStatus('sent');
            setResponseMessage('Message sent successfully!');
            setName('');
            setEmail('');
            setMessage('');
        } else {
            setStatus('error');
            setResponseMessage('Failed to send message. Please try again later.');
        }
    } catch (error) {
        setStatus('error');
        setResponseMessage('An error occurred. Please try again later.');
    }
  };

  const socialLinks = [
    { Icon: Youtube, href: "https://www.youtube.com/@xenoralearning" },
    { Icon: Linkedin, href: "#" },
    { Icon: Instagram, href: "#" }
  ];

  return (

    <footer className="relative bg-white dark:bg-black border-t border-slate-200 dark:border-white/10 pt-12 sm:pt-16 lg:pt-20 xl:pt-28 pb-8 sm:pb-10 lg:pb-12 xl:pb-16 px-4 sm:px-6 lg:px-12 xl:px-16 z-10 w-full">
      {/* Subtle top accent line - premium visual anchor */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-24">
        
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-brand font-semibold text-slate-900 dark:text-white mb-4 sm:mb-6 lg:mb-8">Xenora<span className="font-normal text-slate-500">Learning</span></h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 lg:mb-10 xl:mb-12 leading-relaxed">
            {t.description}
          </p>
          <div className="flex gap-3 sm:gap-4 lg:gap-5">

            {socialLinks.map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target={href.startsWith('http') ? "_blank" : undefined}
                  rel={href.startsWith('http') ? "noopener noreferrer" : undefined}

                  className="w-10 lg:w-12 xl:w-14 h-10 lg:h-12 xl:h-14 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex-shrink-0"
                >
                    <Icon className="w-5 lg:w-6 xl:w-7 h-5 lg:h-6 xl:h-7" />

                </a>
            ))}
          </div>
        </div>

        <div>

            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 lg:mb-8">{t.getInTouch}</h3>
            <form className="space-y-3 sm:space-y-4 lg:space-y-5 xl:space-y-6" onSubmit={sendEmail}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 xl:gap-6">
                    <input 
                      type="text" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder={t.placeholders.name} 
                      className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg lg:rounded-xl p-2.5 sm:p-3 lg:p-4 xl:p-5 text-sm sm:text-base lg:text-lg xl:text-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                    />
                    <input 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder={t.placeholders.email} 
                      className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg lg:rounded-xl p-2.5 sm:p-3 lg:p-4 xl:p-5 text-sm sm:text-base lg:text-lg xl:text-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                    />
                </div>
                <input 
                  type="text" 
                  placeholder={t.placeholders.class} 
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg lg:rounded-xl p-2.5 sm:p-3 lg:p-4 xl:p-5 text-sm sm:text-base lg:text-lg xl:text-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                />
                <textarea 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  placeholder={t.placeholders.message} 
                  rows={3} 
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg lg:rounded-xl p-2.5 sm:p-3 lg:p-4 xl:p-5 text-sm sm:text-base lg:text-lg xl:text-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                />
                <button 
                  type="submit" 
                  className="w-full sm:w-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-3 lg:py-4 xl:py-5 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base lg:text-lg xl:text-xl rounded-lg lg:rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 flex items-center justify-center gap-2 min-h-[44px] lg:min-h-[52px] xl:min-h-[60px]"
                >
                    <Mail className="w-4 lg:w-5 xl:w-6 h-4 lg:h-5 xl:h-6" /> {status === 'sending' ? 'Sending...' : t.button}
                </button>
                {responseMessage && (
                    <p className={`text-xs sm:text-sm lg:text-base xl:text-lg ${status === 'sent' ? 'text-green-500' : 'text-red-500'}`}>

                        {responseMessage}
                    </p>
                )}
            </form>
        </div>
      </div>
      

      <div className="border-t border-slate-200 dark:border-white/10 mt-8 sm:mt-12 lg:mt-16 xl:mt-20 pt-6 sm:pt-8 lg:pt-10 xl:pt-12 text-center text-xs sm:text-sm lg:text-base xl:text-lg text-slate-500">

        &copy; {new Date().getFullYear()} XenoraLearning. {t.rights}
      </div>
    </footer>
  );
};

export default Footer;