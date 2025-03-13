'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaServer, FaBolt, FaTools, FaClock } from 'react-icons/fa';

const Statistics = () => {
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

  const stats = [
    {
      id: "uptime",
      icon: <FaServer className="text-primary text-3xl" />,
      value: 100,
      label: "Uptime Percentage",
      suffix: "%",
      description: "Perfect uptime record at T5 Data Centers"
    },
    {
      id: "experience",
      icon: <FaClock className="text-primary text-3xl" />,
      value: 11,
      label: "Years Experience",
      suffix: "+",
      description: "In industrial systems and technical environments"
    },
    {
      id: "power",
      icon: <FaBolt className="text-primary text-3xl" />,
      value: 99.999,
      label: "Power Reliability",
      suffix: "%",
      description: "Maintained five-nines reliability standards"
    },
    {
      id: "systems",
      icon: <FaTools className="text-primary text-3xl" />,
      value: 50,
      label: "Systems Managed",
      suffix: "+",
      description: "Across critical infrastructure environments"
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Performance Metrics</h2>
            <p className="text-lg text-secondary/80 dark:text-light/80 max-w-3xl mx-auto">
              My track record of excellence in mission-critical environments demonstrates 
              the reliability and expertise I&apos;ll bring to Skybox Data Centers.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <StatCounter 
                key={stat.id}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                description={stat.description}
                inView={inView}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

interface StatCounterProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  description: string;
  inView: boolean;
}

const StatCounter = ({ icon, value, label, suffix = "", description, inView }: StatCounterProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps
      
      // Don't start the animation if we're not in view
      if (!inView) return;
      
      // Reset counter
      setCount(0);
      
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [inView, value]);
  
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
          opacity: 1, 
          scale: 1,
          transition: { duration: 0.6, ease: "easeOut" }
        }
      }}
      className="card text-center hover:border-primary transition-colors"
    >
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <div className="text-4xl font-bold text-primary mb-2">
        {Number.isInteger(value) ? Math.floor(count) : count.toFixed(3)}
        {suffix}
      </div>
      <h4 className="text-xl font-semibold mb-3 text-secondary dark:text-light">{label}</h4>
      <p className="text-sm text-secondary/80 dark:text-light/80">
        {description}
      </p>
    </motion.div>
  );
};

export default Statistics; 