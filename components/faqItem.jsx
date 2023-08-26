"use client";
import React, { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div
        className={`cursor-pointer flex items-center justify-between p-2 ${
          isOpen ? "bg-gray-100" : "bg-white"
        }`}
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold text-gray-500">{question}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 ${isOpen ? "transform rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M5 10l7-7 7 7" : "M19 14l-7 7-7-7"}
          />
        </svg>
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-100">
          <div className="md:flex md:items-center">
            <div className="md:w-1/2 md:mr-8">
              <p className="text-gray-600">{answer}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
