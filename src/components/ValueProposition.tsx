'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBrain, FaBolt, FaTools } from 'react-icons/fa';

const ValueProposition = () => {
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
    <section id="value" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              My Unique <span className="text-primary">Value</span> to Skybox
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              With data center experience at T5 and deep knowledge of emerging AI technologies, I offer Skybox a technician who can bridge today's operations with tomorrow's innovations.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="card">
              <div className="flex items-center mb-4">
                <FaBrain className="text-primary text-3xl mr-4" />
                <h3 className="text-2xl font-semibold text-white">AI Infrastructure Expertise</h3>
              </div>
              <p className="text-white/80 mb-4">
                My hands-on experience with AI systems gives me unique insight into the infrastructure demands of next-generation computing. I understand the cooling, power, and connectivity requirements that AI workloads place on data centers.
              </p>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Experience with high-density computing environments and their unique challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Understanding of GPU infrastructure requirements for AI/ML workloads</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Knowledge of cooling solutions for high-performance computing</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="card">
              <div className="flex items-center mb-4">
                <FaBolt className="text-primary text-3xl mr-4" />
                <h3 className="text-2xl font-semibold text-white">Operational Excellence</h3>
              </div>
              <p className="text-white/80 mb-4">
                My track record of 100% uptime in mission-critical environments demonstrates my commitment to operational excellence. I bring a systematic approach to maintenance and troubleshooting that ensures reliability.
              </p>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Proven ability to maintain critical systems with zero downtime</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Experience with preventative maintenance programs and emergency response</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Strong documentation and process improvement skills</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="card">
              <div className="flex items-center mb-4">
                <FaTools className="text-primary text-3xl mr-4" />
                <h3 className="text-2xl font-semibold text-white">Technical Versatility</h3>
              </div>
              <p className="text-white/80 mb-4">
                My diverse technical background allows me to work across multiple domains, from traditional data center infrastructure to cutting-edge technologies. This versatility makes me an asset in evolving technical environments.
              </p>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Proficiency with both mechanical and electrical systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Software skills for automation and monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Ability to quickly learn and adapt to new technologies</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition; 