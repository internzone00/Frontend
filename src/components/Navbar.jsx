import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignInButton, UserButton, SignedOut } from "@clerk/clerk-react";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
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
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo - White on dark background */}
          <Link to="/" className="flex items-center">
            <img 
              src="/iz-logo.png" 
              alt="InternZone Logo" 
              className="h-10 w-auto hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => handleInternalLink('home')}
              className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </button>
            
            <button
              onClick={() => handleInternalLink('about')}
              className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About Us
            </button>
            
            <button
              onClick={() => handleInternalLink('services')}
              className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Internships
            </button>
            
            <button
              onClick={() => handleInternalLink('contact')}
              className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact
            </button>
          
            {/* Auth Buttons */}
            <SignedIn>
              <UserButton 
                appearance={{
                  elements: {
                    userButtonAvatarBox: "h-8 w-8 ring-2 ring-cyan-400",
                    userButtonPopoverCard: "bg-gray-800 border border-gray-700 shadow-xl"
                  }
                }}
              />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-4 py-2 rounded-md text-sm font-medium transition-colors shadow hover:shadow-md">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 p-2 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:bg-gray-800 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            
            <button
              onClick={() => handleInternalLink('about')}
              className="text-gray-300 hover:bg-gray-800 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              About Us
            </button>
            
            <button
              onClick={() => handleInternalLink('services')}
              className="text-gray-300 hover:bg-gray-800 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Internships
            </button>
            
            <button
              onClick={() => handleInternalLink('contact')}
              className="text-gray-300 hover:bg-gray-800 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Contact
            </button>

            <div className="pt-2 pb-3">
              <SignedIn>
                <div className="px-3 py-2">
                  <UserButton 
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "h-8 w-8 ring-2 ring-cyan-400",
                        userButtonPopoverCard: "bg-gray-800 border border-gray-700 shadow-xl"
                      }
                    }}
                  />
                </div>
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 w-full px-4 py-2 rounded-md text-base font-medium transition-colors shadow hover:shadow-md"
                  >
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
