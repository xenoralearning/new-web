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
    <footer className="relative bg-white dark:bg-black border-t border-slate-200 dark:border-white/10 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 px-4 sm:px-6 lg:px-12 z-10 w-full">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
        
        <div>
          <h2 className="text-xl sm:text-2xl font-brand font-semibold text-slate-900 dark:text-white mb-4 sm:mb-6">Xenora<span className="font-normal text-slate-500">Learning</span></h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 leading-relaxed">
            {t.description}
          </p>
          <div className="flex gap-3 sm:gap-4">
            {socialLinks.map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target={href.startsWith('http') ? "_blank" : undefined}
                  rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex-shrink-0"
                >
                    <Icon className="w-5 h-5" />
                </a>
            ))}
          </div>
        </div>

        <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">{t.getInTouch}</h3>
            <form className="space-y-3 sm:space-y-4" onSubmit={sendEmail}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <input 
                      type="text" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder={t.placeholders.name} 
                      className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg p-2.5 sm:p-3 text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                    />
                    <input 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder={t.placeholders.email} 
                      className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg p-2.5 sm:p-3 text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                    />
                </div>
                <input 
                  type="text" 
                  placeholder={t.placeholders.class} 
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg p-2.5 sm:p-3 text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                />
                <textarea 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  placeholder={t.placeholders.message} 
                  rows={3} 
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg p-2.5 sm:p-3 text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                />
                <button 
                  type="submit" 
                  className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 flex items-center justify-center gap-2 min-h-[44px]"
                >
                    <Mail className="w-4 h-4" /> {status === 'sending' ? 'Sending...' : t.button}
                </button>
                {responseMessage && (
                    <p className={`text-xs sm:text-sm ${status === 'sent' ? 'text-green-500' : 'text-red-500'}`}>
                        {responseMessage}
                    </p>
                )}
            </form>
        </div>
      </div>
      
      <div className="border-t border-slate-200 dark:border-white/10 mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-slate-500">
        &copy; {new Date().getFullYear()} XenoraLearning. {t.rights}
      </div>
    </footer>
  );
};

export default Footer;