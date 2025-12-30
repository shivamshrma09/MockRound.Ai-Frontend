"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from 'next/navigation';
import checkParticipated from "../../../services/checkParticipation.services";
import { getTechnicalMCQ } from "../../../services/gettechnicalMCQ.services";
import logSuspiciousActivity from "../../../services/addsuspisious";
import { LuAlarmClock } from "react-icons/lu";

function MCQRound() {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const [alreadyParticipated, setAlreadyParticipated] = useState(false);
  const [assessmentStarted, setAssessmentStarted] = useState(false);
  const [inputText, setInputText] = useState("");
  const [localQuestionsList, setLocalQuestionsList] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(3600);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const testdetails = {
    companyName: "Tech Company",
    roundType: "Technical MCQ",
    duration: "60 minutes"
  };

  useEffect(() => {
    const verifyAccess = async () => {
      try {
        const rawEmail = params?.email as string;
        const email = rawEmail ? decodeURIComponent(rawEmail) : null;
        const userId = params?.userId as string;
        
        if (!email || !userId) {
          router.push('/challenges');
          return;
        }

        const userStr = localStorage.getItem('user');
        if (!userStr) {
          router.push('/login');
          return;
        }

        const user = JSON.parse(userStr);
        
        if (user.email !== email || (user._id || user.id) !== userId) {
          router.push('/unauthorized');
          return;
        }

        const challengeId = process.env.NEXT_PUBLIC_CHALLENGE_ID ;
        let participationResult = await checkParticipated(challengeId, 2);
        
        const hasParticipated = typeof participationResult === 'object' 
          ? participationResult.hasParticipated 
          : participationResult;
        
        if (hasParticipated === false) {
          setVerified(true);
          const mcqData = await getTechnicalMCQ();
          setLocalQuestionsList(mcqData.questions || mcqData || []);
        } else {
          setAlreadyParticipated(true);
        }
      } catch (error) {
        console.error('Access verification failed:', error);
        router.push('/challenges');
      } finally {
        setLoading(false);
        setIsMounted(true);
      }
    };

    verifyAccess();
  }, [params, router]);

  useEffect(() => {
    const challengeID = process.env.NEXT_PUBLIC_CHALLENGE_ID ;
    const roundNumber = 2; 

    const handleVisibilityChange = () => {
      if (document.hidden) {
        logSuspiciousActivity('Tab Switch Detected', challengeID, roundNumber);
      }
    };

    const handleBlur = () => {
      logSuspiciousActivity('Window Blur Detected', challengeID, roundNumber);
    };

    const handleCopy = (e) => {
      e.preventDefault();
      logSuspiciousActivity('Copy Attempt Detected', challengeID, roundNumber);
    };

    const handlePaste = (e) => {
      e.preventDefault();
      logSuspiciousActivity('Paste Attempt Detected', challengeID, roundNumber);
    };

    const handleContextMenu = (e) => {
      e.preventDefault();
      logSuspiciousActivity('Right Click Detected', challengeID, roundNumber);
    };

    if (assessmentStarted) {
      document.addEventListener('visibilitychange', handleVisibilityChange);
      window.addEventListener('blur', handleBlur);
      document.addEventListener('copy', handleCopy);
      document.addEventListener('paste', handlePaste);
      document.addEventListener('contextmenu', handleContextMenu);
    }

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleBlur);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('paste', handlePaste);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [assessmentStarted, params]);

  useEffect(() => {
    if (!assessmentStarted) return;
    const intervalId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [assessmentStarted]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionIndex, optionIndex) => {
    if (!verified) {
      router.push('/challenges');
      return;
    }
    
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: optionIndex
    }));
  };

  const handleSubmit = () => {
    if (!verified) {
      router.push('/challenges');
      return;
    }
    
    setShowSubmitConfirm(true);
  };

  const confirmSubmit = async () => {
    setIsSubmitting(true);
    try {
      const { default: submitCodeForAnalysis } = await import('../../../services/codeAnalysis.service');
      
      const questionsWithCode = localQuestionsList.map((question, index) => ({
        question: question.question || `Question ${index + 1}`,
        userCode: selectedAnswers[index] !== undefined ? 
          question.options?.[selectedAnswers[index]] || 'No answer' : 'No answer',
        solution: question.correctAnswer || 'N/A',
        language: 'MCQ',
        difficulty: question.difficulty || 'Medium'
      }));

      const result = await submitCodeForAnalysis(
        process.env.NEXT_PUBLIC_CHALLENGE_ID,
        2, 
        questionsWithCode
      );
      
      if (result.success || result) {
        alert('MCQ assessment submitted successfully!');
        router.push('/challenges');
      } else {
        alert('Submission failed!');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
      setShowSubmitConfirm(false);
    }
  };

  const onBack = () => {
    router.push('/challenges');
  };

  const currentQuestion = localQuestionsList[currentQuestionIndex] || {};
  const randomImage = 'https://ik.imagekit.io/qwzhnpeqg/mockround.ai%20imges%20public/logo.png';

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-white">Verifying access...</div>
      </div>
    );
  }

  if (!verified && alreadyParticipated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-center max-w-md mx-auto p-8 rounded-lg border border-red-500">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">!</span>
            </div>
            <h1 className="text-2xl font-bold mb-4 text-red-500">Already Participated</h1>
            <p className="text-gray-300 mb-6">
              You have already completed this MCQ assessment. Each user can only participate once per challenge.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Challenge ID: {process.env.NEXT_PUBLIC_CHALLENGE_ID}</p>
              <p>Round: Technical MCQ (Round 2)</p>
              <p>Status: Completed</p>
            </div>
          </div>
          <button 
            onClick={() => router.push('/challenges')}
            className="w-full px-4 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded font-semibold transition-colors"
          >
            Back to Challenges
          </button>
        </div>
      </div>
    );
  }

  if (!verified) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-red-500">Access denied. Redirecting...</div>
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
              {isSubmitting ? 'Submitting...' : 'Submit Assessment'}
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
            {currentQuestion.options?.map((item, index) => {
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
            }) || <p className="text-gray-400">No options available</p>}
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

export default MCQRound;