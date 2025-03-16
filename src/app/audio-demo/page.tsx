"use client";

import AudioPlayer from "@/components/ui/audio-player";
import { motion } from "framer-motion";
import { FaHeadphones } from "react-icons/fa";

export default function AudioDemo() {
  const audioFiles = [
    {
      title: "Introduction",
      src: "/audio/Intro_1.wav",
      cover: "https://images.unsplash.com/photo-1655720033654-a4239dd42d10?q=80&w=1470&auto=format&fit=crop",
      description: "Why I'm Perfect for Skybox"
    },
    {
      title: "Skybox Fit",
      src: "/audio/Skybox_1.wav",
      cover: "/images/skybox.jpg",
      description: "My Data Center Experience"
    },
    {
      title: "Professional Experience",
      src: "/audio/Professional Experience_1.wav",
      cover: "/images/work-experience.jpg",
      description: "My Work History"
    },
    
    {
      title: "Education",
      src: "/audio/Education_1.wav",
      cover: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop",
      description: "My Learning Journey"
    },
    {
      title: "MedChat AI Project",
      src: "/audio/MedChat_1.wav",
      cover: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop",
      description: "Healthcare AI Application"
    },
    {
      title: "Minecraft AI Bot",
      src: "/audio/Minecrat AI Bot_1.wav",
      cover: "/images/minecraft.png",
      description: "Reinforcement Learning Project"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <FaHeadphones className="text-primary text-3xl" />
          </motion.div>
          <h1 className="text-4xl font-bold mb-4">AI Interview Showcase</h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Listen to these AI-generated interviews that highlight my qualifications, experience, and projects. Each audio clip provides unique insights into my skills and background.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audioFiles.map((audio, index) => (
            <motion.div
              key={audio.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex flex-col items-center"
            >
              <div className="bg-gradient-to-b from-primary/20 to-transparent p-5 rounded-2xl w-full">
                <h2 className="text-xl font-semibold mb-4 text-white text-center">{audio.title}</h2>
                <AudioPlayer
                  src={audio.src}
                  cover={audio.cover}
                  title={audio.description}
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.p
          className="mt-16 text-center max-w-xl mx-auto text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          These audio interviews showcase an AI&apos;s perspective on why I would be an excellent candidate for Skybox, highlighting my expertise in data center operations, technical skills, and project experience.
        </motion.p>
      </motion.div>
    </div>
  );
} 