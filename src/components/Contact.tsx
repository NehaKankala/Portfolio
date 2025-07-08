import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'nehakankala@gmail.com',
      href: 'mailto:nehakankala@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7670918474',
      href: 'tel:+917670918474',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Karimnagar, Telangana',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 section-padding scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Get In Touch</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I’m always open to new ideas and collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/10 transition"
                  >
                    <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                      <info.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{info.title}</h4>
                      <p className="text-white/80">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Web3Forms Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="glass-effect rounded-2xl p-8"
              onSubmit={() => setSubmitted(true)}
            >
              <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>

              {submitted && (
                <div className="flex items-center mb-6 text-green-400 bg-white/10 p-3 rounded-lg">
                  <CheckCircle size={20} className="mr-2" />
                  Message sent successfully!
                </div>
              )}

              {/* Hidden Web3Forms Access Key */}
              <input
                type="hidden"
                name="access_key"
            value="4b755247-24ab-4934-9f9f-1e3b65fefcea"
              />

              {/* Optional success redirect */}
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500 transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500 transition"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Your message here..."
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500 transition resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

