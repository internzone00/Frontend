import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import Preview from './Preview';

const Form = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { serviceDuration } = location.state || {};


    const { serviceTitle, servicePrice } = location.state || {};
    const [toggle, setToggle] = useState(1);

    const [showCourseTooltip, setShowCourseTooltip] = useState(false);
    const [showAmountTooltip, setShowAmountTooltip] = useState(false);

    // Clerk hooks
    const { isLoaded, isSignedIn, user } = useUser();

    const [formData, setFormData] = useState({
        firstname: '',
        email: '',
        phone: '',
        amount: '',
        productinfo: JSON.stringify({
            course: '',
        }),
    });

    // Set user data when loaded
    useEffect(() => {
        if (isSignedIn && user) {
            setFormData(prev => ({
                ...prev,
                email: user.primaryEmailAddress?.emailAddress || '',
                firstname: user.fullName || prev.firstname
            }));
        }
        window.scrollTo(0,0);
    }, [isSignedIn, user]);

    const handleChange = (e) => {
        if (e.target.name === 'amount') {
            setFormData({ ...formData, [e.target.name]: parseInt(e.target.value) });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    }

    useEffect(() => {
        if (serviceTitle && servicePrice) {
            setFormData(prev => {
                const updatedProductInfo = JSON.stringify({
                    ...JSON.parse(prev.productinfo),
                    course: serviceTitle
                });
                return {
                    ...prev,
                    amount: servicePrice,
                    productinfo: updatedProductInfo
                };
            });
        }
    }, [servicePrice, serviceTitle]);

    const isCourseSelected = () => {
        const productInfo = JSON.parse(formData.productinfo);
        return productInfo.course && productInfo.course.trim() !== '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.firstname || !formData.email || !formData.phone) {
            alert('Please fill all required fields');
            return;
        }
        setToggle(2);
        console.log('Form submitted:', formData);
    };

    const handleBack = () => {
        navigate('/', { state: { scrollTo: 'service' } });
        console.log('Back button clicked');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                {toggle === 1 ? (
                    <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
                        <div className="p-8">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-extrabold text-white">Payment Details</h2>
                                <p className="mt-2 text-sm text-gray-400">Fill in your information to proceed</p>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-300 mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder-gray-400"
                                        required
                                        pattern="^[a-zA-Z]{2,30}$"
                                        title="Letters only, 2 to 30 characters"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder-gray-400"
                                        required
                                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                        title="Valid email address"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder-gray-400"
                                        required
                                        pattern="[6-9]\d{9}"
                                        title="10-digit Indian phone number"
                                    />
                                </div>

                                <div className="relative">
                                    <label htmlFor="course" className="block text-sm font-medium text-gray-300 mb-1">
                                        Course
                                    </label>
                                    <div 
                                        onMouseEnter={() => !isCourseSelected() && setShowCourseTooltip(true)}
                                        onMouseLeave={() => setShowCourseTooltip(false)}
                                    >
                                        <input
                                            type="text"
                                            id="course"
                                            name="course"
                                            value={JSON.parse(formData.productinfo).course}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-300 cursor-not-allowed"
                                            readOnly
                                            required
                                        />
                                        {showCourseTooltip && !isCourseSelected() && (
                                            <div className="absolute z-10 w-full mt-1 p-3 bg-yellow-900 border border-yellow-700 rounded-lg shadow-lg">
                                                <p className="text-sm text-yellow-200">
                                                    Please select a course from our Services section
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                
                                <div className="relative">
                                    <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-1">
                                        Amount (₹)
                                    </label>
                                    <div 
                                        onMouseEnter={() => !isCourseSelected() && setShowAmountTooltip(true)}
                                        onMouseLeave={() => setShowAmountTooltip(false)}
                                    >
                                        <input
                                            type="number"
                                            id="amount"
                                            name="amount"
                                            value={formData.amount}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-300 cursor-not-allowed"
                                            readOnly
                                            required
                                        />
                                        {showAmountTooltip && !isCourseSelected() && (
                                            <div className="absolute z-10 w-full mt-1 p-3 bg-yellow-900 border border-yellow-700 rounded-lg shadow-lg">
                                                <p className="text-sm text-yellow-200">
                                                    Amount will be automatically filled when you select a course
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-between pt-4">
                                    <button
                                        type="button"
                                        onClick={handleBack}
                                        className="px-6 py-3 bg-gray-700 text-gray-200 rounded-lg hover:bg-gray-600 transition-colors font-medium flex items-center border border-gray-600"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                        </svg>
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        className={`px-6 py-3 rounded-lg font-medium flex items-center transition-colors border ${
                                            isCourseSelected() 
                                                ? 'bg-cyan-700 hover:bg-cyan-600 text-white shadow-lg hover:shadow-cyan-500/30 border-cyan-600' 
                                                : 'bg-gray-700 text-gray-500 cursor-not-allowed border-gray-600'
                                        }`}
                                        disabled={!isCourseSelected()}
                                    >
                                        Preview Payment
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    <Preview
                        formData={formData}
                        onBack={() => setToggle(1)}
                        serviceDuration={serviceDuration}
                    />
                )}
            </div>
        </div>
    );
};

export default Form;