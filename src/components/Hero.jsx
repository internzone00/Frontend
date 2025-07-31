import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
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
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12 md:py-20 items-center">
            <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                    Turn Your Skills Into <span className="text-cyan-400">Experience</span> with InternZone!
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    InternZone is a student-focused platform providing real-world experience through internships and projects. Begin your journey to success today!
                </p>
                <div className="pt-2">
                        <button
                        onClick={() => handleInternalLink('services')}
                        className="px-8 py-3 text-lg font-semibold rounded-full bg-cyan-400 text-white hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30">
                            Explore Now →
                        </button>
                </div>
            </div>
            <div className="flex justify-center md:justify-end">
                <img 
                    src="/internzone-hero.png" 
                    alt="Students collaborating" 
                    className="rounded-lg shadow-xl max-w-full h-auto object-cover transition-all duration-500 hover:scale-105" 
                />
            </div>
        </section>
    )
}

export default Hero;
