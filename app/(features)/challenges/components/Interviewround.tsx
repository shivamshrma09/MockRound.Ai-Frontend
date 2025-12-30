"use client"
import React, { useRef, useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation';
import { MdOutlineSecurity } from "react-icons/md";
import { BsCameraVideoFill } from "react-icons/bs";
import { FaPause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { BsMicMuteFill } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineMarkChatUnread } from "react-icons/md";
import { IoShareOutline } from "react-icons/io5";
import Whiteboard from '../../../shared/components/Whiteboard';
import CodeEditor from '../../../shared/components/CodeEditor';
import { interviewApiService, InterviewEntry, ResumeData } from '../../../shared/services/interviewApiService';
import { interviewSubmitService } from '../../../shared/services/interviewSubmitService';
import checkParticipated from '../services/checkParticipation.services';
import logSuspiciousActivity from '../services/addsuspisious';

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

function page({ systemTrue = true, company_Name = "Amazon", role = "Software Engineer", experience = 0, roundType = "HR", resumeData = null, interviewApiService: passedInterviewApiService, saveInterviewService }) {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const [isplaying, setIsplaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef(null); 
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [error, setError] = useState(null);
  const [maxfollowup, setmaxfollowup] = useState(3)
  const [currentQuestion, setCurrentQuestion] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [interviewStarted, setInterviewStarted] = useState(true)
  const [countdown, setCountdown] = useState(5)
  const [questionCount, setQuestionCount] = useState(0)
  const [isAISpeaking, setIsAISpeaking] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [recognition, setRecognition] = useState(null)
  const [transcript, setTranscript] = useState('')
  const interviewVideoRef = useRef(null)
  const [startValue, setStartValue] = useState(0)
  const [interviewData, setInterviewData] = useState([])
  const [currentAnswer, setCurrentAnswer] = useState('')
  const [totalQuestions, setTotalQuestions] = useState(0)
  const [maxQuestions, setMaxQuestions] = useState(3)
  const [apiEndpoint, setApiEndpoint] = useState('/api/hr')
  const [currentRoundType, setCurrentRoundType] = useState('HR')
  const [roundProgress, setRoundProgress] = useState({ HR: 0, Coding: 0, Technical: 0, Behavioral: 0 })
  const [maxQuestionsPerRound] = useState(3)
  const challengeId = process.env.NEXT_PUBLIC_CHALLENGE_ID 
  const currentRoundNumber = 2; 

const speakText = (text) => {
  if ('speechSynthesis' in window) {
    setIsAISpeaking(true);
    setIsplaying(true); 
    setIsMuted(true); 
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    utterance.onend = () => {
      setIsAISpeaking(false);
      setIsplaying(false);
      setIsMuted(false); 
    };
    
    speechSynthesis.speak(utterance);
  }
};

const initSpeechRecognition = () => {
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognitionInstance = new SpeechRecognition();
    
    recognitionInstance.continuous = true;
    recognitionInstance.interimResults = true;
    recognitionInstance.lang = 'en-US';
    
    recognitionInstance.onresult = (event) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        }
      }
      if (finalTranscript) {
        setTranscript(prev => prev + ' ' + finalTranscript);
      }
    };
    
    recognitionInstance.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };
    
    setRecognition(recognitionInstance);
  }
};

const startRecording = () => {
  if (recognition && !isAISpeaking) {
    setIsRecording(true);
    setTranscript('');
    recognition.start();
  }
};

const stopRecording = () => {
  if (recognition && isRecording) {
    setIsRecording(false);
    recognition.stop();
    
    if (transcript.trim()) {
      submitAnswer(transcript.trim());
      setTranscript('');
    }
  }
};

const getNewQuestion = async () => {
  setIsLoading(true);
  try {
    const requestData = (passedInterviewApiService || interviewApiService).prepareRequestData(
      company_Name,
      role,
      startValue,
      maxfollowup,
      currentRoundType,
      experience,
      undefined,
      undefined,
      resumeData
    );

    const result = await (passedInterviewApiService || interviewApiService).getNewQuestion(requestData, apiEndpoint);

    if (result.success && result.question) {
      setCurrentQuestion(result.question);
      speakText(result.question);
      setQuestionCount(1);
      setTotalQuestions(1);
      setStartValue(1);
    } else if (!result.success) {
      alert(`Error: ${result.error}`);
    }
  } catch (error) {
    alert(error.message);
  } finally {
    setIsLoading(false);
  }
};

const getNextRound = (currentRound) => {
  const roundSequence = ['HR', 'Coding', 'Technical', 'Behavioral'];
  const currentIndex = roundSequence.indexOf(currentRound);
  return currentIndex < roundSequence.length - 1 ? roundSequence[currentIndex + 1] : null;
};

const submitAnswer = async (answer) => {
  setIsLoading(true);
  setCurrentAnswer(answer);
  
  try {
    const requestData = (passedInterviewApiService || interviewApiService).prepareRequestData(
      company_Name,
      role,
      startValue,
      maxfollowup,
      currentRoundType,
      experience,
      currentQuestion,
      answer,
      resumeData
    );

    const result = await (passedInterviewApiService || interviewApiService).submitAnswer(requestData, apiEndpoint);

    if (result.success) {
      const interviewEntry = (passedInterviewApiService || interviewApiService).createInterviewEntry(
        currentQuestion,
        answer,
        result,
        currentRoundType
      );
      
      setInterviewData(prev => [...prev, interviewEntry]);
      
      if (result.max_followup !== undefined) {
        setmaxfollowup(result.max_followup);
      }
      
      const newProgress = { ...roundProgress };
      newProgress[currentRoundType] += 1;
      setRoundProgress(newProgress);
      
      if (newProgress[currentRoundType] >= maxQuestionsPerRound) {
        const nextRound = getNextRound(currentRoundType);
        if (nextRound) {
          alert(`${currentRoundType} Round completed! Moving to ${nextRound} Round`);
          setCurrentRoundType(nextRound);
          const nextConfig = (passedInterviewApiService || interviewApiService).getRoundConfig(nextRound);
          setApiEndpoint(nextConfig.endpoint);
          setTotalQuestions(0);
        } else {
          await submitInterviewResults([...interviewData, interviewEntry]);
          return;
        }
      }
      
      if (result.new_question) {
        setCurrentQuestion(result.new_question);
        speakText(result.new_question);
        setQuestionCount(prev => prev + 1);
        setTotalQuestions(prev => prev + 1);
      } else if (result.followup_question) {
        setCurrentQuestion(result.followup_question);
        speakText(result.followup_question);
      } else if (result.interview_continues === false) {
        await submitInterviewResults([...interviewData, interviewEntry]);
      }
    } else if (!result.success) {
      alert(`Error: ${result.error}`);
    }
  } catch (error) {
    alert(error.message);
  } finally {
    setIsLoading(false);
  }
};

const submitInterviewResults = async (finalInterviewData) => {
  try {
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    const payload = interviewSubmitService.prepareSubmitPayload(
      company_Name,
      currentRoundType,
      finalInterviewData,
      userData
    );

    const result = await interviewSubmitService.submitInterview(payload);
    
    if (result.success) {
      alert(`${currentRoundType} Interview completed successfully!\nResults sent to your email.\nInterview ID: ${result.interviewId}`);
    } else {
      alert(`Interview completed but failed to send results: ${result.message}`);
    }
  } catch (error) {
    console.error('Error submitting interview:', error);
    alert(`${currentRoundType} Interview completed!\nFailed to send results. Please contact support.`);
  }
};

const startStream = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user' },
      audio: true
    });
    
    setPermissionGranted(true);
    
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play().catch(e => console.log('Play error:', e));
      }
    }, 100);
    
  } catch (err) {
    console.error("Camera error:", err);
    setError(err.message);
    setPermissionGranted(false);
  }
};

useEffect(() => {
  startStream();
  initSpeechRecognition();
  
  const config = (passedInterviewApiService || interviewApiService).getRoundConfig(currentRoundType);
  setMaxQuestions(config.maxQuestions);
  setApiEndpoint(config.endpoint);

  const userData = JSON.parse(localStorage.getItem('user') || '{}');
  const handleVisibilityChange = () => {
    if (document.hidden) {
      logSuspiciousActivity('Tab Switch Detected', challengeId, currentRoundNumber);
    }
  };

  const handleWindowBlur = () => {
    logSuspiciousActivity('Window Blur Detected', challengeId, currentRoundNumber);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.altKey && e.key === 'Tab') {
      e.preventDefault();
      logSuspiciousActivity('Alt+Tab Detected', challengeId, currentRoundNumber);
    }
    if (e.ctrlKey && (e.key === 'c' || e.key === 'v')) {
      logSuspiciousActivity('Copy/Paste Detected', challengeId, currentRoundNumber);
    }
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);
  window.addEventListener('blur', handleWindowBlur);
  document.addEventListener('keydown', handleKeyDown);

  const countdownInterval = setInterval(() => {
    setCountdown(prev => {
      if (prev <= 1) {
        clearInterval(countdownInterval);
        getNewQuestion();
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => {
    clearInterval(countdownInterval);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('blur', handleWindowBlur);
    document.removeEventListener('keydown', handleKeyDown);
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
    }
    if (recognition) {
      recognition.stop();
    }
  };
}, [currentRoundType]);

const shouldShowProgress = currentQuestion !== '';

return (
  <div className='h-screen flex flex-col overflow-hidden bg-black'>
    <div className='flex-shrink-0'>
      <div className='flex flex-row w-full justify-between items-center px-2 sm:px-4 md:px-6 py-2'>
        <div className='flex flex-row gap-1 sm:gap-2 md:gap-4 items-center'>
          <div className='text-green-500'>
            <MdOutlineSecurity className='text-sm sm:text-lg md:text-xl'/>
          </div>
          <div className='flex bg-[#191616] rounded-lg justify-center items-center w-auto px-1 sm:px-2 md:px-3 h-6 sm:h-8 md:h-10 gap-1 sm:gap-2 md:gap-3'>
            <BsCameraVideoFill className='text-red-500 text-xs sm:text-sm md:text-base'/>
            <span className='text-white text-xs sm:text-xs md:text-sm'>
              {isAISpeaking ? 'AI Speaking..' : isRecording ? 'Recording..' : 'Ready to Record'}
            </span>
            {isRecording ? <div className='w-2 h-2 bg-red-500 rounded-full animate-pulse'></div> : null}
          </div>
        </div>
        
        <div className='flex items-center gap-4'>
          <div className='text-center'>
            <h2 className='text-white text-xs sm:text-sm md:text-lg lg:text-lg'>{company_Name} - {currentRoundType} Round</h2>
            {isAISpeaking && <p className='text-yellow-400 text-xs'>AI Speaking...</p>}
            {isRecording && <p className='text-red-400 text-xs animate-pulse'>🔴 Recording</p>}
            {!isAISpeaking && !isRecording && !isLoading && <p className='text-green-400 text-xs'>Ready</p>}
          </div>
        </div>
      </div>
      
      <hr className='border-gray-600 border-t mx-2 sm:mx-4 md:mx-6'/>
    </div>

    <div className='flex-1 flex flex-col sm:flex-row min-h-0 overflow-hidden'>
      {systemTrue ? (
        <>
          <div className='w-full sm:w-1/2 h-1/2 sm:h-full border-b-2 sm:border-b-0 sm:border-r-2 border-gray-600'>
            <video 
              ref={interviewVideoRef}
              src={isAISpeaking ? 'https://ik.imagekit.io/qwzhnpeqg/mockround.ai%20imges%20public/video1.mp4' : 'https://ik.imagekit.io/qwzhnpeqg/mockround.ai%20imges%20public/video1.mp4'}
              className='w-full h-full bg-black object-cover' 
              autoPlay 
              muted 
              loop
              controls={false}
              onError={(e) => console.log('Video error:', e)}
            />
          </div>
          
          <div className='w-full sm:w-1/2 h-1/2 sm:h-full bg-black overflow-hidden'>
            {!permissionGranted ? (
              <div className='h-full flex items-center justify-center'>
                <div className='text-center max-w-sm mx-auto p-6'>
                  <div className='text-red-500 mb-4'>
                    <BsCameraVideoFill className='text-4xl mx-auto mb-2'/>
                  </div>
                  <p className='text-white text-sm mb-4'>Camera Permission Required</p>
                  <p className='text-gray-400 text-xs mb-6'>Please allow camera access to start the interview</p>
                  
                  <div className='bg-gray-900 rounded p-3'>
                    <p className='text-yellow-400 text-xs mb-2'>How to Answer:</p>
                    <ul className='text-gray-300 text-xs space-y-1 text-left'>
                      <li>• Click the microphone button to start recording</li>
                      <li>• Speak clearly and naturally</li>
                      <li>• Click the microphone again to stop and submit</li>
                      <li>• Wait for AI feedback before next question</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : currentQuestion ? (
              <div className='h-full flex flex-col'>
                <div className='p-4 border-b border-gray-600'>
                  
                  {interviewData.length > 0 && (
                    <div className='mt-2 p-2 bg-gray-900 rounded text-xs'>
                      <div className='flex justify-between'>
                        <p className='text-gray-400'>Last Score: 
                          <span className='text-green-400 ml-1'>
                            {interviewData[interviewData.length - 1]?.score || 0}
                          </span>
                        </p>
                        {currentRoundType === 'Technical' || currentRoundType === 'Coding' ? (
                          <p className='text-gray-400'>Topics: 
                            <span className='text-blue-400 ml-1 text-xs'>
                              {interviewData[interviewData.length - 1]?.topics?.slice(0,2).join(', ') || 'N/A'}
                            </span>
                          </p>
                        ) : null}
                      </div>
                    </div>
                  )}
                  
                  {isLoading && (
                    <div className='text-center text-gray-400 mt-2 text-xs'>
                      Processing your answer...
                    </div>
                  )}
                </div>
                
                <div className='flex-1 flex flex-col'>
                  {currentRoundType === 'Coding' ? (
                    <>
                      <div className='h-1/2 border-b border-gray-600'>
                        <CodeEditor />
                      </div>
                      <div className='h-1/2'>
                        <Whiteboard />
                      </div>
                    </>
                  ) : (
                    <Whiteboard />
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </>
      ) : (
        <div className='w-full h-full'>
          <video 
            src={isAISpeaking ? 'https://ik.imagekit.io/qwzhnpeqg/mockround.ai%20imges%20public/video1.mp4' : 'https://ik.imagekit.io/qwzhnpeqg/mockround.ai%20imges%20public/video1.mp4'}
            className='w-full h-full bg-black object-cover' 
            autoPlay 
            muted 
            loop
            controls={false}
            onError={(e) => console.log('Video error:', e)}
          />
        </div>
      )}
    </div>

    <div className='w-15 h-16 mb-[-30] sm:w-32 sm:h-24 md:w-40 md:h-32 bg-black fixed z-[100] bottom-2 sm:bottom-20 right-2 sm:right-4 rounded-lg border-2 border-white overflow-hidden'>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className='w-full h-full object-cover'
        onLoadedMetadata={() => console.log('Video loaded')}
        onError={(e) => console.log('Video element error:', e)}
      />
      
      {!permissionGranted && (
        <div className='absolute inset-0 flex items-center justify-center bg-gray-800'>
          <span className='text-white text-xs text-center px-1'>
            {error ? `Error: ${error}` : 'Requesting camera...'}
          </span>
        </div>
      )}
    </div>

    <div className='flex-shrink-0 bg-black border-t border-gray-600'>
      <div className='flex justify-center items-center gap-2 sm:gap-5'>
        <div className='flex flex-col items-center py-2'>
          <button 
            onClick={() => setIsplaying(!isplaying)}
            className='text-white rounded-full hover:bg-gray-800 transition-colors'
          >
            {isplaying ? <FaPause className='text-white text-sm'/> : <FaPlay className='text-white text-sm'/>}
          </button>
          <span className='text-white text-xs'>{isplaying ? 'Pause' : 'Play'}</span>
        </div>
        
        <div className='flex flex-col items-center'>
          <button 
            onClick={isRecording ? stopRecording : startRecording}
            disabled={isAISpeaking || isLoading}
            className={`p-2 rounded-full transition-colors ${
              isAISpeaking || isLoading 
                ? 'bg-gray-600 cursor-not-allowed opacity-50' 
                : isRecording 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {isRecording ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                <path d="M10 12h4v2h-4z"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
              </svg>
            )}
          </button>
          <span className='text-white text-xs mt-1'>{isRecording ? 'Recording' : 'Mic'}</span>
        </div>
        
        <div className='flex flex-col items-center'>
          <button 
            onClick={() => speakText(currentQuestion)}
            disabled={isAISpeaking || !currentQuestion}
            className={`p-2 rounded-full transition-colors ${
              isAISpeaking || !currentQuestion
                ? 'bg-gray-600 cursor-not-allowed opacity-50 text-gray-400'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
          </button>
          <span className='text-white text-xs'>Repeat</span>
        </div>
        
        <div className='flex flex-col items-center'>
          <button className='text-white rounded-full hover:bg-gray-800 transition-colors'>
            <IoPeopleSharp className='text-white text-sm'/>
          </button>
          <span className='text-white text-xs'>People</span>
        </div>
        
        <div className='flex flex-col items-center'>
          <button className='text-white rounded-full hover:bg-gray-800 transition-colors'>
            <MdOutlineMarkChatUnread className='text-white text-sm'/>
          </button>
          <span className='text-white text-xs'>Chat</span>
        </div>
        
        <div className='flex flex-col items-center'>
          <button className='text-white rounded-full hover:bg-gray-800 transition-colors'>
            <IoShareOutline className='text-white text-sm'/>
          </button>
          <span className='text-white text-xs'>Share</span>
        </div>
      </div>
    </div>
  </div>
)
}

export default page