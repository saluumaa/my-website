import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // GSAP animations
    gsap.fromTo('.project-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'CreativeHub',
      description: 'A full-stack freelancing platform connecting top talent with clients, featuring secure payments, AI-driven matching, and growth tools.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
      liveLink: 'https://fursat-psi.vercel.app/',
      githubLink: 'https://github.com/saluumaa/fursat'
    },
    {
      title: 'AgriTrade',
      description: 'Agricultural trading platform for buying/selling premium products, connecting farmers and suppliers globally with sustainable practices.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
      tech: ['React', 'Vite', 'Framer Motion', 'styled-components'],
      liveLink: 'https://agri-web-indol.vercel.app/',
      githubLink: 'https://github.com/saluumaa/agri-web'
    },
    {
      title: 'AgencyPro',
      description: 'Digital agency offering brand design, web development, mobile apps, SEO, and digital marketing services to transform businesses.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveLink: 'https://agencypro-two.vercel.app/',
      githubLink: 'https://github.com/saluumaa/agencypro-two'
    },
    {
      title: 'NGO Client Management System',
      description: 'Full-stack NGO client portal for managing beneficiaries, donations, and operations with secure authentication and data management.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      liveLink: 'https://client-k6efndbuf-saluumaas-projects.vercel.app/',
      githubLink: 'https://github.com/saluumaa'
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">Some of my recent work and side projects</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card group relative transition-all duration-700"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-gray-700/50">
                    <a
                      href={project.liveLink}
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
