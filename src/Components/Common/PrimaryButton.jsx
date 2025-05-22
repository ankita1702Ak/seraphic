import React from 'react';

const PrimaryButton = ({ children, onClick, className = '' }) => {
  return (
    <button 
      onClick={onClick}
      className={`bg-lime-accent text-purple-primary px-6 py-3 rounded-full font-bold flex items-center transition-transform hover:scale-105 ${className}`}
    >
      {children}
      <svg 
        className="w-5 h-5 ml-2" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M9 5l7 7-7 7" 
        />
      </svg>
    </button>
  );
};

export default PrimaryButton;