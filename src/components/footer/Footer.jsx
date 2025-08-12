import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4 mt-12"> {/* Added top margin */}
      <div className="container mx-auto text-center">

        {/* Footer Links */}
        <nav className="mb-4 space-x-4 md:space-x-6 text-sm">
          {/* Using anchor tags for single-page navigation */}
          {/* Adjust href if using React Router for separate pages */}
          <a href="#about" className="hover:text-yellow-400 transition duration-200">About</a>
          <a href="#courses" className="hover:text-yellow-400 transition duration-200">Courses</a>
          <a href="#pricing" className="hover:text-yellow-400 transition duration-200">Pricing</a>
          <a href="#faq" className="hover:text-yellow-400 transition duration-200">FAQ</a>
          <a href="#contact" className="hover:text-yellow-400 transition duration-200">Contact</a>
        </nav>

        {/* Copyright */}
        <p className="text-sm">
          © {currentYear} DMG-Germany. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;