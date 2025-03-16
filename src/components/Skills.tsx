'use client';

import type { ReactNode } from 'react';
import { motion, useAnimation } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { 
  FaServer, 
  FaBolt, 
  FaSnowflake, 
  FaNetworkWired, 
  FaShieldAlt, 
  FaChartLine
} from 'react-icons/fa';

// Define skill type
interface Skill {
  id: string;
  icon: ReactNode;
  name: string;
  description: string;
}

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
    hover: {
      y: -8,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      borderColor: "var(--primary)",
      transition: { 
        duration: 0.3, 
        ease: "easeOut" 
      },
    },
  };

  const iconVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      },
    },
    hover: { 
      scale: 1.15, 
      rotate: [0, -10, 10, -5, 5, 0],
      transition: { 
        duration: 0.6, 
        ease: "easeInOut" 
      },
    },
  };

  const technicalExpertise: Skill[] = [
    {
      id: "datacenter",
      icon: <FaServer className="text-primary text-2xl" />,
      name: "Critical Facilities Management",
      description: "Maintained mission-critical infrastructure with 100% uptime at T5 Data Centers."
    },
    {
      id: "cooling",
      icon: <FaSnowflake className="text-primary text-2xl" />,
      name: "Cooling Systems",
      description: "Optimized precision cooling systems through hot/cold aisle containment and airflow management."
    },
    {
      id: "power",
      icon: <FaBolt className="text-primary text-2xl" />,
      name: "Power Infrastructure",
      description: "Managed redundant power architectures (2N, N+1) with real-time monitoring."
    },
    {
      id: "network",
      icon: <FaNetworkWired className="text-primary text-2xl" />,
      name: "Network Infrastructure",
      description: "Implemented high-performance structured cabling systems and fiber optic ifrastructure."
    },
    {
      id: "security",
      icon: <FaShieldAlt className="text-primary text-2xl" />,
      name: "Physical Security & Compliance",
      description: "Deployed integrated access control and environmental monitoring systems."
    },
    {
      id: "monitoring",
      icon: <FaChartLine className="text-primary text-2xl" />,
      name: "Monitoring & DCIM",
      description: "Leveraged DCIM tools for real-time monitoring and predictive maintenance."
    }
  ];

  return (
    <section id="skills" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={sectionVariants} className="text-center mb-16">
            <h2 className="section-title">Technical Expertise</h2>
            <p className="section-subtitle">
              Core competencies in next-gen data center infrastructure and critical systems
            </p>
          </motion.div>

          <motion.div 
            variants={sectionVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {technicalExpertise.map((skill) => (
              <motion.div
                key={skill.id}
                variants={cardVariants}
                whileHover="hover"
                className="card p-6 h-full flex flex-col"
              >
                <motion.div 
                  variants={iconVariants}
                  whileHover="hover"
                  className="mb-4"
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-secondary dark:text-light mb-2">{skill.name}</h3>
                <p className="text-secondary/80 dark:text-light/80 flex-grow">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 