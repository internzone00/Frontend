import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
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
                    <a href="#services">
                        <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-full cursor-pointer hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30">
                            Explore Now!
                        </button>
                    </a>
                </div>

                {/* Navigation Links */}
                <div className="flex justify-center flex-wrap gap-4 mb-8">
                    <Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors px-3 py-1">Home</Link>
                    <Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors px-3 py-1">About Us</Link>
                    <Link to="/services" className="text-gray-400 hover:text-cyan-400 transition-colors px-3 py-1">Internship</Link>
                    <Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors px-3 py-1">Contact</Link>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-6 mb-8">
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-xl">
                        <FaLinkedin />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-xl">
                        <FaInstagram />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-xl">
                        <FaTwitter />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-xl">
                        <FaGithub />
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