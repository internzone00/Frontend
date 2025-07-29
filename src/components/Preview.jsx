import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Preview = ({ formData, onBack, serviceDuration }) => {
    const [data, setData] = useState();
    const navigate = useNavigate();

    console.log(serviceDuration);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Payment status', formData);

        try {
            const response = await axios.post('https://internzone-backend.onrender.com/initiate-payment', {
                ...formData,
                serviceDuration,
                txnid: `TXIDS${Date.now()}`,
            });
            console.log(response.data);
            setData(response.data);
        } catch (error) {
            console.error("Payment error:", error);
        }
    };

    useEffect(() => {
        if (data && typeof data === 'string') {
            const formWrapper = document.getElementById('paymentData');
            formWrapper.innerHTML = data;
            const formElement = formWrapper.querySelector('form');
            if (formElement) {
                formElement.submit();
            }
        }
        window.scrollTo(0,0);
    }, [data]);

    return (
        <>
            <div
                className="hidden"
                id="paymentData"
                dangerouslySetInnerHTML={{ __html: data }}
            />

            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
                    <div className="p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-extrabold text-white">Payment Summary</h2>
                            <p className="mt-2 text-sm text-gray-400">Review your details before payment</p>
                        </div>

                        <div className="bg-gray-700 rounded-lg p-6 mb-8 border border-gray-600">
                            <div className="flex justify-between py-3 border-b border-gray-600">
                                <span className="text-gray-300">Course:</span>
                                <span className="font-medium text-white">{JSON.parse(formData.productinfo).course}</span>
                            </div>
                            <div className="flex justify-between py-3 border-b border-gray-600">
                                <span className="text-gray-300">Name:</span>
                                <span className="font-medium text-white">{formData.firstname}</span>
                            </div>
                            <div className="flex justify-between py-3">
                                <span className="text-gray-300">Amount:</span>
                                <span className="font-bold text-cyan-400">₹{formData.amount}</span>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="flex justify-between pt-4">
                                <button
                                    type="button"
                                    onClick={onBack}
                                    className="px-6 py-3 bg-gray-700 text-gray-200 rounded-lg hover:bg-gray-600 transition-colors font-medium flex items-center border border-gray-600"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                    </svg>
                                    Back
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-cyan-700 hover:bg-cyan-600 text-white rounded-lg font-medium flex items-center shadow-lg hover:shadow-cyan-500/30 transition-all border border-cyan-600"
                                >
                                    Confirm Payment
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Preview;
