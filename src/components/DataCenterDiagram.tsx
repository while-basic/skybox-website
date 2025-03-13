'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaServer, FaBolt, FaSnowflake, FaNetworkWired, FaShieldAlt, FaLock } from 'react-icons/fa';

const DataCenterDiagram = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeSystem, setActiveSystem] = useState<string | null>(null);

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

  const systems = [
    {
      id: "power",
      name: "Power Systems",
      icon: <FaBolt className="text-primary text-3xl" />,
      description: "Redundant power systems (2N, N+1) with UPS and generator backup to ensure 100% uptime.",
      position: "top-1/4 left-1/4",
      expertise: 95
    },
    {
      id: "cooling",
      name: "Cooling Infrastructure",
      icon: <FaSnowflake className="text-primary text-3xl" />,
      description: "Precision cooling systems optimized for high-density AI compute environments.",
      position: "top-1/4 right-1/4",
      expertise: 90
    },
    {
      id: "servers",
      name: "Server Infrastructure",
      icon: <FaServer className="text-primary text-3xl" />,
      description: "High-performance compute clusters including specialized GPU configurations for AI workloads.",
      position: "bottom-1/4 left-1/3",
      expertise: 85
    },
    {
      id: "network",
      name: "Network Architecture",
      icon: <FaNetworkWired className="text-primary text-3xl" />,
      description: "High-bandwidth, low-latency network infrastructure with redundant connections.",
      position: "bottom-1/3 right-1/3",
      expertise: 80
    },
    {
      id: "security",
      name: "Physical Security",
      icon: <FaShieldAlt className="text-primary text-3xl" />,
      description: "Multi-layered physical security systems including biometric access controls.",
      position: "bottom-1/4 right-1/4",
      expertise: 85
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity",
      icon: <FaLock className="text-primary text-3xl" />,
      description: "Advanced threat protection and security monitoring for critical infrastructure.",
      position: "top-1/3 left-1/3",
      expertise: 75
    },
  ];

  return (
    <section id="diagram" className="py-20 bg-light dark:bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Data Center Expertise</h2>
            <p className="text-lg text-secondary/80 dark:text-light/80 max-w-3xl mx-auto">
              My comprehensive understanding of data center systems ensures I can maintain and 
              optimize every aspect of Skybox&apos;s critical infrastructure.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="relative h-[500px] bg-white dark:bg-secondary/5 rounded-xl shadow-lg mb-12 overflow-hidden"
          >
            {/* Data Center Outline */}
            <div className="absolute inset-4 border-2 border-dashed border-primary/30 rounded-lg" />
            
            {/* Central Connection Lines */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2 border-primary/20" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-2 border-primary/10" />
            
            {/* Systems */}
            {systems.map((system) => (
              <motion.div
                key={system.id}
                className={`absolute ${system.position} transform -translate-x-1/2 -translate-y-1/2`}
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setActiveSystem(system.id)}
                onMouseLeave={() => setActiveSystem(null)}
              >
                <div 
                  className={`p-4 rounded-full ${
                    activeSystem === system.id 
                      ? 'bg-primary text-white' 
                      : 'bg-primary/10 text-primary'
                  } cursor-pointer transition-colors duration-300`}
                >
                  {system.icon}
                </div>
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-40 text-center ${
                  activeSystem === system.id ? 'opacity-100' : 'opacity-70'
                }`}>
                  <p className="text-sm font-medium text-secondary dark:text-light">{system.name}</p>
                </div>
              </motion.div>
            ))}
            
            {/* Central Data Center Icon */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                repeat: Number.POSITIVE_INFINITY, 
                duration: 3
              }}
            >
              <div className="p-6 bg-primary/20 rounded-full">
                <FaServer className="text-primary text-4xl" />
              </div>
            </motion.div>
          </motion.div>
          
          {/* System Details */}
          <motion.div variants={itemVariants} className="card">
            {activeSystem ? (
              <div className="p-4">
                <h3 className="text-xl font-semibold text-secondary dark:text-light mb-2">
                  {systems.find(s => s.id === activeSystem)?.name}
                </h3>
                <p className="text-secondary/80 dark:text-light/80 mb-4">
                  {systems.find(s => s.id === activeSystem)?.description}
                </p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
                  <motion.div 
                    className="bg-primary h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${systems.find(s => s.id === activeSystem)?.expertise}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
                <div className="flex justify-between text-xs text-secondary/70 dark:text-light/70">
                  <span>Expertise Level</span>
                  <span>{systems.find(s => s.id === activeSystem)?.expertise}%</span>
                </div>
              </div>
            ) : (
              <div className="p-4 text-center text-secondary/80 dark:text-light/80">
                <p>Hover over a system to see details</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataCenterDiagram; 