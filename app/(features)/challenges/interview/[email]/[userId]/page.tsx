"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from 'next/navigation';
import checkParticipated from "../../../services/checkParticipation.services";
import { interviewApiService } from "../../../services/interviewApiService";
import { saveInterviewService } from "../../../services/saveInterviewService";
import Interviewround from "../../../components/Interviewround";

function InterviewRound() {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const [assessmentStarted, setAssessmentStarted] = useState(false);
  const [inputText, setInputText] = useState("");
  const [roundType, setRoundType] = useState("HR");

  const testdetails = {
    companyName: "Tech Company",
    roundType: "Interview Round",
    duration: "45 minutes"
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

        const challengeId = process.env.NEXT_PUBLIC_CHALLENGE_ID 
        let participationResult = await checkParticipated(challengeId, 2);
        
        const hasParticipated = typeof participationResult === 'object' 
          ? participationResult.hasParticipated 
          : participationResult;
        
        if (hasParticipated === false) {
          setVerified(true);
        } else {
          router.push('/challenges');
        }
      } catch (error) {
        console.error('Access verification failed:', error);
        router.push('/challenges');
      } finally {
        setLoading(false);
      }
    };

    verifyAccess();
  }, [params, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-white">Verifying access...</div>
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

  if (!assessmentStarted) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8 rounded-lg border">
          <h1 className="text-3xl font-bold mb-6 text-[#d97757]">Interview Ready</h1>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-400">Company:</span>
              <span className="text-white font-semibold">{testdetails?.companyName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Round:</span>
              <span className="text-white font-semibold">{roundType} Round</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Questions:</span>
              <span className="text-white font-semibold">14</span>
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
                <span className="text-gray-300 text-sm">Camera access for interview (Required)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-300 text-sm">Microphone access for recording (Required)</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">We are trying to give you same environment like real interview round</p>
          </div>
          <p className='text-white mb-2'>Type "start" to begin {roundType.toLowerCase()} interview</p>
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
    <Interviewround 
      systemTrue={true}
      company_Name="Tech Company"
      role="Software Engineer"
      experience={2}
      roundType={roundType}
      resumeData={null}
      interviewApiService={interviewApiService}
      saveInterviewService={saveInterviewService}
    />
  );
}

export default InterviewRound;