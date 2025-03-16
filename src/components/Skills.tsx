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
      description: "Comprehensive experience in managing mission-critical data center infrastructure at T5 Data Centers with 100% uptime record. Proficient in implementing redundancy strategies and maintaining operational excellence in high-availability environments."
    },
    {
      id: "cooling",
      icon: <FaSnowflake className="text-primary text-2xl" />,
      name: "Cooling Systems",
      description: "In-depth knowledge of precision cooling systems including CRAC/CRAH units, chilled water systems, and in-row cooling solutions. Experience optimizing airflow management through hot/cold aisle containment and implementing efficient cooling strategies to support high-density computing environments while maintaining optimal PUE metrics."
    },
    {
      id: "power",
      icon: <FaBolt className="text-primary text-2xl" />,
      name: "Power Infrastructure",
      description: "Extensive experience with power distribution systems including UPS configurations, PDUs, and switchgear. Proficient in managing redundant power architectures (2N, N+1) and implementing power monitoring solutions to ensure continuous operation during critical events."
    },
    {
      id: "network",
      icon: <FaNetworkWired className="text-primary text-2xl" />,
      name: "Network Infrastructure",
      description: "Strong understanding of data center network topologies, structured cabling systems, and connectivity requirements for high-performance computing. Experience with fiber optic infrastructure, network redundancy planning, and implementing physical layer security measures."
    },
    {
      id: "security",
      icon: <FaShieldAlt className="text-primary text-2xl" />,
      name: "Physical Security & Compliance",
      description: "Experience implementing and maintaining physical security protocols in accordance with industry standards (SSAE 18, SOC 2, ISO 27001). Proficient in access control systems, video surveillance, and environmental monitoring to ensure facility integrity and compliance."
    },
    {
      id: "monitoring",
      icon: <FaChartLine className="text-primary text-2xl" />,
      name: "Monitoring & DCIM",
      description: "Skilled in implementing and utilizing Data Center Infrastructure Management (DCIM) tools for real-time monitoring, capacity planning, and predictive maintenance. Experience with BMS integration and developing custom dashboards for operational visibility."
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
              My specialized skills in data center infrastructure and critical systems management
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