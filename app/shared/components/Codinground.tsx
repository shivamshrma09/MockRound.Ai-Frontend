"use client";
import React, { useState, useEffect, useRef } from "react";
import { TfiTimer } from "react-icons/tfi";
import {
  MdFullscreen,
  MdFullscreenExit,
  MdVideoCall,
} from "react-icons/md";
import { TbBrandCpp } from "react-icons/tb";
import { FaJs, FaPython, FaJava } from "react-icons/fa";
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";
import { runTestCases } from '../services/judge0.service';
import { submitCodeForAnalysis, CodeSubmission } from '../services/codeAnalysis.service';

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import { lineNumbers } from "@codemirror/view";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoPlay } from "react-icons/io5";

function CodingEnviorment({ questionsList, onBack, testdetails }) {
  const [assessmentStarted, setAssessmentStarted] = useState(false);
  const [inputText, setInputText] = useState('');
  const [showFullscreenPrompt, setShowFullscreenPrompt] = useState(false);
  const [permissionError, setPermissionError] = useState('');
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  const [timer, setTimer] = useState(7200);
  const [selectedLang, setSelectedLang] = useState("JavaScript");
  const [activeTab, setActiveTab] = useState("description");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [font, setFont] = useState(15);

  const [fullscreen, setFullscreen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [savedCodes, setSavedCodes] = useState({});
  const [numberoftest, setNumberoftest] = useState(0);
  const [selectedTestCase, setSelectedTestCase] = useState(0);
  const [testResults, setTestResults] = useState({});

  const videoButtonRef = useRef(null);
  const videoFloatingRef = useRef(null);

  const [orientation, setOrientation] = useState(
    typeof window !== 'undefined' && window.matchMedia("(orientation: portrait)").matches ? "portrait" : "landscape"
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia("(orientation: portrait)");
      const handleChange = (e) => {
        setOrientation(e.matches ? "portrait" : "landscape");
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  const interviewers = [
    "Rajesh Kumar",
    "Vikram Patel",
    "Arjun Mehta",
    "Rohit Agarwal",
  ];

  const videoNumber = Math.floor(Math.random() * 4) + 1;
  const interviewerName = interviewers[videoNumber - 1];

  useEffect(() => {
    if (questionsList && questionsList[currentQuestion - 1]) {
      const key = `q${currentQuestion}_${selectedLang}`;
      if (savedCodes[key]) {
        setCode(savedCodes[key]);
      } else {
        const question = questionsList[currentQuestion - 1];
        const codeObj = question.defaultCode?.find(
          (item) => item.language === selectedLang
        );
        setCode(codeObj ? codeObj.code : "");
      }
    }
  }, [currentQuestion, selectedLang, questionsList, savedCodes]);

  useEffect(() => {
    setSelectedTestCase(null);
  }, [currentQuestion]);

  useEffect(() => {
    const currentResults = getCurrentTestResults();
    if (currentResults.length > 0 && !selectedTestCase) {
      setSelectedTestCase(1);
    }
  }, [testResults, currentQuestion]);

  useEffect(() => {
    if (!assessmentStarted) return;
    
    const intervalId = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [assessmentStarted]);

  const handleAutoSubmit = async () => {
    saveCurrentCode();
    
    try {
      const submissions: CodeSubmission[] = questionsList.map((question, index) => {
        const questionNum = index + 1;
        const codeKey = `q${questionNum}_${selectedLang}`;
        const userCode = savedCodes[codeKey] || question.defaultCode?.find(dc => dc.language === selectedLang)?.code || '';
        
        return {
          question: question.title,
          user_code: userCode,
          correct_solution: question.solution || '',
          language: selectedLang.toLowerCase(),
          difficulty: question.difficulty?.toLowerCase() || 'medium'
        };
      });
      
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const userId = user._id;
      
      if (userId) {
        await submitCodeForAnalysis(submissions, userId);
        alert('Time up! Assessment auto-submitted successfully!');
      } else {
        alert('Time up! Assessment completed.');
      }
      
      if (onBack) onBack();
    } catch (error) {
      console.error('Auto-submission error:', error);
      alert('Time up! Assessment completed but submission failed.');
      if (onBack) onBack();
    }
  };

  const saveCurrentCode = () => {
    if (code.trim()) {
      const key = `q${currentQuestion}_${selectedLang}`;
      setSavedCodes((prev) => ({ ...prev, [key]: code }));
    }
  };

  const getCurrentTestResults = () => {
    return testResults[currentQuestion] || [];
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

  if (!questionsList) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-2xl mb-4">No questions available</h2>
          <button onClick={onBack} className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
            Back to Home
          </button>
        </div>
      </div>
    );
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
        <div className="text-center max-w-lg mx-auto p-8 rounded-lg ">
          <div className="mb-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-white text-xl">Step</span>
              <div className="bg-[#d97757] font-bold text-2xl w-10 h-10 rounded-full text-white flex items-center justify-center">
                2
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-bold mb- text-[#d97757]">Required Permissions</h1>
                      <p className="text-gray-400 text-lg mb-8">Grant necessary permissions to proceed</p>


          <div className="text-left space-y-3 mb-6">
            <div className="flex items-center ml-12 gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-gray-300 ">Camera access for proctoring (Required)</span>
            </div>
            <div className="flex items-center gap-3 ml-12">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-gray-300">Fullscreen mode for focus (Required)</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-6">We are trying to give you same enviorment like real coding round</p>
          
          {permissionError && (
            <div className="bg-red-900/50 border border-red-500 rounded p-3 mb-4">
              <p className="text-red-300 text-sm">{permissionError}</p>
            </div>
          )}
          
          <div className="space-y- flex gap-2">
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
      <div className="bg-black min-h-screen flex items-center justify-center  ">
        <div className="text-center max-w-md mx-auto p-8 rounded-lg   ">
          <div className="mb-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-white text-sm">Step</span>
              <div className="bg-[#d97757] font-bold text-2xl w-10 h-10 rounded-full text-white flex items-center justify-center">
                1
              </div>
            </div>
          </div>
            
          <h1 className="text-2xl font-bold mb-1 text-[#d97757]">Ready to Begin?</h1>
          <p className="text-gray-400 text-sm mb-4">Prepare for your coding assessment</p>

          <div className="space-y-3 mb-6 text-left">
            <div className="flex justify-between py-2">
              <span className="text-gray-500">Company:</span>
              <span className="text-white font-semibold">{testdetails?.companyName}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-500">Round:</span>
              <span className="text-white font-semibold">{testdetails?.roundType}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-500">Questions:</span>
              <span className="text-white font-semibold">{questionsList.length}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-500">Duration:</span>
              <span className="text-white font-semibold">{testdetails?.duration}</span>
            </div>
          </div>
          <p className='text-white mb-2'>Type "start" to give mock test </p>
          <div className="gap-2 flex ">
            

            <input 
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type here..."
              className="w-70 px-4 py-2 bg-black border border-gray-600 rounded text-white focus:outline-none focus:border-[#d97757]"
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

  const getTotalQuestions = () => questionsList.length;
  const getCurrentQuestion = () => questionsList[currentQuestion - 1];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-400";
      case "Medium":
        return "text-yellow-400";
      case "Hard":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  const languageExtensions = {
    JavaScript: [javascript(), lineNumbers()],
    Python: [python(), lineNumbers()],
    Java: [java(), lineNumbers()],
    "C++": [cpp(), lineNumbers()],
    C: [cpp(), lineNumbers()],
  };

  const handelquestionformard = () => {
    if (currentQuestion < getTotalQuestions()) {
      saveCurrentCode();
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handelquestionbackeward = () => {
    if (currentQuestion > 1) {
      saveCurrentCode();
      setCurrentQuestion(currentQuestion - 1);
    }
  };



  const minute = Math.floor(timer / 60);
  const second = timer % 60;

  const getLanguageIcon = () => {
    switch (selectedLang) {
      case "JavaScript":
        return <FaJs className="text-yellow-400" size={16} />;
      case "Python":
        return <FaPython className="text-blue-400" size={16} />;
      case "Java":
        return <FaJava className="text-red-500" size={16} />;
      case "C++":
        return <TbBrandCpp className="text-blue-500" size={16} />;
      case "C":
        return <TbBrandCpp className="text-green-500" size={16} />;
      default:
        return <FaJs className="text-yellow-400" size={16} />;
    }
  };

  const handleLanguageChange = (lang) => {
    saveCurrentCode();
    setSelectedLang(lang);
  };

  const handleCodeChange = (value) => {
    setCode(value);
    clearTimeout((window as any).autoSaveTimeout);
    (window as any).autoSaveTimeout = setTimeout(() => {
      const key = `q${currentQuestion}_${selectedLang}`;
      setSavedCodes((prev) => ({ ...prev, [key]: value }));
    }, 2000);
  };



  const runCode = async () => {
    if (!code.trim()) {
      setOutput("Please write some code first!");
      return;
    }
    setActiveTab("results");
    setLoading(true);
    setOutput("Running code...");

    const testCases = getCurrentQuestion()?.testCases || [];
    setNumberoftest(testCases.length);
    
    try {
      const detailedResults = await runTestCases(code, selectedLang, testCases);
      
      const results = detailedResults.map(result => 
        `Test Case ${result.caseNumber}: ${result.output} | Expected: ${result.expected} | ${result.status}`
      );

      setOutput(results.join("\n"));
      setTestResults(prev => ({ ...prev, [currentQuestion]: detailedResults }));
    } catch (error) {
      console.error("Error running code:", error);
      setOutput(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black min-h-screen w-full">
      <div className="border-b border-[#191919] h-12 px-4">
        <div className="flex items-center h-full">
          <div className="flex items-center gap-2 text-white">
            <TfiTimer className="text-[#d97757]" size={20} />
            <span>{Math.floor(timer/3600)}h {Math.floor((timer%3600)/60)}m {timer%60}s</span>

            <IoIosArrowBack
              className={
                currentQuestion === 1
                  ? "hidden"
                  : "block cursor-pointer hover:text-[#d97757]"
              }
              onClick={handelquestionbackeward}
            />
            <IoIosArrowForward
              className={
                currentQuestion === getTotalQuestions()
                  ? "hidden"
                  : "block cursor-pointer hover:text-[#d97757]"
              }
              onClick={handelquestionformard}
            />
          </div>
          <div className="ml-auto flex items-center gap-3">
            <div className="flex items-center gap-2 text-white">
              {getLanguageIcon()}
              <select
                value={selectedLang}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="bg-[#191919] text-white border border-[#333] rounded px-2 py-1 text-sm"
              >
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="C++">C++</option>
                <option value="C">C</option>
              </select>
            </div>



            <BiSolidUpvote
              onClick={() => font <= 25 && setFont(font + 5)}
              className="text-white cursor-pointer"
            />
            <BiSolidDownvote
              onClick={() => font >= 20 && setFont(font - 5)}
              className="text-white cursor-pointer"
            />

            <button
              onClick={() => setFullscreen(!fullscreen)}
              className="text-white hover:text-[#d97757] transition-colors"
            >
              {fullscreen ? (
                <MdFullscreenExit size={20} />
              ) : (
                <MdFullscreen size={20} />
              )}
            </button>

      

            <button
              ref={videoButtonRef}
              onClick={() => setVideoOpen(!videoOpen)}
              className="text-white hover:text-[#d97757] transition-colors"
              title="Toggle Video Help"
            >
              <MdVideoCall size={20} />
            </button>

            <button
              className="bg-[#d97757] hover:bg-[#c86a47] text-white border border-[#d97757] rounded px-3 py-1 transition-colors flex items-center gap-1 disabled:opacity-50"
              title="Run Code"
              onClick={runCode}
              disabled={loading}
              
            >
              <IoPlay size={16} />
              <span className="text-sm font-medium">
                {loading ? "Running..." : "Run"}
              </span>
            </button>

            {currentQuestion === getTotalQuestions() && (
              <button
                onClick={() => setShowSubmitConfirm(true)}
                className="bg-green-600 hover:bg-green-700 text-white border border-green-600 rounded px-3 py-1 transition-colors flex items-center gap-1"
                title="Submit Assessment"
              >
                <span className="text-sm font-medium">Submit</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-48px)]">
        <div
          className={
            fullscreen
              ? "hidden"
              : "w-16 bg-[#0a0a0a] border-r border-[#191919] flex flex-col items-center py-4 gap-3"
          }
        >
          {questionsList.map((question, index) => (
            <button
              key={index + 1}
              onClick={() => {
                saveCurrentCode();
                setCurrentQuestion(index + 1);
              }}
              className={`w-10 h-10 rounded-full border-2 text-sm font-medium transition-colors ${
                currentQuestion === index + 1
                  ? "bg-[#d97757] border-[#d97757] text-white"
                  : "border-gray-500 text-gray-400 hover:border-[#d97757] hover:text-white"
              }`}
              title={question?.title}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div
          className={
            fullscreen
              ? "hidden"
              : "w-2/5 border-r border-[#191919] flex flex-col"
          }
        >
          <div className="flex border-b border-[#191919]">
            <button
              onClick={() => setActiveTab("description")}
              className={`px-4 py-2 text-sm ${
                activeTab === "description"
                  ? "text-[#d97757]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("testcases")}
              className={`px-4 py-2 text-sm ${
                activeTab === "testcases"
                  ? "text-[#d97757]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Test Cases
            </button>
            <button
              onClick={() => setActiveTab("results")}
              className={`px-4 py-2 text-sm ${
                activeTab === "results"
                  ? "text-[#d97757]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Test Results
            </button>
          </div>

          <div
            className="h-full p-4 text-white overflow-y-scroll"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {activeTab === "description" && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-xl font-bold">
                    {getCurrentQuestion()?.title || "Problem Title"}
                  </h2>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(
                      getCurrentQuestion()?.difficulty
                    )}`}
                  >
                    {getCurrentQuestion()?.difficulty || "Easy"}
                  </span>
                </div>

                <p className="mb-6 text-gray-300 leading-relaxed">
                  {getCurrentQuestion()?.description ||
                    "Problem description will appear here..."}
                </p>

                {getCurrentQuestion()?.examples && (
                  <div className="space-y-4">
                    {getCurrentQuestion().examples.map((example, index) => (
                      <div key={index} className="p-4 rounded-lg">
                        <p className="font-semibold text-[#d97757] mb-2">
                          Example {index + 1}:
                        </p>
                        <div className="space-y-1 text-sm">
                          <p>
                            <span className="font-medium">Input:</span>{" "}
                            {example.input}
                          </p>
                          <p>
                            <span className="font-medium">Output:</span>{" "}
                            {example.output}
                          </p>
                          {example.explanation && (
                            <p>
                              <span className="font-medium">Explanation:</span>{" "}
                              {example.explanation}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {getCurrentQuestion()?.constraints && (
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3 text-[#d97757]">
                      Constraints:
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      {getCurrentQuestion().constraints.map(
                        (constraint, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#d97757] mr-2">•</span>
                            {constraint}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {activeTab === "testcases" && (
              <div>
                <h3 className="text-lg font-bold mb-4">Test Cases</h3>
                <div className="space-y-3">
                  {getCurrentQuestion()?.testCases?.map((testCase, index) => (
                   
                    <div key={index} className={index <= 2? "p-3 rounded" : "hidden"} >
                      <p className="font-semibold text-[#d97757] mb-2">
                        Test Case {index + 1}:
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Input:</span>{" "}
                        {testCase.input}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Expected:</span>{" "}
                        {testCase.expected}
                      </p>
                    </div>
                  )) || <p>No test cases available</p>}
                </div>
              </div>
            )}

            {activeTab === "results" && (
              <div>
                <h3 className="text-lg font-bold mb-4">Test Results</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {getCurrentQuestion()?.testCases?.map((test, idx) => {
                    if(idx >= 3) {
                        return 
                    }
                    const currentResults = getCurrentTestResults();
                    const result = currentResults.find(r => r.caseNumber === idx + 1);
                    return (
                      <button 
                        className={`px-3 py-1 rounded-full  text-sm font-medium transition-colors
                           ${selectedTestCase === idx + 1 ? 'bg-[#d6876c]' : 'bg-black'}` }
                        key={idx} 
                        onClick={() => setSelectedTestCase(idx + 1)}
                      >
                        Case {idx + 1} {result?.isCorrect ? '✅' : result ? '❌' : ''}
                      </button>
                    );
                  }) || <p className="text-gray-400">No test cases available</p>}
                </div>

                {selectedTestCase && getCurrentTestResults().length > 0 && (
                  <div className=" rounded-lg p-4 border border-gray-700">
                    {(() => {
                      const currentResults = getCurrentTestResults();
                      const result = currentResults.find(r => r.caseNumber === selectedTestCase);
                      if (!result) return <p className="text-gray-400">No result found</p>;
                      
                      return (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className='px-2 py-1 rounded text-sm font-medium'>
                            </span>
                          </div>
                          
                          <div className="space-y-2 text-sm">
                            <div>
                              <span className="text-gray-500 font-medium">Input:</span>
                              <div className="text-white p-2 rounded mt-1 font-mono">
                                {result.input}
                              </div>
                            </div>
                            
                            <div>
                              <span className="text-gray-500 font-medium">Output:</span>
                              <div className="p-2 rounded mt-1 font-mono text-white">
                                {result.output}
                              </div>
                            </div>
                            
                            <div>
                              <span className="text-gray-500 font-medium">Expected:</span>
                              <div className="p-2 rounded mt-1 font-mono text-white">
                                {result.expected}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}
                
                {!selectedTestCase && getCurrentTestResults().length > 0 && (
                  <p className="text-gray-400 text-center py-8">Click on a test case button to view details</p>
                )}
                
                {getCurrentTestResults().length === 0 && (
                  <p className="text-gray-400 text-center py-8">Run your code to see test results</p>
                )}
              </div>
            )}
          </div>
        </div>

        <div
          className={
            fullscreen
              ? "w-full bg-black flex flex-col"
              : "w-3/5 bg-black flex flex-col"
          }
        >
          <div
            className="flex-1 overflow-y-scroll mb-10"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <CodeMirror
              value={code}
              height="100%"
              extensions={languageExtensions[selectedLang]}
              onChange={handleCodeChange}
              theme="dark"
              className="[&_.cm-editor]:!bg-black [&_.cm-content]:!bg-black [&_.cm-gutter]:!bg-black"
              style={{
                backgroundColor: "#000000",
                fontSize: font + "px",
              }}
            />
          </div>
        </div>
      </div>

      {videoOpen && (
        <div
          ref={videoFloatingRef}
          className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-2xl fixed top-16 right-4"
          style={{ width: 320, height: 200, zIndex: 1000 }}
        >
          <div className="bg-gray-800 px-3 py-2 flex items-center justify-between">
            <span className="text-white text-sm font-medium">
              {interviewerName}
            </span>
            <button
              onClick={() => setVideoOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              ×
            </button>
          </div>
          <video
            width="320"
            height="160"
            autoPlay
            muted
            loop
            className="w-full"
          >
            <source src={`/${videoNumber}video.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {showSubmitConfirm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-lg border border-gray-700 p-6 max-w-md mx-4">
            <h3 className="text-xl font-bold text-white mb-4">Submit Assessment?</h3>
            <p className="text-gray-300 mb-6">Are you sure you want to submit your assessment? You won't be able to make changes after submission.</p>
            <div className="flex gap-4">
              <button
                onClick={async () => {
                  saveCurrentCode();
                  setLoading(true);
                  
                  try {
                    const submissions: CodeSubmission[] = questionsList.map((question, index) => {
                      const questionNum = index + 1;
                      const codeKey = `q${questionNum}_${selectedLang}`;
                      const userCode = savedCodes[codeKey] || question.defaultCode?.find(dc => dc.language === selectedLang)?.code || '';
                      
                      return {
                        question: question.title ,
                        user_code: userCode,
                        correct_solution: question.solution || '',
                        language: selectedLang.toLowerCase(),
                        difficulty: question.difficulty?.toLowerCase() || 'medium'
                      };
                    });
                    
                    const user = JSON.parse(localStorage.getItem('user') || '{}');
                    const userId = user._id;
                    
                    if (!userId) {
                      alert('Please login to get detail analysis.');
                      return;
                    }
                    
                    const result = await submitCodeForAnalysis(submissions, userId);
                    
                    if (result.success) {
                      alert('Assessment submitted successfully!\nYour code analysis is being processed.\nYou will receive the detailed report via email shortly.');
                      setShowSubmitConfirm(false);
                      if (onBack) onBack();
                    } else {
                      alert('Submission failed: ' + result.message);
                    }
                  } catch (error) {
                    console.error('Submission error:', error);
                    alert('Submission failed. Please try again.');
                  } finally {
                    setLoading(false);
                  }
                }}
                disabled={loading}
                className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded font-semibold disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Yes, Submit'}
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

export default CodingEnviorment;