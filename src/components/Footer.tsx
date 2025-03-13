'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <Link href="/" className="text-xl font-bold text-primary">
              Skybox <span className="text-secondary dark:text-light">+ Chris</span>
            </Link>
            <p className="text-sm text-secondary/70 dark:text-light/70 mt-2">
              &copy; {currentYear} Christopher Celaya. All rights reserved.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            <a 
              href="https://linkedin.com/in/christophercelaya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary/80 dark:text-light/80 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://github.com/while-basic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary/80 dark:text-light/80 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="mailto:chris@example.com" 
              className="text-secondary/80 dark:text-light/80 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 