'use client';

import type { ReactNode } from 'react';
import { motion, useAnimation } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { 
  FaServer, 
  FaBolt, 
  FaTools, 
  FaRobot, 
  FaBrain, 
  FaDatabase, 
  FaSnowflake, 
  FaNetworkWired, 
  FaShieldAlt, 
  FaChartLine,
  FaTachometerAlt,
  FaClipboardCheck,
  FaUserClock,
  FaExclamationTriangle
} from 'react-icons/fa';

// Define skill type
interface Skill {
  id: string;
  icon: ReactNode;
  name: string;
  description: string;
}

// Define metric type
interface Metric {
  id: string;
  icon: ReactNode;
  name: string;
  value: string;
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
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

  const valueVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: 0.3,
        duration: 0.5, 
        ease: "easeOut" 
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

  const additionalSkills: Skill[] = [
    {
      id: "automation",
      icon: <FaRobot className="text-primary text-2xl" />,
      name: "Industrial Automation",
      description: "Proficient with industrial automation systems, SCADA, and control systems integration. Experience implementing automated monitoring and control solutions for critical infrastructure components."
    },
    {
      id: "ai",
      icon: <FaBrain className="text-primary text-2xl" />,
      name: "AI/ML Engineering",
      description: "Hands-on experience with machine learning frameworks, model deployment, and AI infrastructure requirements. Understanding of specialized cooling and power needs for high-density GPU clusters used in AI workloads."
    },
    {
      id: "troubleshooting",
      icon: <FaTools className="text-primary text-2xl" />,
      name: "Advanced Troubleshooting",
      description: "Expert-level ability to diagnose and resolve complex technical issues in critical environments. Systematic approach to root cause analysis and implementing preventative measures to avoid recurrence."
    },
    {
      id: "infrastructure",
      icon: <FaDatabase className="text-primary text-2xl" />,
      name: "Infrastructure Design",
      description: "Knowledge of modern data center design principles, cooling systems, and high-density deployments. Experience evaluating infrastructure requirements for various workload types and recommending appropriate solutions."
    }
  ];

  const performanceMetrics: Metric[] = [
    {
      id: "uptime",
      icon: <FaTachometerAlt className="text-primary text-2xl" />,
      name: "Uptime Achievement",
      value: "100%",
      description: "Maintained perfect uptime across all critical systems during my tenure at T5 Data Centers, exceeding industry standards and SLA requirements."
    },
    {
      id: "mttr",
      icon: <FaUserClock className="text-primary text-2xl" />,
      name: "Mean Time to Repair",
      value: "<30 min",
      description: "Consistently resolved critical infrastructure issues in under 30 minutes, minimizing potential impact on operations and maintaining service continuity."
    },
    {
      id: "incidents",
      icon: <FaExclamationTriangle className="text-primary text-2xl" />,
      name: "Incident Prevention",
      value: "95%",
      description: "Implemented proactive maintenance protocols that prevented potential incidents, resulting in a 95% reduction in unplanned interventions."
    },
    {
      id: "compliance",
      icon: <FaClipboardCheck className="text-primary text-2xl" />,
      name: "Compliance Adherence",
      value: "100%",
      description: "Maintained full compliance with industry standards and regulations, ensuring all systems and procedures met or exceeded requirements during audits."
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
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Technical <motion.span 
                className="text-primary"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >Expertise</motion.span>
            </motion.h2>
            <motion.p 
              className="text-lg text-white/80 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              My expertise spans critical infrastructure management, industrial systems, and cutting-edge technologies—a unique combination that positions me to help Skybox lead in next-generation data infrastructure.
            </motion.p>
          </motion.div>

          <motion.div variants={sectionVariants} className="mb-12">
            <motion.h3 
              className="text-2xl font-semibold mb-8 text-white border-b border-primary/30 pb-2"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
            >
              Data Center Infrastructure Expertise
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technicalExpertise.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  custom={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="card"
                >
                  <div className="flex items-center mb-4">
                    <motion.div 
                      className="mr-3 bg-primary/10 p-3 rounded-full"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      {skill.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    </div>
                  </div>
                  
                  <motion.p 
                    className="text-white/80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + (index * 0.1), duration: 0.6 }}
                  >
                    {skill.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={sectionVariants} className="mb-12">
            <motion.h3 
              className="text-2xl font-semibold mb-8 text-white border-b border-primary/30 pb-2"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
            >
              Performance Metrics
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {performanceMetrics.map((metric, index) => (
                <motion.div
                  key={metric.id}
                  custom={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="card"
                >
                  <div className="flex items-center mb-4">
                    <motion.div 
                      className="mr-3 bg-primary/10 p-3 rounded-full"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      {metric.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{metric.name}</h3>
                      <motion.span 
                        className="text-primary font-bold text-xl"
                        variants={valueVariants}
                      >
                        {metric.value}
                      </motion.span>
                    </div>
                  </div>
                  
                  <motion.p 
                    className="text-white/80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + (index * 0.1), duration: 0.6 }}
                  >
                    {metric.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={sectionVariants}>
            <motion.h3 
              className="text-2xl font-semibold mb-8 text-white border-b border-primary/30 pb-2"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
            >
              Additional Technical Skills
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {additionalSkills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  custom={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="card"
                >
                  <div className="flex items-center mb-4">
                    <motion.div 
                      className="mr-3 bg-primary/10 p-3 rounded-full"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      {skill.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    </div>
                  </div>
                  
                  <motion.p 
                    className="text-white/80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + (index * 0.1), duration: 0.6 }}
                  >
                    {skill.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 