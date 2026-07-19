import React from 'react'
import { motion } from 'framer-motion'
import { Terminal, Database, Globe, Wrench } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Terminal,
      skills: [
        { name: 'Java', level: 'Advanced' },
        { name: 'C', level: 'Intermediate' },
        { name: 'C++', level: 'Intermediate' },
       // { name: 'Html', level: 'Intermediate'},
       // { name: 'JavaScript', level: 'Intermediate'}
       // { name: 'Python', level: 'Beginner' }
      ]
    },
    {
      title: 'Core Computer Science',
      icon: Database,
      skills: [
        { name: 'Data Structures', level: 'Advanced' },
        { name: 'Algorithms', level: 'Advanced' },
        { name: 'OOP Concepts', level: 'Advanced' },
        { name: 'DBMS / MySQL', level: 'Intermediate' },
        { name: 'Operating Systems', level: 'Intermediate' }
      ]
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      skills: [
        { name: 'HTML5', level: 'Advanced' },
        { name: 'CSS3', level: 'Intermediate' },
        { name: 'JavaScript', level: 'Intermediate' }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: [
        { name: 'Git', level: 'Advanced' },
        { name: 'GitHub', level: 'Advanced' },
        { name: 'VS Code', level: 'Advanced' },
       // { name: 'IntelliJ IDEA', level: 'Advanced' },
       // { name: 'Eclipse IDE', level: 'Intermediate' }
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-slate-100/50 dark:bg-slate-900/30 relative">
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
            My Skill Set
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-16 bg-blue-500 mx-auto mt-4 rounded-full"
          ></motion.div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass-panel p-6 rounded-3xl border shadow-sm flex flex-col h-full"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-cyan-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-slate-800 dark:text-white text-base font-display">
                    {category.title}
                  </h3>
                </div>

                {/* Skill List */}
                <div className="space-y-4 flex-grow">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-slate-700 dark:text-slate-350">{skill.name}</span>
                        <span className="text-blue-500 dark:text-cyan-400 font-medium">{skill.level}</span>
                      </div>
                      
                      {/* Simulated progress slider representation */}
                      <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-850 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ 
                            width: skill.level === 'Advanced' 
                              ? '85%' 
                              : skill.level === 'Intermediate' 
                              ? '65%' 
                              : '40%' 
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${
                            skill.level === 'Advanced'
                              ? 'from-blue-500 to-cyan-500'
                              : skill.level === 'Intermediate'
                              ? 'from-blue-500 to-blue-600'
                              : 'from-slate-400 to-slate-500'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  )
}

export default Skills
