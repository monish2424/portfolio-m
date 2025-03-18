import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ContactForm } from './components/ContactForm';
import { projects, experiences, certifications, skills } from './data';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="bg-gray-900 text-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <Section id="home" className="flex items-center justify-center">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text"
          >
            AI & Hardware Integration Specialist
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-8"
          >
            Bridging the gap between AI and Hardware
          </motion.p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-purple-500">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a passionate AI Engineer with a strong background in AI integration on hardware. 
            I specialize in designing and optimizing intelligent systems that bridge the gap between 
            software and hardware. With a keen eye for innovation and efficiency, I thrive on solving 
            complex technical challenges.
          </p>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 capitalize">{category.replace('_', ' ')}</h3>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li key={skill} className="text-gray-300">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" className="bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-900/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-purple-500">{exp.company}</p>
                <p className="text-gray-400 mb-4">{exp.period}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-300">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-gray-800/50 rounded-lg overflow-hidden"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Certifications Section */}
      <Section id="certifications" className="bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-900/50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                <p className="text-purple-500">{cert.institution}</p>
                <p className="text-gray-400">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">Contact</h2>
          <ContactForm />
        </div>
      </Section>
    </div>
  );
}

export default App;