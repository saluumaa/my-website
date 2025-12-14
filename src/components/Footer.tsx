const Footer = () => {
  return (
    <footer className="relative py-8 px-4 border-t border-gray-800">
      <div className="absolute inset-0 bg-gray-950"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-gray-400">
            &copy; 2025 <span className="text-cyan-400 font-semibold">Salum Ismail</span> | All Rights Reserved
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
