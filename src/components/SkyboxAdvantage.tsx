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
      title: "Client Partnership",
      description: "Collaborative approach to data center solutions",
    },
  ];

  return (
    <section id="skybox" className="py-20">
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
              The <span className="text-primary">Skybox</span> Advantage
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Skybox Data Centers leads the industry with innovative, sustainable, and high-performance facilities designed for the future of computing.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {advantages.map((advantage) => (
              <div 
                key={advantage.id}
                className="card"
              >
                <div className="mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{advantage.title}</h3>
                <p className="text-white/70">{advantage.description}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="card">
            <h3 className="text-2xl font-semibold mb-6 text-white">How I'll Contribute to Skybox's Success</h3>
            <div className="space-y-4">
              <p className="text-white/80">
                My experience maintaining mission-critical infrastructure with 100% uptime directly aligns with Skybox's commitment to reliability and performance. I understand the demands of high-density computing environments and can help ensure your facilities meet the growing needs of AI and machine learning workloads.
              </p>
              <p className="text-white/80">
                With my background in both traditional data center operations and cutting-edge technologies, I can bridge the gap between current infrastructure and future requirements, helping Skybox maintain its competitive edge in the rapidly evolving data center landscape.
              </p>
              <p className="text-white/80">
                I'm excited about the opportunity to contribute to Skybox's growth and innovation, bringing my unique combination of skills to help drive the company's continued success.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkyboxAdvantage; 