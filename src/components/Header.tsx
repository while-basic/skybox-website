'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/" className="text-2xl font-bold">
            <span className="text-primary">Skybox</span> <span className="text-white">+ Chris</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-8"
        >
          <NavLink href="#why-me">Why Me</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#value">Value Proposition</NavLink>
          <NavLink href="/audio-demo" className="bg-primary/20 px-3 py-1 rounded-md hover:bg-primary/30">
            Tech Interviews
          </NavLink>
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-dark shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink href="#why-me" onClick={() => setMobileMenuOpen(false)}>Why Me</MobileNavLink>
            <MobileNavLink href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</MobileNavLink>
            <MobileNavLink href="#value" onClick={() => setMobileMenuOpen(false)}>Value Proposition</MobileNavLink>
            <MobileNavLink href="/audio-demo" onClick={() => setMobileMenuOpen(false)} className="text-primary font-bold">
              Tech Interviews
            </MobileNavLink>
          </div>
        </motion.div>
      )}
    </header>
  );
};

const NavLink = ({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) => (
  <Link 
    href={href} 
    className={`text-white hover:text-primary font-medium transition-colors ${className}`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ 
  href, 
  children, 
  onClick,
  className = ''
}: { 
  href: string; 
  children: React.ReactNode; 
  onClick: () => void;
  className?: string;
}) => (
  <Link 
    href={href} 
    onClick={onClick}
    className={`block py-2 text-white hover:text-primary font-medium transition-colors ${className}`}
  >
    {children}
  </Link>
);

export default Header; 