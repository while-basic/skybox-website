'use client';

import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface AudioContextType {
  currentlyPlaying: string | null;
  setCurrentlyPlaying: (src: string | null) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);

  return (
    <AudioContext.Provider value={{ currentlyPlaying, setCurrentlyPlaying }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
} 