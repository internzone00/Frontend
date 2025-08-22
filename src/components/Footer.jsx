import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleInternalLink = (section) => {
    setIsMobileMenuOpen(false); // Close mobile menu when a link is clicked
    if (window.location.pathname === '/') {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: section } });
    }
  };

    return (
        <footer className="bg-gradient-to-t from-black to-gray-900 text-center pt-10 pb-6 mt-16 border-t border-gray-700">
            <div className="max-w-6xl mx-auto px-4">
                {/* Logo and Tagline */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">InternZone</h2>
                    <p className="text-sm text-gray-300 mt-2">Turn Your Skills Into Experience with InternZone!</p>
                </div>

                {/* CTA Button */}
                <div className="mb-8">
                    
                        <button 
                        onClick={() => handleInternalLink('services')}
                        className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-full cursor-pointer hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30">
                            Explore Now!
                        </button>
                    
                </div>

                {/* Navigation Links */}
                <div className="flex justify-center flex-wrap gap-4 mb-8">
                    <button onClick={() => handleInternalLink('home')} className="text-gray-400 hover:text-cyan-400 transition-colors px-3 py-1">Home</button>
                    <button onClick={() => handleInternalLink('about')} className="text-gray-400 hover:text-cyan-400 transition-colors px-3 py-1">About Us</button>
                    <button onClick={() => handleInternalLink('services')} className="text-gray-400 hover:text-cyan-400 transition-colors px-3 py-1">Internship</button>
                    <button onClick={() => handleInternalLink('contact')} className="text-gray-400 hover:text-cyan-400 transition-colors px-3 py-1">Contact</button>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-6 mb-8">
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-xl">
                        <FaLinkedin />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-xl">
                        <FaInstagram />
                    </a>
                    
                </div>

                {/* NCS ID and Copyright */}
                <div className="text-xs text-gray-500 mt-6 space-y-1">
                    <p>NCS ID: E20G64-1725190218451</p>
                    <p>© 2025 InternZone. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer


