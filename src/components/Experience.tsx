import { useEffect, useRef, useState } from 'react';
import { Briefcase, Code2 } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      icon: Briefcase,
      role: 'Associate IT',
      company: 'Court Department',
      period: '2020 - Present',
      color: 'from-cyan-500 to-blue-500',
      responsibilities: [
        'Managing and maintaining critical IT infrastructure and systems',
        'Implementing security protocols and data protection measures',
        'Providing technical support and troubleshooting for 50+ users',
        'Overseeing system upgrades, network administration, and backups',
        'Training staff on new technologies and best practices'
      ]
    },
    {
      icon: Code2,
      role: 'Full Stack Developer',
      company: 'Freelance',
      period: '2019 - Present',
      color: 'from-blue-500 to-purple-500',
      responsibilities: [
        'Developing responsive web applications using React and Next.js',
        'Building robust backend APIs with Node.js and Express',
        'Designing and implementing database schemas (MongoDB, PostgreSQL)',
        'Deploying applications on cloud platforms (Netlify, Render, Vercel)',
        'Automating workflows and creating custom solutions for clients'
      ]
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">My professional journey and expertise</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 rounded-xl blur-xl transition-all duration-300`}></div>

              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    <div className={`p-3 bg-gradient-to-br ${exp.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <exp.icon className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-cyan-400 text-lg font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <span className="inline-block px-4 py-2 bg-gray-700/50 text-gray-300 rounded-full text-sm font-medium border border-gray-600/50">
                    {exp.period}
                  </span>
                </div>

                <div className="space-y-3">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                      style={{ transitionDelay: `${index * 200 + idx * 100}ms` }}
                    >
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
