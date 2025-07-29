import React from 'react';
import { useNavigate } from 'react-router-dom';

const Failure = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/', { state: { scrollTo: 'service' } });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
                <div className="p-8 text-center">
                    <div className="mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <h1 className="text-3xl font-extrabold text-red-500 mt-4">Payment Failed</h1>
                        <p className="mt-2 text-gray-300">Something went wrong with your payment. Please try again later.</p>
                    </div>
                    
                    <button
                        onClick={handleGoHome}
                        className="w-full px-6 py-3 bg-red-700 hover:bg-red-600 text-white rounded-lg font-medium flex items-center justify-center shadow-lg hover:shadow-red-500/30 transition-all border border-red-600"
                    >
                        Go to Home Page
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Failure;