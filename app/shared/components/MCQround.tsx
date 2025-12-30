"use client"
import React, { useState, useEffect } from 'react';
import { LuAlarmClock } from "react-icons/lu";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { cpp } from "@codemirror/lang-cpp";
import { lineNumbers } from "@codemirror/view";
import { isMobile, isTablet, isDesktop } from 'react-device-detect';
import { technicalRoundService } from '../services/technicalRoundService';

function Page({ questionsList, onBack, testdetails }) {
  const [isLandscape, setIsLandscape] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [assessmentStarted, setAssessmentStarted] = useState(false);
  const [inputText, setInputText] = useState('');
  const [showFullscreenPrompt, setShowFullscreenPrompt] = useState(false);
  const [permissionError, setPermissionError] = useState('');
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  
  const [orientation, setOrientation] = useState(
    typeof window !== 'undefined' && window.matchMedia("(orientation: portrait)").matches ? "portrait" : "landscape"
  );
  
  const currentQuestion = questionsList?.[currentQuestionIndex] || {};

  useEffect(() => {
    setIsMounted(true);
    const checkOrientation = () => {
      setIsLandscape(window.matchMedia("(orientation: landscape)").matches);
      setOrientation(window.matchMedia("(orientation: portrait)").matches ? "portrait" : "landscape");
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

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const calculateScore = () => {
    let correctCount = 0;
    questionsList.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    return Math.round((correctCount / questionsList.length) * 100);
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
      const userStr = localStorage.getItem('user');
      if (!userStr) {
        throw new Error('User not found. Please login first.');
      }
    
      let user = JSON.parse(userStr);
      if (!user || (!user._id && !user.id)) {
        throw new Error('Incomplete user data. Please login again.');
      }

      const score = calculateScore();
      const submissionData = {
        companyName: testdetails?.companyName || 'Unknown Company',
        role: 'Technical Round',
        date: new Date().toISOString(),
        score: score,
        userId: user._id || user.id,
        questions: questionsList.map((question, index) => ({
          question: question.topic || question.title || question.question || 'Question not available',
          answer: selectedAnswers[index] !== undefined ? question.options[selectedAnswers[index]] : 'Not Answered',
          isright: selectedAnswers[index] === question.correctAnswer,
          rightanswer: question.options[question.correctAnswer] || 'Answer not available',
          explanation: question.explanation || ''
        }))
      };

      const response = await technicalRoundService.submitTechnicalRound(submissionData);

      alert(`Assessment submitted successfully! Your score: ${score}/100`);
      onBack();
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit assessment: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orientation === "portrait") {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center text-white">
        <div className="text-center p-8">
          <h2 className="text-2xl mb-4">Please rotate your device</h2>
          <p className="text-gray-400">This application works best in landscape mode</p>
          <button onClick={onBack} className="mt-4 px-4 py-2 bg-[#d97757] rounded hover:bg-[#c86a47]">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

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

  if (showFullscreenPrompt) {
    const handlePermissions = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ video: true });
        await document.documentElement.requestFullscreen();
        setShowFullscreenPrompt(false);
        setAssessmentStarted(true);
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          setPermissionError('Camera and fullscreen permissions are required to start the assessment.');
        } else {
          setPermissionError('Unable to access camera or enable fullscreen. Please try again.');
        }
      }
    };


    

    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center max-w-lg mx-auto p-8 rounded-lg">
          <div className="mb-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-white text-xl">Step</span>
              <div className="bg-[#d97757] font-bold text-2xl w-10 h-10 rounded-full text-white flex items-center justify-center">
                2
              </div>
            </div>
            <p className="text-gray-400 text-lg mb-8">Grant necessary permissions to proceed</p>
          </div>
          <h1 className="text-2xl font-bold mb-4 text-[#d97757]">Required Permissions</h1>

          <div className="text-left space-y-3 mb-6">
            <div className="flex items-center ml-12 gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-gray-300">Camera access for proctoring (Required)</span>
            </div>
            <div className="flex items-center gap-3 ml-12">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-gray-300">Fullscreen mode for focus (Required)</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-6">We are trying to give you same environment like real coding round</p>
          
          {permissionError && (
            <div className="bg-red-900/50 border border-red-500 rounded p-3 mb-4">
              <p className="text-red-300 text-sm">{permissionError}</p>
            </div>
          )}
          
          <div className="flex gap-2">
            <button 
              onClick={handlePermissions}
              className="w-full px-4 py-3 bg-[#d97757] hover:bg-[#c86a47] text-white rounded font-semibold"
            >
              Grant Permissions
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!assessmentStarted) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8 rounded-lg ">
           <div className="mb-2">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-white text-sm">Step</span>
              <div className="bg-[#d97757] font-bold text-2xl w-10 h-10 rounded-full text-white flex items-center justify-center">
                1
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-1 text-[#d97757]">Assessment Ready</h1>
                    <p className="text-gray-400 text-sm mb-4">Prepare for your coding assessment</p>

          
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
              <span className="text-white font-semibold">{questionsList?.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Duration:</span>
              <span className="text-white font-semibold">{testdetails?.duration}</span>
            </div>
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
              onClick={() => setShowFullscreenPrompt(true)}
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

  const languageExtensions = {
    JavaScript: [javascript(), lineNumbers()],
    "C++": [cpp(), lineNumbers()],
  };
  
  let person = {
    minutes: Math.floor(timeLeft / 60).toString().padStart(2, '0'),
    seconds: (timeLeft % 60).toString().padStart(2, '0'),
    numberofquestions: questionsList?.length || 12,
    questions_numbers: Array.from({length: questionsList?.length || 12}, (_, i) => (i + 1).toString()),
    numberselected: (currentQuestionIndex + 1).toString(),
    iscode: currentQuestion.code ? true : false,
    randomImage: './logo.png',
    question:  currentQuestion.question || "Loading question...",
    options: currentQuestion.options || [],
    code: currentQuestion.code || ""
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="w-full flex flex-col sm:flex-row justify-between px-3 sm:px-5 lg:px-8  gap-2 sm:gap-0 bg-black">
        <div className='flex gap-2 items-center'>
          <LuAlarmClock className='text-[#d97757] text-base sm:text-lg lg:text-2xl' />
          <h2 className='text-xs sm:text-sm lg:text-base font-medium text-white'>{person.minutes} : {person.seconds}</h2>
        </div>
        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3'>
          <h2 className='text-xs sm:text-xs lg:text-sm text-white'>{testdetails?.companyName || 'Company'} - {testdetails?.roundType || 'Technical Round'}</h2>
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
          {person.questions_numbers.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestionIndex(index)}
              className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full text-xs lg:text-sm ${
                person.numberselected == item ? 'bg-[#d97757] text-white ' : 'border-[#d97757] text-white border '
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        
        <div className='w-1/2 p-4 lg:p-6 border-r border-[#191919] overflow-y-auto bg-black'>
          <h2 className='text-lg lg:text-xl font-semibold mb-3 text-white'>Question {person.numberselected}</h2>
          
          <div className='mb-4'>
            <h4 className='text-sm lg:text-base font-medium leading-relaxed text-gray-300 mb-4'>
              {person.question}
            </h4>
            {currentQuestion.description && (
              <p className='text-xs text-gray-400 mb-2'>{currentQuestion.description}</p>
            )}
          </div>
          
          <p className='text-gray-400 text-sm mb-3'>Options:</p>

          <div className='grid grid-cols-1 gap-2'>
            {person.options.map((item, index) => {
              const isSelected = selectedAnswers[currentQuestionIndex] === index;
              return (
                <div 
                  key={index}
                  onClick={() => handleAnswerSelect(currentQuestionIndex, index)}
                  className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                    isSelected 
                      ? 'border-[#d97757]' 
                      : 'border-gray-600 hover:border-[#d97757]'
                  }`}
                >
                  <div className='flex items-start gap-3'>
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      isSelected ? 'border-[#d97757] ' : 'border-gray-400'
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
        
        <div className='h-full w-1/2 bg-black'>
          {currentQuestion.code ? (
            <CodeMirror
              value={currentQuestion.code}
              height="calc(100vh - 100px)"
              extensions={languageExtensions["JavaScript"]}
              theme="dark"
              className="max-w-full max-h-full object-contain rounded-lg shadow-lg [&_.cm-editor]:!bg-black [&_.cm-content]:!bg-black [&_.cm-gutter]:!bg-black"
              editable={false}
              style={{
                backgroundColor: "#000000",
                fontSize: "18px",
              }}
            />
          ) : currentQuestion.imgurl ? (
            <div className='h-full w-full flex items-center justify-center p-2 mt-[-55]'>
              <img 
                src={currentQuestion.imgurl}
                alt="Question Image"
                className='w-full h-full object-contain rounded-lg shadow-lg  '
              />
            </div>
          ) : null}
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
