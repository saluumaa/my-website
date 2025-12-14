import { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Full Stack Developer & Deputy-Head of ICT';
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }

    // GSAP animations
    const tl = gsap.timeline();
    tl.fromTo('.hero-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
      .fromTo('.hero-subtitle', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
      .fromTo('.hero-description', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
      .fromTo('.hero-buttons', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.2');
  }, [currentIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl text-cyan-400 mb-4 font-light tracking-wide">
            Hi, I'm
          </h2>
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Salum Ismail
          </h1>
          <div className="h-12 md:h-16 mb-8">
            <p className="hero-subtitle text-2xl md:text-3xl text-gray-300 font-light">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        <p className="hero-description text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Passionate about innovation, automation, and building digital solutions that make life easier.
          Transforming ideas into elegant, scalable applications.
        </p>

        <div className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-cyan-500 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            Contact Me
          </button>
        </div>

        <div className="mt-20 animate-bounce">
          <button onClick={() => scrollToSection('about')} className="text-cyan-400 hover:text-cyan-300 transition-colors">
            <ChevronDown size={40} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
