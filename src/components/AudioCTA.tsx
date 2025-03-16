'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AudioPlayer from '@/components/ui/audio-player';
import Link from 'next/link';
import { FaHeadphones, FaArrowRight } from 'react-icons/fa';

const AudioCTA = () => {
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

  const glowVariants = {
    hidden: { opacity: 0.3 },
    visible: { 
      opacity: [0.3, 0.6, 0.3], 
      transition: { 
        duration: 3, 
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut" 
      } 
    }
  };

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Background glow effects */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"
        variants={glowVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <motion.div 
              className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <FaHeadphones className="text-primary text-3xl" />
            </motion.div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Hear Why I&apos;m the <span className="text-primary">Perfect Fit</span> for Skybox
            </h2>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
              Listen to these AI-generated interviews highlighting why I&apos;m the perfect fit for Skybox
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-b from-primary/20 to-transparent p-5 rounded-2xl w-full">
                <h3 className="text-xl font-semibold mb-4 text-white text-center">Why I&apos;m Perfect for Skybox</h3>
                <AudioPlayer
                  src="/audio/Intro_1.wav"
                  cover="/images/intro.webp"
                  title="AI Introduction"
                />
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-b from-primary/20 to-transparent p-5 rounded-2xl w-full">
                <h3 className="text-xl font-semibold mb-4 text-white text-center">My Data Center Experience</h3>
                <AudioPlayer
                  src="/audio/Skybox_1.wav"
                  cover="/images/skybox.jpg"
                  title="AI & Skybox"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-8 text-center"
          >
            <Link 
              href="/audio-demo"
              className="btn-primary inline-flex items-center justify-center group text-sm"
            >
              Full Audio Library
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AudioCTA; 