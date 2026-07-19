
import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Award } from 'lucide-react'

const Education = () => {
  const timelineData = [
    {
      degree: 'Bachelor of Technology (CSE)',
      institution: 'Baderia Global Institute of Engineering and Management',
      period: '2023 - Present - (2027)',
      grade: 'CGPA: 7.8 / 10.0',
      description: 'Specializing in Computer Science & Engineering. Core coursework includes Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Database Management Systems, Operating Systems, and Software Engineering principles.'
    },
    {
      degree: 'Higher Secondary Education (Class XII)',
      institution: 'Central Board of Secondary Education (CBSE)',
      period: '2023',
      grade: 'Percentage: 63%',
      description: 'Focused on Science stream (Physics, Chemistry, Mathematics, and Computer Science).'
    },
    {
      degree: 'Secondary Education (Class X)',
      institution: 'Central Board of Secondary Education (CBSE)',
      period: '2021',
      grade: 'Percentage: 82%',
      //description: 'Completed general education curriculum with high marks in Mathematics and Science subjects.'
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-slate-100/50 dark:bg-slate-900/30 relative">
      <div className="mx-auto max-w-4xl relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display"
          >
            Education Timeline
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-16 bg-blue-500 mx-auto mt-4 rounded-full"
          ></motion.div>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Indicator Node */}
              <span className="absolute -left-[41px] md:-left-[49px] top-1.5 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-blue-500 text-white dark:bg-cyan-500 shadow-md transition-transform group-hover:scale-110">
                <GraduationCap className="h-3 w-3 md:h-4 md:w-4" />
              </span>

              {/* Timeline Card */}
              <div className="glass-panel p-6 rounded-3xl border shadow-sm space-y-3 transition-all duration-300 hover:shadow-md">
                
                {/* Year and Grade header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 px-2.5 py-1 rounded-lg">
                    <Calendar className="h-3.5 w-3.5 text-blue-500 dark:text-cyan-400" />
                    {item.period}
                  </span>
                  
                  <span className="flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-cyan-400 px-2.5 py-1 rounded-lg border border-blue-100/50 dark:border-blue-900/30">
                    <Award className="h-3.5 w-3.5" />
                    {item.grade}
                  </span>
                </div>

                {/* Degree / Certificate Title */}
                <h3 className="text-lg font-bold text-slate-800 dark:text-white font-display">
                  {item.degree}
                </h3>

                {/* Institution Name */}
                <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                  {item.institution}
                </h4>

                {/* Detailed Description */}
                <p className="text-slate-550 dark:text-slate-400 text-sm leading-relaxed pt-2">
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Education
