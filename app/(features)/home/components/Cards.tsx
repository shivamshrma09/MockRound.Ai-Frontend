'use client'
import React, { useState } from 'react';
import { VscFeedback } from "react-icons/vsc";
import { Button } from "@heroui/react";

const CardComponent = ({
  companyName,
  logoSrc,
  roundType,
  questions,
  duration,
  successRate,
  attempts,
  description,
  reviews,
  questionsList,
  onClick
}) => {
  const [showReview, setShowReview] = useState(false);

  return (
    <div className="lg:w-75 w-90 h-80 p-2 bg-black rounded-lg border border-[#1d1b1b] hover:border-[#555] flex flex-col">
      <div>
        <img
          src={logoSrc}
          alt={`${companyName} Logo`}
          className="lg:w-95 w-95 h-45 mb-4 rounded-lg object-cover bg-white"
        />
      </div>

      <h2 className='text-white text-xl font-bold mt-1 mb-1'>{roundType}</h2>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-500 text-xs">Questions: <span className="text-[#e29f89] font-semibold">{questions}</span></span>
        <span className="text-gray-500 text-xs">Duration: <span className="text-[#e29f89] font-semibold">{duration}</span></span>
        <span className="text-gray-500 text-xs">Attempts: <span className="text-[#e29f89] font-semibold">{attempts.toLocaleString()}</span></span>
      </div>

      <div className="flex gap-2 mt-auto">
        <Button 
          onClick={onClick}
          color="default"              
          className="w-full bg-[#d97757] font-bold text-lg text-center hover:bg-[#b37e6d] text-white py-1 px-4 rounded-sm transition-all duration-300 font-semibold shadow-md hover:shadow-xl transform hover:scale-[1.02] overflow-hidden relative focus:outline-none"
        >
          Start Assessment
        </Button>

        <button
          onClick={() => setShowReview(!showReview)}
          className="bg-black text-[#FAF9F5] p-2 rounded-lg"
        >
          <VscFeedback className="text-lg" />
        </button>
      </div>

      {showReview && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-black rounded-lg border border-[#333] p-4 max-w-sm w-full">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-[#FAF9F5] font-semibold">Reviews</h4>
              <button 
                onClick={() => setShowReview(false)}
                className="text-gray-400 hover:text-[#FAF9F5]"
              >
                ×
              </button>
            </div>
            <div className="space-y-3">
              {reviews && reviews.length > 0 ? (
                reviews.map((r, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#1a1a1a]">
                    <div className="flex items-center gap-2 mb-2">
                      <img src={r.imageSrc} alt={r.name} className="w-8 h-8 rounded-full object-cover" />
                      <p className="font-medium text-[#FAF9F5] text-sm">{r.name}</p>
                    </div>
                    <p className="text-gray-400 text-xs">{r.text}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-center py-4 text-sm">No reviews available</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardComponent;
