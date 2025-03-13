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
    <section id="value" className="py-20 bg-light dark:bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">My Unique Value to Skybox</h2>
            <p className="text-lg text-secondary/80 dark:text-light/80 max-w-3xl mx-auto">
              With data center experience at T5 and deep knowledge of emerging AI technologies, I offer Skybox a technician who can bridge today&apos;s operations with tomorrow&apos;s innovations.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="card text-center hover:border-primary transition-colors"
            >
              <div className="flex justify-center mb-4">
                <FaTools className="text-primary text-4xl" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-secondary dark:text-light">Immediate Value</h4>
              <ul className="text-left text-secondary/80 dark:text-light/80 space-y-2">
                <li>● Experienced data center technician</li>
                <li>● 100% uptime track record</li>
                <li>● Industrial systems troubleshooting</li>
                <li>● Power systems expertise (2N, N+1)</li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="card text-center hover:border-primary transition-colors"
            >
              <div className="flex justify-center mb-4">
                <FaBrain className="text-primary text-4xl" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-secondary dark:text-light">AI-Ready Skills</h4>
              <ul className="text-left text-secondary/80 dark:text-light/80 space-y-2">
                <li>● LLM application development</li>
                <li>● Experience with H100s & A100s GPUs</li>
                <li>● Understanding of AI cooling needs</li>
                <li>● Modern software stack knowledge</li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="card text-center hover:border-primary transition-colors"
            >
              <div className="flex justify-center mb-4">
                <FaBolt className="text-primary text-4xl" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-secondary dark:text-light">Long-Term Asset</h4>
              <ul className="text-left text-secondary/80 dark:text-light/80 space-y-2">
                <li>● Self-taught in cutting-edge tech</li>
                <li>● Continuous learning mindset</li>
                <li>● Insight into future data center needs</li>
                <li>● Committed to operational excellence</li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <p className="text-lg text-secondary/80 dark:text-light/80">
              As data centers evolve to meet the demands of AI computing, you need technicians who understand both 
              traditional infrastructure and next-generation requirements. My unique background in both worlds 
              positions me to help Skybox maintain operational excellence today while building for tomorrow&apos;s needs.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition; 