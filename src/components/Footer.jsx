import React from 'react'
import { Mail, ArrowUp } from 'lucide-react'
import { Github, Linkedin } from './SocialIcons'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative border-t border-slate-200/60 dark:border-slate-900 bg-white dark:bg-slate-950 py-12 px-4 z-20">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Name / Signature */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <span className="text-lg font-bold text-slate-800 dark:text-white font-display">
            Anjali Rajak
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">
             Computer Science Student
          </span>
        </div>

        {/* Copyright */}
        <div className="text-sm text-slate-500 dark:text-slate-400 order-3 md:order-2">
          &copy; {currentYear} Anjali Rajak. All rights reserved.
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center space-x-6 order-2 md:order-3">
          {/* Social icons list */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-blue-500 dark:hover:text-cyan-400 transition-colors"
              aria-label="GitHub profile link"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-blue-500 dark:hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn profile link"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:anjali@example.com" 
              className="text-slate-400 hover:text-blue-500 dark:hover:text-cyan-400 transition-colors"
              aria-label="Send direct email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Scroll to Top Arrow */}
          <button
            onClick={handleScrollToTop}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/60 dark:hover:bg-slate-900 dark:border dark:border-slate-800/80 text-slate-655 dark:text-slate-450 hover:text-blue-500 dark:hover:text-cyan-400 transition-all cursor-pointer"
            aria-label="Scroll back to top of the page"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

      </div>
    </footer>
  )
}

export default Footer
