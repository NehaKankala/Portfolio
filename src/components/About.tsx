import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Brain, Layers } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Proficient in full-stack development using MERN stack with a focus on building scalable and responsive web applications.',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Hands-on experience in building ML models using Scikit-learn, Pandas, and real-world datasets.',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Practical knowledge of AWS, Docker, Kubernetes, and infrastructure automation for modern deployment pipelines.',
    },
    {
      icon: Layers,
      title: 'Salesforce',
      description: 'Explored Trailhead modules to gain hands-on experience with CRM workflows, automation tools, and cloud-based customer solutions.',
    },
  ];

  return (
    <section id="about" className="py-20 section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Final-year Computer Science student with hands-on experience in Machine Learning, 
            Full-Stack Web Development (MERN), and Cloud Technologies. Enthusiastic about 
            building scalable software and AI solutions.
          </p>
          <p className="text-lg text-white/70 mt-6">
            Want to collaborate? <a href="#contact" className="underline text-blue-400">Let’s connect!</a>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Currently pursuing B.Tech in Computer Science Engineering at Rajiv Gandhi University 
                of Knowledge and Technologies with a GPA of 8.73. My academic journey has been 
                complemented by practical internships at AWS and Cyberaegis, where I gained 
                hands-on experience in cloud technologies and machine learning.
              </p>
              <p className="text-white/80 leading-relaxed mb-6">
                I've worked on diverse projects ranging from service booking platforms to 
                doctor appointment systems, always focusing on creating user-friendly solutions 
                with robust backend architectures.
              </p>
              <p className="text-white/80 leading-relaxed mb-6">
                I'm a fast learner, team collaborator, and tech enthusiast who believes in building with empathy.
              </p>
              <p className="text-white/80 leading-relaxed">
                When I'm not coding, you'll find me solving puzzles, working on DIY projects, 
                singing, or learning new languages. I'm passionate about continuous learning 
                and staying updated with the latest technologies.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl p-6 hover:bg-white/20 transition-colors duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:scale-110 transition-transform duration-300">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-white/80">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

