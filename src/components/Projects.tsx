import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Doctor Appointment Booking System',
    description: 'MERN stack app for booking doctor appointments with role-based dashboards and real-time scheduling.',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/NehaKankala/DoctorAppointment',
    live: '#',
  },
  {
    title: 'Online Service Provider Website',
    description: 'Connects users with service professionals. Features login, email alerts, payments & map tracking.',
    image: '/osp.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'JSP', 'JDBC'],
    github: 'https://github.com/NehaKankala',
    live: 'https://onlineserviceproviderr.netlify.app/',
  },
  {
    title: 'Machine Learning Models',
    description: 'Projects on classification, regression, and clustering using real datasets and visualizations.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    github: 'https://github.com/NehaKankala',
    live: '#',
  },
  {
    title: 'Tic-Tac-Toe Game',
    description: 'Responsive game with Minimax AI, dark/light themes, win animations, and scoreboard.',
    image: '/tic.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/NehaKankala/TicTacToe-Game',
    live: 'https://tictactoe-gme.netlify.app/',
  },
  {
    title: 'Quiz Game App',
    description: 'Timed quiz with instant feedback, score summary, and player name input.',
    image: '/quiz.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/NehaKankala/Quiz-Game',
    live: 'https://onlinequiz-game.netlify.app/',
  },
  {
    title: 'Advanced Scientific Calculator',
    description: 'A full-featured calculator with history, keyboard support, and scientific operations.',
    image: '/calc.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/NehaKankala/Scientific-Calculator',
    live: 'https://adv-scientific-calculator.netlify.app/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Some of my recent work across full-stack development, machine learning, and interactive UI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/5 backdrop-blur-md overflow-hidden hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </motion.a>
                  {project.live !== '#' && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 text-white/80 hover:text-white transition"
                    >
                      <ExternalLink size={18} />
                      <span>Live</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

