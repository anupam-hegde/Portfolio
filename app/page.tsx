'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaKaggle, FaLinkedin, FaPython, FaBrain, FaEye, FaDatabase, FaRobot } from 'react-icons/fa';
import Image from 'next/image';
import { SiTypescript, SiPytorch } from 'react-icons/si';
import { useState, useEffect } from 'react';

// Navbar Component
function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Anupam Hegde
        </h1>
        <div className="flex gap-6">
          <motion.a
            whileHover={{ scale: 1.2, color: '#00d4ff' }}
            href="https://github.com/anupam-hegde"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, color: '#00d4ff' }}
            href="https://www.kaggle.com/anuphegde2004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <FaKaggle size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, color: '#00d4ff' }}
            href="https://www.linkedin.com/in/anupamhegde"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <FaLinkedin size={24} />
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}

// Skills Section Component
const skills = [
  { name: 'Python', icon: <FaPython size={50} />, color: '#3776AB' },
  { name: 'Machine Learning', icon: <FaBrain size={50} />, color: '#f7df1e' },
  { name: 'Deep Learning', icon: <SiPytorch size={50} />, color: '#EE4C2C' },
  { name: 'Computer Vision', icon: <FaEye size={50} />, color: '#5C8DBC' },
  { name: 'AI Agents', icon: <FaRobot size={50} />, color: '#A445ED' },
  { name: 'SQL', icon: <FaDatabase size={50} />, color: '#4479A1' },
];

function SkillsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          My Skillset
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-center justify-center p-6 bg-black/50 rounded-xl border border-cyan-500/20 shadow-lg"
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{ color: skill.color }}
              >
                {skill.icon}
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-full mb-2 px-3 py-1.5 bg-gray-800 text-white text-sm rounded-md shadow-lg"
              >
                {skill.name}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-gray-800"></div>
              </motion.div>
              <p className="mt-4 text-lg font-semibold text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center pt-20 pb-20 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Anupam
               
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparen">M Hegde</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Transforming data into intelligence. Building systems that learn, adapt, and innovate. Passionate about creating AI solutions that matter.
          </p>
          <motion.a
            href="https://github.com/anupam-hegde"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
          >
            Explore My Work
          </motion.a>
        </motion.div>

        {/* Right Side - Profile Photo */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center items-center"
        >
          {/* Glow effect background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-3xl group-hover:blur-[100px] transition-all"></div>
          
          {/* Profile Image Container */}
          <div className="relative w-80 h-80 group">
            <Image
              src="/profile.png"
              alt="Anupam M Hegde"
              width={320}
              height={320}
              className="w-full h-full rounded-full object-cover border-4 border-cyan-500/40 hover:border-cyan-500/80 transition-all relative z-10 shadow-2xl shadow-cyan-500/50"
            />
            {/* Animated border ring */}
            <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// The Drive Section
function DriveSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-6 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-8 text-white">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            The Drive
          </span>
        </h3>
        <p className="text-xl text-gray-300 leading-relaxed">
          <span className="italic text-cyan-300">
            I am driven by building Generative AI and Machine Learning systems that move beyond demos and into production—where research ideas are transformed into reliable, scalable applications.
          </span>
          <br className="my-4" />
          <span className="italic text-purple-300">
            I work at the intersection of models, data, and systems: fine-tuning and evaluating models, optimizing pipelines, and engineering end-to-end solutions that balance performance, interpretability, and real-world constraints.
            </span>
          <br className="my-4" />
          <span className="italic text-pink-300">
            I believe the future of AI belongs to engineers who can bridge experimentation and deployment, and I’m actively developing the skills and projects to be one of them.
          </span>
        </p>
      </div>
    </motion.section>
  );
}

// Animated Progress Bar Component
function SkillBar({ skill, percentage, delay, icon }: { skill: string; percentage: number; delay: number; icon: React.ReactNode }) {
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      onViewportEnter={() => setIsInView(true)}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400 text-xl">{icon}</span>
          <span className="text-cyan-400 font-semibold">{skill}</span>
        </div>
        <span className="text-purple-400 font-bold">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden border border-cyan-500/20">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay + 0.3 }}
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg shadow-cyan-500/50"
        />
      </div>
    </motion.div>
  );
}

// Projects Grid Component
function ProjectCard({ title, description, tech, githubUrl }: { title: string; description: string; tech: string[]; githubUrl: string }) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 0 40px rgba(0, 212, 255, 0.3)' }}
      onClick={() => window.open(githubUrl, '_blank')}
      className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-500/60 rounded-xl cursor-pointer transition-all group"
    >
      <h4 className="text-xl font-bold text-cyan-400 mb-2 group-hover:text-purple-400 transition-colors">
        {title}
      </h4>
      <p className="text-gray-400 mb-4 text-sm leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t, idx) => (
          <motion.span
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs rounded-full"
          >
            {t}
          </motion.span>
        ))}
      </div>
      <div className="mt-4 text-purple-400 text-sm group-hover:text-cyan-300 transition-colors">
        ↗ Open on GitHub
      </div>
    </motion.div>
  );
}

// Projects Section
function ProjectsSection() {
  const projects = [
    {
      title: 'Quant Solver – Autonomous Aptitude Generator',
      description: 'Intelligent question generation system that ensures 100% mathematical accuracy through adversarial AI validation. Three specialized agents (Code Executor, Logician, Skeptic) work in parallel to verify each question, reducing validation time by 3x while eliminating human error in test creation.',
      tech: ['Python', 'Google Gemini AI', 'Streamlit', 'Multi-Agent Systems', 'Parallel Processing','Agentic AI'],
      githubUrl: 'https://github.com/anupam-hegde/Quant_Solver-',
    },
   
    {
      title: 'Vehicle Class Detection',
      description: 'Deep learning project for classifying Indian vehicle images using VGG16, InceptionV3, and ResNet50 with CUDA-accelerated training and model comparison notebooks.',
      tech: ['TensorFlow', 'PyTorch', 'Jupyter Notebook', 'CUDA','Python'],
      githubUrl: 'https://github.com/anupam-hegde/Vehicle-class-detection',
    },
   
    
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// Footer Component
function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-12 px-6 border-t border-cyan-500/20 text-center"
    >
      <p className="text-gray-500 mb-4">
        
      </p>
      <p className="text-gray-600 text-sm">© 2025 Anupam M Hegde. All rights reserved.</p>
    </motion.footer>
  );
}

// Get In Touch Section
function GetInTouchSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-6 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent"
    >
      <div className="max-w-4xl mx-auto">
        <h3 className="text-4xl font-bold mb-6 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h3>
        <p className="text-gray-400 text-center mb-12 text-lg">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Card */}
          <motion.a
            href="mailto:anupam.m.hegde2004@gmail.com"
            whileHover={{ y: -8, boxShadow: '0 0 40px rgba(0, 212, 255, 0.3)' }}
            className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-500/60 rounded-xl transition-all group text-center"
          >
            <div className="text-cyan-400 text-4xl mb-4 flex justify-center">
              📧
            </div>
            <h4 className="text-xl font-bold text-cyan-400 mb-2 group-hover:text-purple-400 transition-colors">
              Email
            </h4>
            <p className="text-gray-400 text-sm">anupam.m.hegde2004@gmail.com</p>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            href="https://www.linkedin.com/in/anupamhegde"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -8, boxShadow: '0 0 40px rgba(0, 212, 255, 0.3)' }}
            className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-500/60 rounded-xl transition-all group text-center"
          >
            <div className="text-cyan-400 text-4xl mb-4 flex justify-center">
              <FaLinkedin />
            </div>
            <h4 className="text-xl font-bold text-cyan-400 mb-2 group-hover:text-purple-400 transition-colors">
              LinkedIn
            </h4>
            <p className="text-gray-400 text-sm">Connect with me</p>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}

// Main Home Component
export default function Home() {
  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
