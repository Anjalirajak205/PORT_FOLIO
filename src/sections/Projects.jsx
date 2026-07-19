import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Github } from '../components/SocialIcons'

const Projects = () => {
  const projectsList = [
    {
      title: 'Google Chrome Extension',
      description: 'Developed a google Chrome Extension as an AI-powered Student Assistent that provides real-time academic support by summarizing content and answering user quries using LLM APIs. ',
      image: '/chrome.webp',
     // tags: ['Java', 'Object-Oriented Programming', 'File I/O'],
     tags: ['React.js', 'JavaScript', 'Chrome Extension', 'LLM API', 'AI Assistant'],
      github: 'https://github.com/Anjalirajak205/AI_ASSISTANT',
      demo: '#'
    },
    {
      title: 'Quote Generator',
      description: ' Developed a Quote Generator using React.js with responsive UI and dynamic quote generation features. ',
      image: '/quote.jpg',
      //tags: ['Java', 'JDBC', 'MySQL', 'Swing UI'],
      tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
      github: 'https://github.com/Anjalirajak205/PROJECTS/tree/main/Project3/QuoteGenerator',
      demo: '#'
    },
    // {
    //   title: 'Tic Tac Toe Game',
    //   description: 'An library book manager system supporting book issues, overdue records, member registers, and real-time inventory management synced with an integrated backend database.',
    //   image: '/library_management.png',
    //   tags: ['Java', 'SQL', 'Relational Databases', 'OOP Design'],
    //   github: 'https://github.com',
    //   demo: '#'
    // }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
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
            My Java Projects
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-16 bg-blue-500 mx-auto mt-4 rounded-full"
          ></motion.div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-panel rounded-3xl border overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden relative bg-slate-200 dark:bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-50/80 text-blue-600 dark:bg-blue-950/30 dark:text-cyan-400 border border-blue-100/50 dark:border-blue-900/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2 font-display">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-650 dark:text-slate-350 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Footer Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-slate-900">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-850 hover:bg-slate-50 dark:hover:bg-slate-900 text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Source
                  </a>
                  <a
                    href={project.demo}
                    onClick={(e) => {
                      if (project.demo === '#') {
                        e.preventDefault();
                        alert(`Launching live simulation for the ${project.title}!`);
                      }
                    }}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-750 text-white text-sm font-semibold shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 transition-all"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
