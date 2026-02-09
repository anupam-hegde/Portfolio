'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaKaggle, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

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

// Core Capabilities Section Component
interface Capability {
  title: string;
  description: string;
  techTags: string[];
}

const capabilities: Capability[] = [
  {
    title: 'Machine Learning Systems',
    description: 'Design and implement end-to-end ML systems from data preprocessing to model deployment with focus on reliability and performance.',
    techTags: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'MLOps']
  },
  {
    title: 'Data Pipelines & Preprocessing',
    description: 'Build robust data processing workflows that handle real-world messy data and scale efficiently across different environments.',
    techTags: ['Python', 'Pandas', 'NumPy', 'Apache Airflow']
  },
  {
    title: 'Intelligent Agent Systems',
    description: 'Develop autonomous agents that can reason, plan, and execute complex tasks with minimal human intervention.',
    techTags: ['LangChain', 'Multi-Agent Systems', 'RAG', 'OpenAI API']
  },
  {
    title: 'Computer Vision',
    description: 'Create vision systems that process and understand visual data for classification, detection, and analysis applications.',
    techTags: ['OpenCV', 'YOLO', 'CNNs', 'Image Processing']
  },
  {
    title: 'AI Applications & Deployment',
    description: 'Transform research prototypes into production-ready applications with proper testing, monitoring, and scalability.',
    techTags: ['Docker', 'FastAPI', 'Streamlit', 'AWS/GCP']
  }
];

function CoreCapabilitiesSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Core Capabilities
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto"
        >
          What I can build and deliver for your organization
        </motion.p>

        {/* Responsive grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={index}
              capability={capability}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Reusable Capability Card Component
function CapabilityCard({ capability, index }: { capability: Capability; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        transition: { duration: 0.2 }
      }}
      className="group p-6 bg-gray-900/40 border border-gray-700/50 hover:border-gray-600/60 rounded-xl transition-all duration-300 cursor-default"
    >
      {/* Capability Title */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
        {capability.title}
      </h3>

      {/* Capability Description */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6 min-h-[3rem]">
        {capability.description}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2">
        {capability.techTags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs font-medium text-gray-400 bg-gray-800/60 border border-gray-700/50 rounded-full transition-colors duration-300 group-hover:text-gray-300 group-hover:border-gray-600/50"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
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
            I build end-to-end AI systems — from data pipelines and machine learning models
            to autonomous agents and deployable applications focused on correctness and real-world use.
          </p>
          <div className="flex flex-wrap gap-4">
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
            <motion.a
              href="/resume.pdf"
              download="Anupam_Hegde_Resume.pdf"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 border-2 border-purple-500 text-white font-semibold rounded-lg hover:bg-purple-500/20 transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)]"
            >
              Download Resume
            </motion.a>
          </div>

          {/* Contact Info */}
          <div className="mt-6 flex items-center gap-6 text-gray-400">
            <a href="mailto:anupam.m.hegde2004@gmail.com" className="hover:text-cyan-400 transition-colors text-sm">
              anupam.m.hegde2004@gmail.com
            </a>
            <span className="text-gray-600">•</span>
            <a href="https://www.linkedin.com/in/anupamhegde" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors text-sm">
              LinkedIn
            </a>
          </div>
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

// Enhanced Project Interface and Data
interface Project {
  title: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  impact: string;
  techStack: string[];
  githubUrl: string;
  liveDemo?: string;
  architecture?: string;
  tldr: string;
}

const projects: Project[] = [
  {
    title: 'Quant Solver – Autonomous Aptitude Generator',
    problem: 'Manual test creation prone to errors and requires extensive validation time',
    solution: 'Intelligent question generation system with adversarial AI validation ensuring 100% mathematical accuracy.',
    keyFeatures: [
      'Multi-agent architecture with Code Executor, Logician, and Skeptic agents',
      'Parallel processing pipeline reducing validation time by 3x',
      'Zero-error mathematical verification through adversarial validation'
    ],
    impact: '3x faster question validation, eliminated human error in test creation',
    techStack: ['Python', 'Google Gemini AI', 'Streamlit', 'Multi-Agent Systems', 'Parallel Processing', 'Agentic AI'],
    githubUrl: 'https://github.com/anupam-hegde/Quant_Solver-',
    tldr: 'AI system that automatically generates error-free math questions using multiple validation agents'
  },
  {
    title: 'Vehicle Class Detection System',
    problem: 'Accurate classification of Indian vehicle images across diverse vehicle types',
    solution: 'Deep learning pipeline comparing VGG16, InceptionV3, and ResNet50 with CUDA-accelerated training.',
    keyFeatures: [
      'Comparative analysis framework for multiple CNN architectures',
      'CUDA-optimized training pipeline for faster model iteration',
      'Production-ready model comparison and selection system'
    ],
    impact: 'Achieved optimal model selection with comprehensive performance metrics',
    techStack: ['TensorFlow', 'PyTorch', 'CUDA', 'Python', 'Computer Vision'],
    githubUrl: 'https://github.com/anupam-hegde/Vehicle-class-detection',
    tldr: 'Computer vision system that identifies different vehicle types from images with high accuracy'
  },
  {
    title: 'Causal Uplift Marketing Engine',
    problem: 'Optimizing marketing ROI by distinguishing "persuadable" customers from those who buy organically',
    solution: 'End-to-end Causal Inference pipeline using Class Transformation (Lai Method) and XGBoost with custom hyperparameter tuning.',
    keyFeatures: [
      'Custom Qini curve visualization for robust causal model validation',
      'Interactive Streamlit dashboard for real-time customer segmentation',
      'Production-ready inference pipeline capable of identifying negative uplift ("Sleeping Dogs")'
    ],
    impact: 'Achieved 0.0818 Qini Score, identifying the top 30% of users that drive maximum incremental revenue',
    techStack: ['Python', 'XGBoost', 'Scikit-Uplift', 'Streamlit', 'Pandas'],
    githubUrl: 'https://github.com/anupam-hegde/uplift-marketing-ai',
    liveDemo: 'https://your-deployed-site.com',
    tldr: 'AI system that targets customers based on "persuadability" rather than just purchase probability to maximize campaign efficiency'
  }
];

// Enhanced Project Card Component
function EnhancedProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 }
      }}
      className="group h-full p-4 bg-gray-900/40 border border-gray-700/50 hover:border-gray-600/60 rounded-xl transition-all duration-300 flex flex-col"
    >
      {/* Project Title */}
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
        {project.title}
      </h3>

      {/* TL;DR */}
      <p className="text-white font-bold text-sm mb-3 leading-tight">
        TL;DR: {project.tldr}
      </p>

      {/* Impact - Most Prominent */}
      <div className="mb-3 p-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
        <p className="text-cyan-300 text-sm font-bold text-center">{project.impact}</p>
      </div>

      {/* Brief Summary */}
      <p className="text-gray-300 text-xs leading-tight mb-2">
        {project.solution}
      </p>

      {/* Key Features */}
      <ul className="space-y-0.5 mb-2">
        {project.keyFeatures.map((feature, idx) => (
          <li key={idx} className="text-gray-400 text-xs leading-tight flex items-start">
            <span className="text-cyan-400 mr-1.5 mt-0.5 text-[6px]">●</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className="mb-3 mt-auto">
        <div className="flex flex-wrap gap-1">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 text-xs font-medium text-gray-500 bg-gray-800/40 border border-gray-700/30 rounded-full transition-colors duration-300 group-hover:text-gray-400 group-hover:border-gray-600/40"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-auto flex gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 block px-3 py-1.5 bg-gray-800/50 border border-gray-600/50 text-gray-300 text-xs font-medium rounded-lg hover:bg-gray-700/50 hover:border-gray-500/60 hover:text-white transition-all duration-200 text-center"
          onClick={(e) => e.stopPropagation()}
        >
          View Code
        </a>
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 block px-3 py-1.5 bg-cyan-900/30 border border-cyan-500/30 text-cyan-300 text-xs font-medium rounded-lg hover:bg-cyan-800/40 hover:border-cyan-400/50 hover:text-cyan-200 transition-all duration-200 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

// Contact Section Component
function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 px-6 bg-gray-900/20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Let's Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg mb-8 max-w-xl mx-auto"
        >
          Ready to build something impactful together? Let's discuss your next AI project.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:anupam.m.hegde2004@gmail.com"
            className="px-6 py-3 bg-cyan-600/20 border border-cyan-500/40 text-cyan-300 font-medium rounded-lg hover:bg-cyan-600/30 hover:border-cyan-400/60 hover:text-cyan-200 transition-all duration-200"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/anupamhegde"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-purple-600/20 border border-purple-500/40 text-purple-300 font-medium rounded-lg hover:bg-purple-600/30 hover:border-purple-400/60 hover:text-purple-200 transition-all duration-200"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

// Enhanced Projects Section
function ProjectsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto"
        >
          End-to-end systems that solve real problems through engineering excellence
        </motion.p>

        {/* Responsive grid: 1 column mobile, 2 desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <EnhancedProjectCard
              key={idx}
              project={project}
              index={idx}
            />
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
      className="py-12 px-6 border-t border-gray-700/30 text-center"
    >
      <div className="flex justify-center items-center gap-6 mb-6">
        <a href="mailto:anupam.m.hegde2004@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
          anupam.m.hegde2004@gmail.com
        </a>
        <span className="text-gray-600">•</span>
        <a href="https://www.linkedin.com/in/anupamhegde" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
          LinkedIn
        </a>
        <span className="text-gray-600">•</span>
        <a href="https://github.com/anupam-hegde" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
          GitHub
        </a>
      </div>
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
      <CoreCapabilitiesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
