import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm mb-2">© 2025 FashionHub. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="/about" className="text-sm hover:text-gray-300">About Us</a>
          <a href="/contact" className="text-sm hover:text-gray-300">Contact</a>
          <a href="/privacy" className="text-sm hover:text-gray-300">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;