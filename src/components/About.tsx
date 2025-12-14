import { useEffect, useRef, useState } from 'react';
import { Code2, Lightbulb, Wrench } from 'lucide-react';

const About = () => {
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

    return () => observer.disconnect();
  }, []);

  const strengths = [
    {
      icon: Code2,
      title: 'Innovation',
      description: 'Creating cutting-edge solutions with modern technologies'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Analyzing complex challenges and delivering elegant solutions'
    },
    {
      icon: Wrench,
      title: 'System Expertise',
      description: 'Deep knowledge in troubleshooting and system optimization'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-8">
                <p className="text-gray-300 leading-relaxed text-lg">
                  As a <span className="text-cyan-400 font-semibold">Full Stack Developer</span> and{' '}
                  <span className="text-cyan-400 font-semibold">Deputy-Head of ICT</span>, I bring a unique blend
                  of development expertise and systems administration experience.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-8">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Currently serving as <span className="text-cyan-400 font-semibold">Deputy-Head of ICT</span> at
                  a court department, I manage critical systems while <span className="text-cyan-400 font-semibold">building complicated projects</span>.
                  My expertise spans <span className="text-cyan-400 font-semibold">React, Node.js, Next.js, MongoDB,
                    PostgreSQL,</span> and <span className="text-cyan-400 font-semibold">Python</span>.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <strength.icon className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{strength.title}</h3>
                      <p className="text-gray-400">{strength.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
