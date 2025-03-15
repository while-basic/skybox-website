'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowDown, FaServer, FaTools, FaRobot, FaFileDownload } from 'react-icons/fa';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 px-4 md:px-0">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            <span className="text-primary">Skybox</span> + Christopher Celaya
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-4xl font-semibold mb-8 text-white"
          >
            Data Center Expertise + Future-Ready Technical Skills
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed"
          >
            Former T5 Data Centers technician with 100% uptime track record, bringing 11+ years of industrial systems experience and cutting-edge AI/ML knowledge to help Skybox lead in next-generation data infrastructure.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <div className="flex items-center text-white">
              <FaServer className="text-primary mr-2 text-xl" /> 
              <span>Critical Facilities Experience</span>
            </div>
            <div className="flex items-center text-white">
              <FaTools className="text-primary mr-2 text-xl" /> 
              <span>Industrial Automation</span>
            </div>
            <div className="flex items-center text-white">
              <FaRobot className="text-primary mr-2 text-xl" /> 
              <span>AI/ML Engineering</span>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a 
              href="#why-me" 
              className="btn-primary flex items-center justify-center"
            >
              Why I'm Perfect for Skybox <FaArrowDown className="ml-2" />
            </a>
            
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center justify-center"
            >
              Download Resume <FaFileDownload className="ml-2" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 text-center animate-bounce">
        <p className="text-white/70 text-sm">Scroll to explore</p>
        <FaArrowDown className="mx-auto mt-2 text-primary" />
      </div>
    </section>
  );
};

export default Hero; 