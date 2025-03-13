'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheckCircle, FaServer, FaBolt, FaTools, FaRobot, FaBrain, FaDatabase, FaCode } from 'react-icons/fa';

const WhyMe = () => {
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

  const skills = [
    {
      id: "infrastructure",
      icon: <FaServer className="text-primary text-3xl" />,
      title: "T5 Data Centers Experience",
      description: "Maintained mission-critical infrastructure with 100% uptime record",
    },
    {
      id: "power",
      icon: <FaBolt className="text-primary text-3xl" />,
      title: "Industrial Systems Expert",
      description: "11+ years troubleshooting complex electrical & mechanical systems",
    },
    {
      id: "ai",
      icon: <FaBrain className="text-primary text-3xl" />,
      title: "AI/ML Engineering Skills",
      description: "Deep experience with cutting-edge AI/ML technologies and hands-on projects",
    },
    {
      id: "troubleshooting",
      icon: <FaTools className="text-primary text-3xl" />,
      title: "Advanced Troubleshooting",
      description: "Systematic approach to maintaining operations during critical scenarios",
    },
  ];

  return (
    <section id="why-me" className="py-20 bg-light dark:bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Why I&apos;m the Perfect Fit for Skybox</h2>
            <p className="text-lg text-secondary/80 dark:text-light/80 max-w-3xl mx-auto">
              My unique background combines critical data center experience with advanced AI/ML knowledge—
              exactly what Skybox needs as you position for the AI infrastructure surge.
            </p>
          </motion.div>

          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-semibold mb-8 text-primary"
          >
            Data Center & Technical Experience
          </motion.h3>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.id}
                variants={itemVariants}
                className="card flex items-start gap-4 hover:border-primary transition-colors"
              >
                <div className="mt-1">{skill.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-secondary dark:text-light">{skill.title}</h4>
                  <p className="text-secondary/80 dark:text-light/80">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-semibold mb-8 text-primary"
          >
            Adding Unique Value to Skybox
          </motion.h3>

          <motion.div variants={containerVariants} className="space-y-6">
            <motion.div variants={itemVariants} className="card hover:border-primary transition-colors">
              <h4 className="text-xl font-semibold mb-4 text-secondary dark:text-light flex items-center gap-2">
                <FaRobot className="text-primary" />
                AI Infrastructure Knowledge
              </h4>
              <ul className="space-y-3 text-secondary/80 dark:text-light/80">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>Built and deployed production LLM applications using Llama2, TensorFlow, and PyTorch</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>Hands-on experience with NVIDIA H100s & A100s—the GPUs driving today&apos;s AI data centers</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>Deep understanding of the cooling, power, and infrastructure requirements for high-density AI compute</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="card hover:border-primary transition-colors">
              <h4 className="text-xl font-semibold mb-4 text-secondary dark:text-light flex items-center gap-2">
                <FaCode className="text-primary" />
                Technical Versatility
              </h4>
              <ul className="space-y-3 text-secondary/80 dark:text-light/80">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>Experience with modern software stacks (JavaScript, TypeScript, Next.js, Python) for automation and monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>Proficient with industrial automation systems including HMI panels, SCADA, and predictive maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>Knowledge of Docker, AWS, Azure, SQL, and MongoDB for modern infrastructure environments</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="card hover:border-primary transition-colors">
              <h4 className="text-xl font-semibold mb-4 text-secondary dark:text-light flex items-center gap-2">
                <FaDatabase className="text-primary" />
                Positioning Skybox for the Future
              </h4>
              <ul className="space-y-3 text-secondary/80 dark:text-light/80">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>Committed to 100% uptime and operational excellence in mission-critical environments</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>Constantly learning and adapting to emerging technologies in both data centers and AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>Bring practical insights on next-generation computational demands and infrastructure requirements</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMe; 