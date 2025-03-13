'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaBolt, FaLeaf, FaHandshake } from 'react-icons/fa';

const SkyboxAdvantage = () => {
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

  const advantages = [
    {
      id: "location",
      icon: <FaMapMarkerAlt className="text-primary text-3xl" />,
      title: "Strategic Location",
      description: "Austin's Silicon Hills positioning among tech leaders",
    },
    {
      id: "power",
      icon: <FaBolt className="text-primary text-3xl" />,
      title: "Power Infrastructure",
      description: "Multiple block designs supporting advanced computing",
    },
    {
      id: "leed",
      icon: <FaLeaf className="text-primary text-3xl" />,
      title: "LEED Certification",
      description: "Commitment to sustainable operations",
    },
    {
      id: "partnership",
      icon: <FaHandshake className="text-primary text-3xl" />,
      title: "Prologis Partnership",
      description: "Growth-oriented business model",
    },
  ];

  return (
    <section id="skybox" className="py-20 bg-white dark:bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">The Skybox Advantage</h2>
            <p className="text-lg text-secondary/80 dark:text-light/80 max-w-3xl mx-auto">
              What excites me about joining your team goes beyond just a job opportunity - 
              it&apos;s about being part of a forward-thinking organization building the 
              infrastructure for tomorrow&apos;s technology.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {advantages.map((advantage) => (
              <motion.div
                key={advantage.id}
                variants={itemVariants}
                className="card flex items-start gap-4 hover:border-primary transition-colors"
              >
                <div className="mt-1">{advantage.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-secondary dark:text-light">{advantage.title}</h4>
                  <p className="text-secondary/80 dark:text-light/80">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <p className="text-lg text-secondary/80 dark:text-light/80 italic">
              &quot;I&apos;m not just looking for a job – I&apos;m looking to contribute to a company that&apos;s 
              building the infrastructure backbone for the AI revolution.&quot;
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkyboxAdvantage; 