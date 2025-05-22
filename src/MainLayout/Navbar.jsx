import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-purple-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">Kidsbook</Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="hover:text-lime-accent transition">About Us</Link>
            <Link to="/how-it-works" className="hover:text-lime-accent transition">How It Works</Link>
            <Link to="/get-started" className="bg-white text-purple-primary px-4 py-2 rounded-full font-medium flex items-center">
              Get Started
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-400">
            <Link to="/about" className="block py-2 hover:text-lime-accent transition">About Us</Link>
            <Link to="/how-it-works" className="block py-2 hover:text-lime-accent transition">How It Works</Link>
            <Link to="/get-started" className="block py-2 hover:text-lime-accent transition">Get Started</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
