import React, { useState } from 'react'
import { faEnvelope as faEnvelopeRegular } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const SERVICE_ID = "service_88noh2s";
    const Template_ID = "template_2stoxfe";
    const PUBLIC_ID = "A_Xny-n41qbfVSc5B";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(SERVICE_ID, Template_ID, e.target, PUBLIC_ID)
            .then((result) => {
                alert("Message Sent!");
                e.target.reset();
                setFormData({
                    name: "",
                    email: "",
                    number: "",
                    message: "",
                });
            })
            .catch(() => alert("Oops! Something went wrong, Please try again."))
            .finally(() => setIsSubmitting(false));
    };

    return (
        <section id="contact" className="max-w-7xl mx-auto px-6 py-16 md:py-24 bg-black scroll-m-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
                    Get In <span className="text-gray-100">Touch</span>
                </h2>
                <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4"></div>
                
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-gray-900 rounded-xl p-8 shadow-2xl border border-gray-800">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-8">Send us a message</h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-1">
                            <label htmlFor="name" className="text-gray-300 text-sm">Name</label>
                            <input 
                                id="name" 
                                name="name" 
                                required 
                                type="text" 
                                placeholder="Your name" 
                                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        
                        <div className="space-y-1">
                            <label htmlFor="email" className="text-gray-300 text-sm">Email</label>
                            <input 
                                id="email" 
                                name="email" 
                                required 
                                type="email" 
                                placeholder="your.email@example.com" 
                                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        
                        <div className="space-y-1">
                            <label htmlFor="number" className="text-gray-300 text-sm">Contact Number</label>
                            <input 
                                id="number" 
                                name="number" 
                                required 
                                type="text" 
                                placeholder="+91 1234567890" 
                                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                                value={formData.number}
                                onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                            />
                        </div>
                        
                        <div className="space-y-1">
                            <label htmlFor="message" className="text-gray-300 text-sm">Your Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                required 
                                rows="4"
                                placeholder="How can we help you?" 
                                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>
                        
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full py-3 px-6 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 flex items-center justify-center"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : 'Send Message'}
                        </button>
                    </form>
                </div>

                <div className="text-center">
                    <h3 className="text-3xl font-bold text-cyan-400 mb-8">Connect With Us</h3>
                    {/* <div className="flex justify-center gap-8 mb-12">
                        <a href="#" className="group">
                            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-cyan-900/30 to-gray-900 border border-gray-800 flex justify-center items-center group-hover:border-cyan-400 transition-all duration-300">
                                <FontAwesomeIcon 
                                    icon={faInstagram} 
                                    className="text-4xl text-cyan-400 group-hover:text-white transition-all duration-300" 
                                />
                            </div>
                        </a>
                        <a href="#" className="group">
                            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-cyan-900/30 to-gray-900 border border-gray-800 flex justify-center items-center group-hover:border-cyan-400 transition-all duration-300">
                                <FontAwesomeIcon 
                                    icon={faLinkedin} 
                                    className="text-4xl text-cyan-400 group-hover:text-white transition-all duration-300" 
                                />
                            </div>
                        </a>
                        <a href="#" className="group">
                            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-cyan-900/30 to-gray-900 border border-gray-800 flex justify-center items-center group-hover:border-cyan-400 transition-all duration-300">
                                <FontAwesomeIcon 
                                    icon={faEnvelopeRegular} 
                                    className="text-4xl text-cyan-400 group-hover:text-white transition-all duration-300" 
                                />
                            </div>
                        </a>
                    </div> */}
                    
                    {/* Replaced Contact Information Box */}
                    <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-lg">
    <div className="space-y-8">
        {/* Email Section */}
        <div className="space-y-2">
            <div className="flex items-center ">
                <svg className="w-5 h-5 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h4 className="text-lg font-semibold text-cyan-400">Email Support</h4>
            </div>
            <p className="text-gray-300 text-justify pl-8">support@internzone.in</p>
        </div>

        {/* Helpline Section */}
        <div className="space-y-2">
            <div className="flex items-center">
                <svg className="w-5 h-5 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <h4 className="text-lg font-semibold text-cyan-400">24/7 Student Helpline</h4>
            </div>
            <p className="text-gray-300 text-justify pl-8">+91 7498484636</p>
        </div>

        {/* Payment Query Section */}
        <div className="space-y-2">
            <div className="flex items-center">
                <svg className="w-5 h-5 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h4 className="text-lg font-semibold  text-cyan-400">Payment Support</h4>
            </div>
            <div className="space-y-2 pl-8">
                <p className="text-gray-300 text-justify">
                    Payment processing typically completes within 30 minutes. If your transaction remains pending beyond this period:
                </p>
                <div className="flex items-start mt-8">
                    <svg className="w-4 h-4 text-cyan-400 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <p className="text-gray-300 text-sm">
                        Please contact our WhatsApp support for immediate assistance with payment-related queries.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
                </div>
            </div>
        </section>
    )
}

export default Contact
