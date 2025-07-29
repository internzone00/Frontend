import React from 'react';

const ApplyNowButton = ({ onClick, disabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`mt-4 w-full py-2 px-4 rounded-md text-white font-bold ${
                disabled 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-cyan-500 hover:bg-cyan-600'
            } transition-colors`}
        >
            {disabled ? 'Processing...' : 'Apply Now'}
        </button>
    );
};

export default ApplyNowButton;