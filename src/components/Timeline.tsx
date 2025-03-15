'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap, FaAward, FaCertificate, FaCode, FaRobot } from 'react-icons/fa';

interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description: string;
  type: 'work' | 'education' | 'achievement' | 'certification' | 'project';
}

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineItems: TimelineItem[] = [
    {
      id: 'edu1',
      date: '2022 - Present',
      title: 'Machine Learning & AI Self-Study',
      description: 'Studying deep learning, reinforcement learning, LLMs, and hands-on projects. Working with OpenAI, Anthropic, Gemini, and HuggingFace APIs to build AI applications.',
      type: 'education',
    },
    {
      id: 'project1',
      date: '2023',
      title: 'Medchat AI (LLM for Healthcare)',
      description: 'Developed an AI-powered chatbot for healthcare professionals to assist in diagnoses, leveraging Llama2 for medical query interpretation. Technologies used: Python, Next.js, Tailwind CSS, Llama2.',
      type: 'project',
    },
    {
      id: 'project2',
      date: '2023',
      title: 'Minecraft AI Bot (Reinforcement Learning)',
      description: 'Developed an AI bot that autonomously builds structures in Minecraft, reducing human effort by 90%. Trained using reinforcement learning on in-game data. Technologies used: Python, JavaScript, Google Colab, Minecraft API.',
      type: 'project',
    },
    {
      id: 'project3',
      date: '2022',
      title: 'Gemini Pro Vision (Computer Vision & NLP)',
      description: 'Built a chatbot with real-time vision and text-to-speech capabilities, enabling dynamic AI-powered interactions. Technologies used: JavaScript, Next.js, Tailwind CSS, Gemini API.',
      type: 'project',
    },
    {
      id: 'job1',
      date: 'Sept 2021 - June 2022',
      title: 'Critical Facilities Data Center Technician II - T5 Data Centers',
      description: 'Maintained mission-critical data center infrastructure, ensuring 100% uptime. Supervised external contractors for adherence to critical facility work rules. Experience in infrastructure monitoring, automation, and large-scale system reliability.',
      type: 'work',
    },
    {
      id: 'job2',
      date: 'Jan 2018 - Sept 2021',
      title: 'Electro-Mechanic - CN Wire',
      description: 'Troubleshot and maintained industrial automation systems, including HMI panels and sensors. Optimized predictive maintenance strategies to improve equipment reliability. Exposure to sensor data, automation, and predictive analytics.',
      type: 'work',
    },
    {
      id: 'job3',
      date: 'May 2016 - Dec 2017',
      title: 'Wiring Technician (Quality Assurance) - Schneider Electric',
      description: 'Enhanced low-voltage systems quality by 20% through rigorous testing. Conducted root cause analysis on 50+ defects monthly. Applied data-driven troubleshooting and quality control methodologies.',
      type: 'work',
    },
    {
      id: 'edu2',
      date: 'n.d.',
      title: 'Electrical Engineering (Attended) - University of Texas at El Paso',
      description: 'Studies discontinued due to financial constraints, but continued AI/ML learning independently.',
      type: 'education',
    },
    {
      id: 'edu3',
      date: 'n.d.',
      title: 'Computer Science (Attended) - El Paso Community College',
      description: 'Relevant Coursework: Programming, Matrix Algebra, Advanced Object-Oriented Programming.',
      type: 'education',
    },
    {
      id: 'cert1',
      date: '2023',
      title: 'AI & ML Development Tools',
      description: 'CUDA, HuggingFace, Kaggle, Google Colab. Experience with training AI models on NVIDIA H100s & A100s.',
      type: 'certification',
    },
    {
      id: 'cert2',
      date: '2022',
      title: 'Cloud & DevOps',
      description: 'Docker, AWS, Azure. Experience with deploying and scaling AI applications in cloud environments.',
      type: 'certification',
    },
  ];

  const getIcon = (type: TimelineItem['type']) => {
    switch (type) {
      case 'work':
        return <FaBriefcase className="text-skybox-blue text-xl" />;
      case 'education':
        return <FaGraduationCap className="text-skybox-blue text-xl" />;
      case 'achievement':
        return <FaAward className="text-skybox-blue text-xl" />;
      case 'certification':
        return <FaCertificate className="text-skybox-blue text-xl" />;
      case 'project':
        return <FaRobot className="text-skybox-blue text-xl" />;
      default:
        return <FaBriefcase className="text-skybox-blue text-xl" />;
    }
  };

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

  return (
    <section id="timeline" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Professional Journey & AI Transition</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My career progression from industrial technology to AI/ML engineering, showcasing my experience in manufacturing environments, data center operations, and AI development projects.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative max-w-4xl mx-auto"
        >
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-skybox-blue" />

          {timelineItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <span className="inline-block text-skybox-blue font-semibold mb-2">{item.date}</span>
                <p className="text-gray-300">{item.description}</p>
              </div>

              {/* Icon */}
              <div className="z-10 flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full border-4 border-skybox-blue">
                {getIcon(item.type)}
              </div>

              {/* Empty space for the other side */}
              <div className="w-5/12" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline; 