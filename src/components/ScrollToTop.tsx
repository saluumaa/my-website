import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-cyan-500/50 z-50 animate-bounce-slow"
      aria-label="Scroll to top"
    >
      <ArrowUp className="text-white" size={24} />
    </button>
  );
};

export default ScrollToTop;
