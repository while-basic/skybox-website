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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-light to-white dark:from-dark dark:to-secondary/20 -z-10" />
      
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary"
          >
            Skybox + Christopher Celaya
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-secondary dark:text-light"
          >
            Data Center Expertise + Future-Ready Technical Skills
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-secondary/80 dark:text-light/80 mb-6 leading-relaxed"
          >
            Former T5 Data Centers technician with 100% uptime track record, bringing 11+ years of industrial systems experience and cutting-edge AI/ML knowledge to help Skybox lead in next-generation data infrastructure.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            <div className="flex items-center gap-2">
              <FaServer className="text-primary text-xl" />
              <span className="font-medium">Critical Facilities Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <FaTools className="text-primary text-xl" />
              <span className="font-medium">Industrial Automation</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRobot className="text-primary text-xl" />
              <span className="font-medium">AI/ML Engineering</span>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#why-me" 
              className="btn-primary flex items-center justify-center gap-2"
            >
              Why I&apos;m Perfect for Skybox
              <FaArrowDown className="animate-bounce" />
            </a>
            <a 
              href="/ChristopherCelaya_Resume.txt" 
              download
              className="btn-outline flex items-center justify-center gap-2"
            >
              Download Resume
              <FaFileDownload />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-secondary/60 dark:text-light/60 mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <FaArrowDown className="text-primary" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 