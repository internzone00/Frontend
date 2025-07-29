import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const txnid = searchParams.get('txnid');
    const durationParam = searchParams.get('duration') || '1-Month';

    // Normalize the duration parameter to match our formUrls keys
    const normalizeDuration = (duration) => {
        if (duration.includes('3') || duration.toLowerCase().includes('three')) {
            return '3-Months';
        }
        if (duration.includes('6') || duration.toLowerCase().includes('six')) {
            return '6-Months';
        }
        return '1-Month'; // default
    };

    const normalizedDuration = normalizeDuration(durationParam);

    // Define your form URLs based on duration
    const formUrls = {
        '1-Month': "https://forms.gle/4CktYfqYZv7TV3NQ8",
        '3-Months': "https://forms.gle/8dxuUJo88bgYpA8A7",
        '6-Months': "https://forms.gle/KtsV4Fve6cKc5ic78"
    };

    console.log('Original duration:', durationParam);
    console.log('Normalized duration:', normalizedDuration);
    console.log('Selected form URL:', formUrls[normalizedDuration]);

    const handleGenerateOffer = () => {
        const formUrl = formUrls[normalizedDuration];
        window.open(formUrl, "_blank");
    };

    // Format duration display text
    const displayDuration = normalizedDuration.replace('-', ' '); // Converts "1-Month" to "1 Month"
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
                <div className="p-8 text-center">
                    <div className="mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <h1 className="text-3xl font-extrabold text-emerald-500 mt-4">Payment Successful</h1>
                        <p className="mt-2 text-gray-300">
                            Thank you for your {displayDuration} internship payment (TXN: {txnid})!
                        </p>
                    </div>
                    
                    <button
                        onClick={handleGenerateOffer}
                        className="w-full px-6 py-3 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg font-medium flex items-center justify-center shadow-lg hover:shadow-emerald-500/30 transition-all border border-emerald-600"
                    >
                        Generate {displayDuration} Offer Letter
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Success;