'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

const ThankYou = () => {
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
    <section className="py-16 bg-black border-t border-primary/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl font-bold mb-6 text-white"
          >
            Thank You <span className="text-primary">Skybox Team</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants} 
            className="text-lg text-white/80 mb-8"
          >
            Thank you for taking the time to consider my application. I&apos;m excited about the possibility of contributing to Skybox&apos;s mission of providing cutting-edge data center solutions. I look forward to the opportunity to discuss how my skills and experience align with your needs.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="card p-6 mb-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2">
                <FaEnvelope className="text-primary" />
                <a href="mailto:chris@chriscelaya.com" className="text-white hover:text-primary transition-colors">
                  chris@chriscelaya.com
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <FaPhone className="text-primary" />
                <a href="tel:9152700237" className="text-white hover:text-primary transition-colors">
                  915-270-0237
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <FaLinkedin className="text-primary" />
                <a 
                  href="https://linkedin.com/in/christophercelaya" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors"
                >
                  linkedin.com/in/christophercelaya
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.p 
            variants={itemVariants} 
            className="text-white/60 text-sm"
          >
            Christopher B. Celaya
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYou; 