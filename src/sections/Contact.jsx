import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, Copy, Check } from 'lucide-react'
import { Github, Linkedin } from '../components/SocialIcons'

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill in all fields.");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
     // alert(`Thank you, ${formState.name}! Your message has been sent successfully. (Simulated submission successful)`);
     alert(`Thank you, ${formState.name}! I have received your message and will get back to you soon.`);
      setFormState({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("anjalirajak205@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
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
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-16 bg-blue-500 mx-auto mt-4 rounded-full"
          ></motion.div>
        </div>

        {/* Form and Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Connect Info & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border shadow-sm space-y-6 flex-grow">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white font-display">
                Let's discuss something great!
              </h3>
              <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-sm">
                I am currently looking for internship and junior software engineering roles. Whether you have a project idea, a question, or just want to connect, feel free to reach out. I will get back to you as soon as possible!
              </p>

              {/* Direct Details */}
              <div className="space-y-4 pt-4">
                {/* Email detail */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-500 dark:text-cyan-400 group-hover:scale-105 transition-transform">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <span className="text-slate-400 block text-xxs uppercase tracking-wider font-semibold">Email</span>
                    <a href="mailto:anjalirajak205@gmail.com" className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-500 dark:hover:text-cyan-400 break-words transition-colors">
                      anjalirajak205@gmail.com
                    </a>
                  </div>
                  <button 
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                    title="Copy Email to Clipboard"
                  >
                    {copiedEmail ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Social Channels grid */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800/60">
                <span className="text-slate-400 block text-xxs uppercase tracking-wider font-semibold mb-4">Find me on</span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://github.com/Anjalirajak205"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-650 dark:text-slate-300 text-sm font-semibold transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href="https:www.//linkedin.com/in/anjali-rajak-b4879530b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-650 dark:text-slate-300 text-sm font-semibold transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border shadow-sm">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-350 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 rounded-xl glass-input text-slate-800 dark:text-white text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-350 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email "
                    required
                    className="w-full px-4 py-3 rounded-xl glass-input text-slate-800 dark:text-white text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-350 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message here..."
                    rows="5"
                    required
                    className="w-full px-4 py-3 rounded-xl glass-input text-slate-800 dark:text-white text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-750 disabled:bg-blue-400 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-[0.99] transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default Contact
