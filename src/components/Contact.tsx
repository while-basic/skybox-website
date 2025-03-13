'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate form submission
    try {
      // In a real application, you would send this data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitError('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Let&apos;s Connect</h2>
            <p className="text-lg text-secondary/80 dark:text-light/80 max-w-3xl mx-auto">
              I&apos;d love to discuss how my experience aligns with Skybox&apos;s needs. 
              Feel free to reach out through any of the channels below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={containerVariants}>
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-semibold mb-6 text-primary"
              >
                Contact Information
              </motion.h3>

              <motion.div variants={containerVariants} className="space-y-6">
                <motion.div variants={itemVariants} className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-secondary dark:text-light">Email</h4>
                    <a 
                      href="mailto:chris@example.com" 
                      className="text-secondary/80 dark:text-light/80 hover:text-primary transition-colors"
                    >
                      chris@example.com
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FaPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-secondary dark:text-light">Phone</h4>
                    <a 
                      href="tel:+15551234567" 
                      className="text-secondary/80 dark:text-light/80 hover:text-primary transition-colors"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FaLinkedin className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-secondary dark:text-light">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/christophercelaya" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary/80 dark:text-light/80 hover:text-primary transition-colors"
                    >
                      linkedin.com/in/christophercelaya
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FaGithub className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-secondary dark:text-light">GitHub</h4>
                    <a 
                      href="https://github.com/while-basic" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary/80 dark:text-light/80 hover:text-primary transition-colors"
                    >
                      github.com/while-basic
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div variants={containerVariants}>
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-semibold mb-6 text-primary"
              >
                Send a Message
              </motion.h3>

              {submitSuccess ? (
                <motion.div 
                  variants={itemVariants}
                  className="bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 p-4 rounded-lg"
                >
                  <p>Thank you for your message! I&apos;ll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <motion.form 
                  variants={containerVariants}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary dark:text-light mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-dark text-secondary dark:text-light focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary dark:text-light mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-dark text-secondary dark:text-light focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary dark:text-light mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-dark text-secondary dark:text-light focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </motion.div>

                  {submitError && (
                    <motion.div 
                      variants={itemVariants}
                      className="text-red-500 dark:text-red-400 text-sm"
                    >
                      {submitError}
                    </motion.div>
                  )}

                  <motion.div variants={itemVariants}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex justify-center items-center"
                    >
                      {isSubmitting ? (
                        <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      ) : null}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </motion.div>
                </motion.form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 