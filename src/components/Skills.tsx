import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaJava, FaJs, FaDatabase, FaReact, FaNodeJs,
  FaHtml5, FaCss3Alt, FaAws, FaDocker, FaGitAlt, FaSalesforce, FaLaptopCode
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiKubernetes, SiPandas,
  SiNumpy, SiScikitlearn, SiTableau
} from 'react-icons/si';
import { AiOutlineCode } from 'react-icons/ai';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'SQL', icon: <FaDatabase /> },
      { name: 'C', icon: <AiOutlineCode /> },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'HTML/CSS', icon: <FaHtml5 />, subIcon: <FaCss3Alt /> },
    ],
  },
  {
    title: 'Cloud & Tools',
    skills: [
      { name: 'AWS', icon: <FaAws /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Salesforce CRM', icon: <FaSalesforce /> },
    ],
  },
  {
    title: 'Data Science & ML',
    skills: [
      { name: 'Scikit-learn', icon: <SiScikitlearn /> },
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'NumPy', icon: <SiNumpy /> },
      { name: 'Matplotlib', icon: <SiTableau /> },
      { name: 'Machine Learning', icon: <FaLaptopCode /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen section-padding py-24 scroll-mt-20 bg-transparent"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-left md:pl-2"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-white/80 max-w-3xl">
            Tools, languages, and technologies I use to build and scale software solutions.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>

              <div className="flex flex-wrap justify-start gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      duration: 0.4,
                    }}
                    viewport={{ once: true }}
                    className="group relative flex items-center gap-2 bg-white/10 hover:bg-purple-600/40 hover:scale-105 text-white px-4 py-1 rounded-full text-sm transition duration-300 cursor-default min-w-[120px]"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    {skill.name}
                    {skill.subIcon && <span className="text-lg ml-1">{skill.subIcon}</span>}

                    {/* Tooltip on Hover */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 bg-white text-black text-xs px-2 py-1 rounded shadow-md transition-transform duration-300 z-10 whitespace-nowrap">
                      {skill.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

