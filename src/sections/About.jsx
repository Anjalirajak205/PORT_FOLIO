import React from 'react'
import { motion } from 'framer-motion'
import { Code, GitBranch, Cpu, Database, Award } from 'lucide-react'

const About = () => {
  const interests = [
    { name: 'Java Development', icon: Code, desc: 'Building robust, scalable applications using core and advanced Java features.' },
    { name: 'Object-Oriented Programming', icon: Cpu, desc: 'Designing software using clean abstraction, encapsulation, inheritance, and polymorphism.' },
    { name: 'Data Structures & Algorithms', icon: GitBranch, desc: 'Analyzing complex problems and implementing high-efficiency code structures.' },
    { name: 'Software Development', icon: Database, desc: 'Familiar with software development lifecycles, database systems, and clean coding.' },
    { name: 'Problem Solving', icon: Award, desc: 'Solving logic challenges, participating in coding contests, and optimizing solutions.' }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-16 bg-blue-500 mx-auto mt-4 rounded-full"
          ></motion.div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Academics and Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border shadow-sm space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white font-display">
                My Story & Academic Background
              </h3>
              <p className="text-slate-600 dark:text-slate-350 leading-relaxed">
                Hello! I am Anjali Rajak, a Computer Science Engineering student currently pursuing my Bachelor of Technology degree at Baderia Global Institute of Engineering and Management. 
              </p>
              <p className="text-slate-600 dark:text-slate-350 leading-relaxed">
                My passion for programming started when I wrote my first line of Java. Since then, I have dedicated myself to mastering the language, diving deep into its object-oriented patterns, garbage collection internals, and standard library components. I thrive on translating logical flow charts into high-performance source code.
              </p>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 flex justify-between items-center text-sm font-medium">
                <div>
                  <span className="text-slate-400 block text-xs">COLLEGE</span>
                  <span className="text-slate-800 dark:text-slate-200">Baderia Global Institute (CSE)</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">EXPECTED GRADUATION</span>
                  <span className="text-slate-800 dark:text-slate-200">June 2025</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Career Objective & Interests */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Career Objective */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white font-display mb-4">
                Career Objective
              </h3>
              <p className="text-slate-600 dark:text-slate-350 leading-relaxed">
                To build a strong software engineering career by utilizing my knowledge in Java development, object-oriented concepts, and algorithmic thinking. I strive to learn continuous modern technologies and implement production-ready, testable software solutions in collaboration with industry professionals.
              </p>
            </div>

            {/* Areas of Interest */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-850 dark:text-slate-200 font-display">
                Key Areas of Interest
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interests.map((interest, idx) => {
                  const Icon = interest.icon;
                  return (
                    <motion.div
                      key={interest.name}
                      whileHover={{ y: -3 }}
                      className="glass-panel p-5 rounded-2xl border shadow-sm flex flex-col items-start gap-3 transition-shadow hover:shadow-md"
                    >
                      <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-500 dark:text-cyan-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-white text-sm">
                          {interest.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                          {interest.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default About
