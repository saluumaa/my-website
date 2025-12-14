import { useEffect, useRef, useState } from 'react';
import { Code, Database, Palette, Settings, GitBranch, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
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

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Database,
      title: 'Backend',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Python'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Palette,
      title: 'Tools & Design',
      skills: ['Git', 'VSCode', 'Figma', 'Netlify', 'Render', 'Postman'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Settings,
      title: 'IT & Systems',
      skills: ['Networking', 'Windows Management', 'System Troubleshooting', 'Security'],
      color: 'from-pink-500 to-red-500'
    }
  ];

  const technicalSkills = [
    { name: 'JavaScript/React', level: 95 },
    { name: 'Node.js/Express', level: 90 },
    { name: 'Database Management', level: 88 },
    { name: 'System Administration', level: 92 },
    { name: 'Problem Solving', level: 96 },
    { name: 'UI/UX Design', level: 85 }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-all duration-300`}></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 h-full hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`inline-flex p-3 bg-gradient-to-br ${category.color} rounded-lg mb-4`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50 hover:border-cyan-500/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <GitBranch className="text-cyan-400" />
              Proficiency Levels
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${500 + index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
