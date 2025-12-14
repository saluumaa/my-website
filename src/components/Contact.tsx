import { useEffect, useRef, useState } from 'react';
import { Mail, Github, Linkedin, Send, Download } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      name: 'Email',
      url: 'mailto:salum@example.com',
      color: 'hover:text-cyan-400'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">Let's collaborate on your next project</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative group mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Let's work together!</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
                </p>

                <div className="flex gap-6 mb-8">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-700/50 rounded-lg border border-gray-600/50 ${social.color} transition-all duration-300 hover:scale-110 hover:border-cyan-500/50`}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
                >
                  <Download size={20} />
                  Download CV
                </a>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <form onSubmit={handleSubmit} className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
