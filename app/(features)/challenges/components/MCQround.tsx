"use client";
import React, { useState, useEffect } from 'react';
import { LuAlarmClock } from "react-icons/lu";
import { isMobile, isTablet, isDesktop } from 'react-device-detect';

import { getquestionstechnical } from '../services/getquestions.services';
import logSuspiciousActivity from '../services/addsuspisious';
import submitCodeForAnalysis from "../services/codeAnalysis.service";

function Page({ onBack, testdetails }) {
  const [isLandscape, setIsLandscape] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [assessmentStarted, setAssessmentStarted] = useState(false);
  const [inputText, setInputText] = useState('');
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [localQuestionsList, setLocalQuestionsList] = useState([]);
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getquestionstechnical();
        setLocalQuestionsList(data.questions);
        setRandomImage(`https://picsum.photos/800/600?random=${Math.floor(Math.random() * 1000)}`);
      } catch (err) {
        console.error("Failed to fetch questions:", err);
      }
    };
    fetchQuestions();
  }, []);

  const currentQuestion = localQuestionsList[currentQuestionIndex] || {};

  useEffect(() => {
    setIsMounted(true);
    const checkOrientation = () => {
      setIsLandscape(window.matchMedia("(orientation: landscape)").matches);
    };

    checkOrientation();
    window.addEventListener("orientationchange", checkOrientation);
    window.addEventListener("resize", checkOrientation);

    const duration = parseInt(testdetails?.duration?.split(' ')[0] || "30");
    setTimeLeft(duration * 60);

    return () => {
      window.removeEventListener("orientationchange", checkOrientation);
      window.removeEventListener("resize", checkOrientation);
    };
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && isMounted && !isSubmitting) {
      handleSubmit();
    }
  }, [timeLeft, isMounted, isSubmitting]);

  useEffect(() => {
    const challengeId = process.env.NEXT_PUBLIC_CHALLENGE_ID 
    const roundNumber = 1;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        logSuspiciousActivity('Tab Switch Detected', challengeId, roundNumber);
      }
    };

    const handleBlur = () => {
      logSuspiciousActivity('Window Blur Detected', challengeId, roundNumber);
    };

    const handleCopy = (e) => {
      e.preventDefault();
      logSuspiciousActivity('Copy Attempt Detected', challengeId, roundNumber);
    };

    const handlePaste = (e) => {
      e.preventDefault();
      logSuspiciousActivity('Paste Attempt Detected', challengeId, roundNumber);
    };

    const handleContextMenu = (e) => {
      e.preventDefault();
      logSuspiciousActivity('Right Click Detected', challengeId, roundNumber);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleBlur);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('paste', handlePaste);
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleBlur);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('paste', handlePaste);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const calculateScore = () => {
    let correctCount = 0;
    localQuestionsList.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    return Math.round((correctCount / localQuestionsList.length) * 100);
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setShowSubmitConfirm(true);
  };

  const confirmSubmit = async () => {
  if (isSubmitting) return;

  setIsSubmitting(true);
  setShowSubmitConfirm(false);
  try {

    const score = calculateScore();
    const submissionData = {
      questions: localQuestionsList.map((question, index) => ({
        question: question.question,
        answer: selectedAnswers[index] !== undefined ? question.options[selectedAnswers[index]] : 'Not Answered',
        feedback: selectedAnswers[index] === question.correctAnswer,
      }))
    };

    await submitCodeForAnalysis(
      process.env.NEXT_PUBLIC_CHALLENGE_ID,
      1,
      submissionData.questions
    );

    alert(`Assessment submitted successfully! Your score: ${score}/100`);
    onBack();
  } catch (error) {
    console.error('Submission error:', error);
    alert('Failed to submit assessment: ' + error.message);
  } finally {
    setIsSubmitting(false);
  }
};


  if (isMounted && isMobile && !isLandscape) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Please Rotate Your Device</h1>
          <p className="text-gray-400 text-lg mb-6">
            This coding environment works best in landscape mode
          </p>
        </div>
      </div>
    );
  }

  if (!isMounted) {
    return <div className="min-h-screen bg-black"></div>;
  }

  if (!assessmentStarted) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8 rounded-lg border">
          <h1 className="text-3xl font-bold mb-6 text-[#d97757]">Assessment Ready</h1>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-400">Company:</span>
              <span className="text-white font-semibold">{testdetails?.companyName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Round:</span>
              <span className="text-white font-semibold">{testdetails?.roundType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Questions:</span>
              <span className="text-white font-semibold">{localQuestionsList?.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Duration:</span>
              <span className="text-white font-semibold">{testdetails?.duration}</span>
            </div>
          </div>
          <div className="space-y-3 mb-6">
            <h2 className="text-lg font-semibold text-[#d97757]">Required Permissions</h2>
            <div className="text-left space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-300 text-sm">Camera access for proctoring (Required)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-300 text-sm">Fullscreen mode for focus (Required)</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">We are trying to give you same environment like real MCQ round</p>
          </div>
          <p className='text-white mb-2'>Type "start" to give mock test</p>
          <div className="gap-2 flex">
            <input 
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type here..."
              className="w-70 px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white focus:outline-none focus:border-[#d97757]"
              autoFocus
            />
            <button 
              onClick={() => setAssessmentStarted(true)}
              disabled={inputText.toLowerCase() !== 'start'}
              className={`w-30 py-0 rounded font-bold transition-all ${
                inputText.toLowerCase() === 'start'
                  ? 'bg-[#d97757] hover:bg-[#c86a47] text-white cursor-pointer'
                  : 'hidden'
              }`}
            >
              {inputText.toLowerCase() === 'start' ? 'Enter' : ''}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="w-full flex flex-col sm:flex-row justify-between px-3 sm:px-5 lg:px-8 mt-2 gap-2 sm:gap-0 bg-black">
        <div className='flex gap-2 items-center'>
          <LuAlarmClock className='text-[#d97757] text-base sm:text-lg lg:text-2xl' />
          <h2 className='text-xs sm:text-sm lg:text-base font-medium text-white'>
            {formatTime(timeLeft)}
          </h2>
        </div>
        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3'>
          <h2 className='text-xs sm:text-xs lg:text-sm text-white'>
            {testdetails?.companyName || 'Company'} - {testdetails?.roundType || 'Technical Round'}
          </h2>
          <div className='flex gap-2'>
            <button onClick={onBack} className='bg-gray-600 hover:bg-gray-700 text-white font-semibold py-1 px-2 sm:px-3 lg:px-4 rounded-sm transition-all duration-300 text-xs sm:text-xs lg:text-sm'>
              Back
            </button>
            <button 
              onClick={handleSubmit}
              disabled={isSubmitting}
              className='bg-[#d97757] hover:bg-[#b53e16] disabled:bg-gray-600 text-white font-semibold py-1 px-2 sm:px-3 lg:px-4 rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-xs sm:text-xs lg:text-sm'
            >
              {isSubmitting ? 'Submitting...' : 'Submit Interview'}
            </button>
          </div>
        </div>
      </div>
      <hr className='border-[#191919] border-t mt-2' />

      <div className='flex flex-row h-screen bg-black'>
        <div className="w-16 bg-black border-r border-[#191919] flex flex-col items-center py-4 gap-2">
          {localQuestionsList.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestionIndex(index)}
              className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full text-xs lg:text-sm ${
                currentQuestionIndex === index ? 'bg-[#d97757] text-white' : 'border-[#d97757] text-white border'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        
        <div className='w-1/2 p-4 lg:p-6 border-r border-[#191919] overflow-y-auto bg-black'>
          <h2 className='text-lg lg:text-xl font-semibold mb-3 text-white'>Question {currentQuestionIndex + 1}</h2>
          
          <div className='mb-4'>
            <h4 className='text-sm lg:text-base font-medium leading-relaxed text-gray-300 mb-4'>
              {currentQuestion.question}
            </h4>
          </div>
          
          <p className='text-gray-400 text-sm mb-3'>Options:</p>
          <div className='grid grid-cols-1 gap-2'>
            {currentQuestion.options.map((item, index) => {
              const isSelected = selectedAnswers[currentQuestionIndex] === index;
              return (
                <div 
                  key={index}
                  onClick={() => handleAnswerSelect(currentQuestionIndex, index)}
                  className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                    isSelected 
                      ? 'border-[#d97757] bg-[#d97757]/10' 
                      : 'border-gray-600 hover:border-[#d97757]'
                  }`}
                >
                  <div className='flex items-start gap-3'>
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      isSelected ? 'border-[#d97757] bg-[#d97757]' : 'border-gray-400'
                    }`}>
                      {isSelected && <div className='w-2 h-2 bg-white rounded-full'></div>}
                    </div>
                    <span className='text-[#d97757] font-semibold text-sm'>
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <p className='text-sm text-gray-300 leading-relaxed'>
                      {item}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className='h-full w-1/2 bg-black flex items-center justify-center'>
          <img 
            src={randomImage}
            alt="Random Image"
            className='max-w-full max-h-full object-contain rounded-lg shadow-lg'
          />
        </div>
      </div>

      {showSubmitConfirm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-lg border border-gray-700 p-6 max-w-md mx-4">
            <h3 className="text-xl font-bold text-white mb-4">Submit Assessment?</h3>
            <p className="text-gray-300 mb-6">Are you sure you want to submit your assessment? You won't be able to make changes after submission.</p>
            <div className="flex gap-4">
              <button
                onClick={confirmSubmit}
                disabled={isSubmitting}
                className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded font-semibold disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Yes, Submit'}
              </button>
              <button
                onClick={() => setShowSubmitConfirm(false)}
                className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
