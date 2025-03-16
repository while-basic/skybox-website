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
      id: "automation",
      icon: <FaTools className="text-primary text-3xl" />,
      title: "Industrial Automation",
      description: "Experience in automating industrial processes and systems integration",
    },
    {
      id: "data",
      icon: <FaDatabase className="text-primary text-3xl" />,
      title: "Data Infrastructure",
      description: "Strong understanding of data center infrastructure and operations",
    },
    {
      id: "development",
      icon: <FaCode className="text-primary text-3xl" />,
      title: "Software Development",
      description: "Full-stack development skills with focus on infrastructure automation",
    },
  ];

  const keyPoints = [
    { id: "uptime", text: "100% uptime track record in mission-critical environments" },
    { id: "electrical", text: "Extensive experience with industrial electrical systems" },
    { id: "ai-ml", text: "Hands-on AI/ML engineering expertise" },
    { id: "problem-solving", text: "Strong problem-solving and troubleshooting skills" },
    { id: "pressure", text: "Proven ability to work under pressure in critical situations" },
    { id: "learning", text: "Continuous learner with passion for emerging technologies" },
    { id: "teamwork", text: "Team player with excellent communication skills" },
    { id: "excellence", text: "Dedicated to operational excellence and reliability" },
  ];

  return (
    <section id="why-me" className="py-20">
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
              Why I'm Perfect for <span className="text-primary">Skybox</span>
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              My unique combination of data center experience, industrial systems expertise, and AI/ML knowledge makes me an ideal fit for Skybox's innovative approach to data infrastructure.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {skills.map((skill) => (
              <div 
                key={skill.id}
                className="card"
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{skill.title}</h3>
                <p className="text-white/70">{skill.description}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="card">
            <h3 className="text-2xl font-semibold mb-6 text-white">Key Qualifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyPoints.map((point) => (
                <div key={point.id} className="flex items-start">
                  <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <p className="text-white/80">{point.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMe; 