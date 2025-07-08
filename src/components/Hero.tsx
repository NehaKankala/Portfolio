import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const titles = ['Full Stack Developer', 'Cloud Enthusiast', 'AI/ML Explorer'];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-16 relative"
    >
      {/* Image with glow on hover */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6 group relative"
      >
        <img
          src="/neha.png"
          alt="Neha Kankala"
          className="w-40 sm:w-52 md:w-60 rounded-full border-4 border-purple-500 shadow-xl object-cover transition-transform duration-300 group-hover:scale-105 group-hover:shadow-purple-500/50"
        />
        <div className="absolute inset-0 rounded-full bg-purple-500 blur-xl opacity-0 group-hover:opacity-30 transition duration-300 z-[-1]" />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <h2 className="text-white text-sm sm:text-base tracking-wide uppercase mb-2">
          Welcome to my portfolio
        </h2>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white leading-tight">
          Hi, I'm <span className="gradient-text">Neha Kankala</span>
        </h1>

        <div className="text-lg sm:text-xl text-purple-300 h-[40px] font-semibold mb-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
            >
              {titles[index]}
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="text-white/80 mb-6 text-base sm:text-lg leading-relaxed px-2">
          I'm a final-year Computer Science student building beautiful full-stack applications and exploring AI & Cloud.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-5 mb-6">
          {[
            { icon: Github, href: 'https://github.com/NehaKankala', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/neha-kankala', label: 'LinkedIn' },
            { icon: Mail, href: '#contact', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white/10 backdrop-blur text-white hover:text-purple-300 transition duration-300 hover:shadow-lg hover:shadow-purple-400/40"
              aria-label={label}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </div>

        {/* Buttons with glow */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-md transition-all duration-300 hover:shadow-purple-500/50 hover:shadow-lg"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition duration-300 hover:shadow-lg hover:shadow-purple-400/30"
          >
            Get In Touch
          </motion.a>
        </div>
      </motion.div>

      {/* Scroll Arrow */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="text-white/60" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;

