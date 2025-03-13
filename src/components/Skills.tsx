'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaServer, FaBolt, FaTools, FaRobot, FaBrain, FaDatabase } from 'react-icons/fa';

const Skills = () => {
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

  const technicalSkills = [
    {
      id: "datacenter",
      icon: <FaServer className="text-primary text-2xl" />,
      name: "Critical Facilities Management",
      level: 95,
      description: "Experience maintaining mission-critical data center infrastructure at T5 Data Centers with 100% uptime record."
    },
    {
      id: "power",
      icon: <FaBolt className="text-primary text-2xl" />,
      name: "Power Systems",
      level: 90,
      description: "Deep expertise with redundancy configurations (2N, N+1) and power distribution systems."
    },
    {
      id: "automation",
      icon: <FaRobot className="text-primary text-2xl" />,
      name: "Industrial Automation",
      level: 85,
      description: "Experience with HMI panels, SCADA systems, and industrial automation technologies."
    },
    {
      id: "troubleshooting",
      icon: <FaTools className="text-primary text-2xl" />,
      name: "Troubleshooting & Maintenance",
      level: 95,
      description: "Systematic approach to maintaining operations in high-pressure scenarios, ensuring minimal downtime."
    },
    {
      id: "ai",
      icon: <FaBrain className="text-primary text-2xl" />,
      name: "AI/ML Engineering",
      level: 80,
      description: "Hands-on experience with LLMs, reinforcement learning, computer vision, and predictive maintenance."
    },
    {
      id: "infrastructure",
      icon: <FaDatabase className="text-primary text-2xl" />,
      name: "Data Infrastructure",
      level: 85,
      description: "Experience with Docker, SQL, MongoDB, AWS, and Azure in high-performance environments."
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Technical Expertise</h2>
            <p className="text-lg text-secondary/80 dark:text-light/80 max-w-3xl mx-auto">
              My 11+ years of hands-on experience in mission-critical environments, combined with cutting-edge AI/ML knowledge, 
              creates a unique skillset perfectly suited for Skybox Data Centers&apos; infrastructure needs.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {technicalSkills.map((skill) => (
              <motion.div
                key={skill.id}
                variants={itemVariants}
                className="card hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-secondary dark:text-light">{skill.name}</h4>
                </div>
                
                <p className="text-sm text-secondary/80 dark:text-light/70 mb-4">
                  {skill.description}
                </p>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
                  <motion.div 
                    className="bg-primary h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                  />
                </div>
                <div className="flex justify-between text-xs text-secondary/70 dark:text-light/70">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <p className="text-lg text-secondary/80 dark:text-light/80">
              I&apos;m actively expanding my capabilities in AI infrastructure and high-performance computing, with experience 
              training models on NVIDIA H100s &amp; A100s—the same hardware driving today&apos;s most advanced data centers.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 