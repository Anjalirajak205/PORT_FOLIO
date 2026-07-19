import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Award, Code, Users } from 'lucide-react'

const Achievements = () => {
  const achievementsList = [
    {
      title: 'Smart India Hackathon Participant',
      description: 'Collaborated in a team of 6 to conceptualize and develop a digital solution addressing complex governmental problems, focusing heavily on Java backend APIs.',
      icon: Trophy,
      tag: 'Hackathon'
    },
    {
      title: 'NPTEL Java Programming Certification',
      description: 'Completed comprehensive Java certification validating deep understanding of core programming paradigms, garbage collection, thread execution, and collections frameworks.',
      icon: Award,
      tag: 'Certification'
    },
    {
      title: 'Google Android Developer Virtual Internship',
      description: 'Gained hands-on experience in Android app development, mobile UI design, and industry-standard development practices through practical projects and learning modules.',
      icon: Code,
      tag: 'Achievement'
    },
    {
      title: ' Worked at CNS Department under AAI at Jabalpur Airport ',
      description: 'Gained hands-on exposure to airport communication, navigation, and surveillance systems while learning aviation technology operations and maintenance practices.',
      icon: Users,
      tag: 'Internship'
    },
    {
      title: ' CISCO Certified ',
     // description: 'Gained hands-on exposure to airport communication, navigation, and surveillance systems while learning aviation technology operations and maintenance practices.',
      icon: Code,
      tag: 'Certification'
    },
    {
      title: 'ORACLE Java Certified ',
      //description: 'Gained hands-on exposure to airport communication, navigation, and surveillance systems while learning aviation technology operations and maintenance practices.',
      icon: Code,
      tag: 'Certification'
    },
    {
      title: 'Digital Application Fundamentals – FutureSkills Prime (FSP) ',
      description: 'Learned the fundamentals of digital technologies, software applications, and essential digital skills for modern workplaces.',
      icon: Users,
      tag: 'Certification'
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
    <section id="achievements" className="py-20 px-4 relative">
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
            Achievements & Certifications
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-16 bg-blue-500 mx-auto mt-4 rounded-full"
          ></motion.div>
        </div>

        {/* Achievements Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievementsList.map((ach) => {
            const Icon = ach.icon;
            return (
              <motion.div
                key={ach.title}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className="glass-panel p-6 sm:p-8 rounded-3xl border shadow-sm flex items-start gap-5 transition-shadow hover:shadow-md"
              >
                {/* Icon Container */}
                <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-500 dark:text-cyan-400 shrink-0">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/40">
                    {ach.tag}
                  </span>
                  
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white font-display leading-snug">
                    {ach.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  )
}

export default Achievements
