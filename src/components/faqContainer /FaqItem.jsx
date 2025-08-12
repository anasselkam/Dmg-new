// src/components/Faq/FaqItem.jsx
import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4 transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none group"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-100 group-hover:text-yellow-400 transition-colors">
          {question}
        </span>
        <span className="text-yellow-400">
          {isOpen ? (
            <AiOutlineMinus className="size-5" />
          ) : (
            <AiOutlinePlus className="size-5" />
          )}
        </span>
      </button>
      {isOpen && (
        <div 
          className="mt-3 text-gray-300 pl-2 pr-6 animate-fadeIn"
          aria-hidden={!isOpen}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqItem;