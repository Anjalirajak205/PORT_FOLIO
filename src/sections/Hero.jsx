import React from 'react'
import { motion } from 'framer-motion'
import { FileText, ArrowRight, Mail } from 'lucide-react'
import { Github, Linkedin } from '../components/SocialIcons'

const Hero = () => {
  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      const offset = 80; // height of sticky navbar
      const elementPosition = target.offsetTop;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // const handleDownloadResume = () => {
  //   // Simulated resume download alert with dynamic feeling
  //   alert("Downloading Anjali Rajak's Resume... (Simulated resume PDF file download initialized successfully!)");
  // };
  const handleDownloadResume = () => {
  const link = document.createElement("a");
  link.href = "/RESUME_01.pdf";
  link.download = "Anjali_Rajak_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden"
    >
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400 dark:bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Profile Details (Col 1-7) */}
        <div className="md:col-span-7 flex flex-col text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-cyan-400 border border-blue-100 dark:border-blue-900/50">
              Welcome to my portfolio
            </span> */}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display leading-[1.1]"
          >
            Hello, I'm <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Anjali Rajak
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200"
          >
             CSE Student
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-350 max-w-xl leading-relaxed"
          >
            I am a Computer Science Engineering student with strong skills in Java, C++, JavaScript, Data Structures & Algorithms. I enjoy building responsive web applications and continuously learning new technologies to solve real-world problems.
          </motion.p>

          {/* Social Icons links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center space-x-5"
          >
            <a 
              href="https://github.com/Anjalirajak205" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-cyan-400 hover:border-blue-300 dark:hover:border-slate-700 transition-colors duration-250"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/anjali-rajak-b4879530b/"
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-cyan-400 hover:border-blue-300 dark:hover:border-slate-700 transition-colors duration-250"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:anjalirajak205@gmail.com"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-cyan-400 hover:border-blue-300 dark:hover:border-slate-700 transition-colors duration-250"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4"
          >
            <button
              onClick={() => handleScrollTo('#projects')}
              className="px-6 py-3.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </button>
            
            <button
              onClick={handleDownloadResume}
              className="px-6 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 text-slate-700 dark:text-slate-350 font-medium hover:bg-slate-50 dark:hover:bg-slate-900 flex items-center justify-center gap-2 active:scale-[0.98] transition-all cursor-pointer"
            >
              Download Resume
              <FileText className="h-4 w-4" />
            </button>

            <button
              onClick={() => handleScrollTo('#contact')}
              className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/60 dark:hover:bg-slate-900 dark:text-slate-300 text-slate-700 font-medium flex items-center justify-center gap-2 active:scale-[0.98] transition-all cursor-pointer"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Profile Image (Col 8-12) */}
        <div className="md:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
          >
            {/* Background elements */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500 to-cyan-500 rotate-6 opacity-20 dark:opacity-30 blur-sm"></div>
            <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-blue-500/30 dark:border-cyan-400/30 -rotate-3 scale-[1.02]"></div>
            
            {/* The Image Container */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-xl">
              <img 
                src="/Anjali P.png" 
                alt="Anjali Rajak Portrait" 
                className="w-full h-full object-cover object-center scale-[1.02] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Hero
