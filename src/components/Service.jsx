import React, { useState } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { useUser, useClerk } from '@clerk/clerk-react';

const Service = ({
    services,
    selectedService,
    handleDetailsClick,
    handleCloseDetails,
}) => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { isSignedIn } = useUser();
    const { openSignUp } = useClerk();

    //Slider functionality


    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(services.length / itemsPerPage);

    // Slider navigation functions
    const nextSlide = () => {
        setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentPage(index);
    };

    // Get current items to display
    const currentItems = services.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    //Original apply now function
    const handleApplyNow = () => {
        if (!selectedService) {
            alert('Please select a service first');
            return;
        }


        if (!isSignedIn) {
            if (window.confirm('You need to login/signup first to apply. Click OK to procees to login.')) {
                openSignUp({
                    afterSignUpUrl: '/form',
                    afterSignInUrl: '/form',
                    unsafeMetadata: {
                        serviceTitle: selectedService.title,
                        servicePrice: selectedService.price,
                        serviceDuration : selectedService.duration
                    }
                });
            }
            return;
        }

        navigate('/form', {
            state: {
                serviceTitle: selectedService.title,
                servicePrice: selectedService.price,
                serviceDuration : selectedService.duration
            }
        });
    };


    return (
        <section id="services" className="max-w-7xl mx-auto px-6 py-16 md:py-20 scroll-m-20 bg-black">
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
                    Our <span className="text-gray-100">Services</span>
                </h2>
                <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                    Let's make your digital vision come alive — together!
                </p>
                <p>
                    <span className='text-xl text-gray-200 max-w-3xl mx-auto font-bold'>Enroll now and get your certificate effortlessly!</span>
                </p>
                <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4"></div>
            </div>

            {/* Services Grid */}
            <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentItems.map((service, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-900/30 to-gray-900 border border-gray-800 hover:border-cyan-400 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative h-full p-6 flex flex-col">
                                <div className="flex-1">
                                    <span className="inline-block bg-cyan-900/50 text-cyan-400 text-xs px-3 py-1 rounded-full mb-2">
                                        Beginner
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-2">{service.duration || '1-Month'} {service.title} Internship</h3>
                                    {/* <p className="text-gray-400 text-sm mb-3">
                                        {service.duration || '1-Month'} Internship
                                    </p> */}
                                    <p className="text-gray-400 text-xs mb-4">
                                        {service.desc}
                                    </p>
                                    <div className="mb-4">
                                        <span className="text-gray-400 line-through mr-2">₹{service.cutPrice || '2,499.00'}</span>
                                        <span className="text-cyan-400 text-lg font-bold">₹{service.price}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleDetailsClick(service)}
                                    className="w-full py-3 px-4 text-sm font-medium rounded-lg 
                                    bg-cyan-400 
                                    text-white
                                    hover:bg-white
                                    hover:text-cyan-400
                                    transition-all duration-300 flex items-center justify-center cursor-pointer"
                                >
                                    Details →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Controls (only show if more than one page) */}
                {totalPages > 1 && (
                    <>
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-gray-800 bg-opacity-70 hover:bg-opacity-100 text-white p-3 rounded-full z-10 transition-all"
                        >
                            <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-gray-800 bg-opacity-70 hover:bg-opacity-100 text-white p-3 rounded-full z-10 transition-all"
                        >
                            <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
                        </button>
                    </>
                )}
            </div>

            {/* Pagination Dots */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-8 space-x-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentPage
                                    ? 'bg-cyan-500 w-6'
                                    : 'bg-gray-600 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Your existing modal - unchanged */}
            {selectedService && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-50 p-4">
                    <div className="bg-gray-900 border border-gray-800 rounded-xl max-w-md w-full p-6 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>

                        <button
                            onClick={handleCloseDetails}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="mb-6">
                            <span className="inline-block bg-cyan-900/50 text-cyan-400 text-xs px-3 py-1 rounded-full mb-2">
                                Beginner
                            </span>
                            <h2 className="text-2xl font-bold text-white mb-1">{selectedService.title}</h2>
                            <p className="text-gray-400 text-sm mb-2">
                                {selectedService.duration || '1-Month'} Internship
                            </p>
                            <div className="flex items-center">
                                <span className="text-gray-400 line-through mr-2">₹{selectedService.originalPrice || '1,499.00'}</span>
                                <span className="text-cyan-400 text-xl font-bold">₹{selectedService.price}</span>
                            </div>
                        </div>

                        <ul className="space-y-3 mb-8">
                            {selectedService.details.map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                    <svg className="flex-shrink-0 w-5 h-5 text-cyan-400 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={handleApplyNow}
                            disabled={loading}
                            className="w-full py-3 px-6 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
                        >
                            {loading ? 'Processing...' : 'Apply Now'}
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Service;