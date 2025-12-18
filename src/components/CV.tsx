import { useEffect, useRef, useState } from 'react';
import { Download, Mail, Phone, MapPin, Calendar, Award, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CV = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    // Roles
    const roles = [
        'Full Stack Developer',
        'Mentor',
        'Teacher',
        'Graphic Designer'
    ];

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
        gsap.fromTo('.cv-section',
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

    // Direct download link to Google Drive PDF
    const cvPdfUrl = 'https://docs.google.com/document/d/10zceJ3w05ehInF5-b_7n4i5RGp5pQZXZgLxtjGxXgsI/export?format=pdf';

    return (
        <section id="cv" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <motion.div
                    className="cv-section text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Curriculum Vitae
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-8"></div>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {roles.map((role) => (
                            <span key={role} className="inline-block bg-cyan-700/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                {role}
                            </span>
                        ))}
                    </div>
                    <a
                        href={cvPdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:scale-105 transition-transform duration-300"
                        download
                    >
                        <Download size={20} />
                        Download CV (PDF)
                    </a>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Personal Info */}
                    <motion.div
                        className="cv-section bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <Award className="text-cyan-400" />
                            Personal Information
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Mail className="text-cyan-400" size={20} />
                                <span className="text-gray-300">salumahassan02@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-cyan-400" size={20} />
                                <span className="text-gray-300">+252 63-4452812</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="text-cyan-400" size={20} />
                                <span className="text-gray-300">Borama, Somalia</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Calendar className="text-cyan-400" size={20} />
                                <span className="text-gray-300">Available for opportunities</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Professional Summary */}
                    <motion.div
                        className="cv-section bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Professional Summary</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Experienced Full Stack Developer and Deputy-Head of ICT with a passion for building scalable web applications
                            and leading IT infrastructure. Specialized in modern JavaScript frameworks and cloud technologies.
                        </p>
                    </motion.div>
                </div>

                {/* Skills */}
                <motion.div
                    className="cv-section mt-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <Code className="text-cyan-400" />
                        Technical Skills
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <h4 className="text-lg font-semibold text-cyan-400 mb-3">Frontend</h4>
                            <ul className="text-gray-300 space-y-1">
                                <li>• HTML5 & CSS3</li>
                                <li>• JavaScript (ES6+)</li>
                                <li>• React & Next.js</li>
                                <li>• TypeScript</li>
                                <li>• Tailwind CSS</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-cyan-400 mb-3">Backend</h4>
                            <ul className="text-gray-300 space-y-1">
                                <li>• Node.js & Express</li>
                                <li>• Python</li>
                                <li>• PostgreSQL & MongoDB</li>
                                <li>• Prisma ORM</li>
                                <li>• REST APIs</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-cyan-400 mb-3">Tools & ICT</h4>
                            <ul className="text-gray-300 space-y-1">
                                <li>• Git & GitHub</li>
                                <li>• Docker & AWS</li>
                                <li>• Network Management</li>
                                <li>• System Administration</li>
                                <li>• IT Infrastructure</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Experience */}
                <motion.div
                    className="cv-section mt-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-xl font-semibold text-cyan-400">Deputy-Head of ICT</h4>
                            <p className="text-gray-400 mb-2">Current Position</p>
                            <ul className="text-gray-300 space-y-1">
                                <li>• Leading IT operations and infrastructure management</li>
                                <li>• Managing system deployments and maintenance</li>
                                <li>• Overseeing network security and troubleshooting</li>
                                <li>• Coordinating with development teams</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-cyan-400">Full Stack Developer</h4>
                            <p className="text-gray-400 mb-2">Freelance / Projects</p>
                            <ul className="text-gray-300 space-y-1">
                                <li>• Developed multiple full-stack applications</li>
                                <li>• Built responsive web applications with modern frameworks</li>
                                <li>• Implemented secure authentication and data management</li>
                                <li>• Deployed applications on cloud platforms</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CV;