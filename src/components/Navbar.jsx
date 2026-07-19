import React, { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

const Navbar = ({ theme, toggleTheme, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of sticky navbar
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <div className="glass-panel rounded-2xl px-6 py-4 flex items-center justify-between border shadow-sm">
          {/* Logo / Brand Name */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')}
            className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent font-display"
          >
            Anjali
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-500 dark:hover:text-cyan-400 ${
                    isActive 
                      ? 'text-blue-600 dark:text-cyan-400 font-semibold' 
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Theme switcher & Hamburger Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/60 dark:hover:bg-slate-900 dark:border dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Mobile Hamburger Menu Icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 md:hidden transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {isOpen && (
        <div className="px-4 pt-2 pb-4 md:hidden mt-2">
          <div className="glass-panel rounded-2xl px-4 py-3 space-y-2 shadow-lg border">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-cyan-400' 
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
