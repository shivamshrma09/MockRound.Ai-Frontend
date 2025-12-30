"use client";
import React, { useState, useEffect } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { SlCalender } from "react-icons/sl";
import { fetchLiveChallenge, enrollInChallenge } from "../challenges/services/liveround.services";
import clsx from "clsx";
import {getquestions , getquestionstechnical } from "./services/getquestions.services"
import { useRouter } from 'next/navigation';
import checkParticipated from "./services/checkParticipation.services";
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  const { open, isMobile } = useSidebar();
  
  return (
    <header className='border-b bg-black w-full h-8 border-[#191919] flex items-center justify-between'>
      {(!open || isMobile) && (
        <div className='flex items-center ml-4 sm:ml-16 md:ml-64 mt-[-20px]'>
          <Link href='/home'>
            <Image
              src="https://ik.imagekit.io/qwzhnpeqg/mockround.ai%20imges%20public/logo2.png"
              alt="MockRound.AI Logo"
              width={150}
              height={10}
              className=""
            />
          </Link>
        </div>
      )}
    </header>
  );
}

function ChallengesPage() {
  const router = useRouter();
  const [confirmRegistration, setConfirmRegistration] = useState(false);
  const [liveChallengeData, setLiveChallengeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [enrolling, setEnrolling] = useState(false);
  const [enrollError, setEnrollError] = useState(null);

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const response = await fetchLiveChallenge();
        setLiveChallengeData(response.data);
      } catch (err) {
        setError(err.message || "Failed to load challenges");
      } finally {
        setLoading(false);
      }
    };
    fetchChallenge();
  }, []);

  const handleEnrollment = async () => {
    setEnrolling(true);
    setEnrollError(null);
    try {
      let challengeId = liveChallengeData?.registrationRound?.challengeId;
      if (!challengeId && liveChallengeData?.eligibleRounds?.length > 0) {
        challengeId = liveChallengeData.eligibleRounds[0].challengeId;
      }
      if (!challengeId) {
        throw new Error("Challenge ID not found");
      }
 
      challengeId = process.env.NEXT_PUBLIC_CHALLENGE_ID
      const result = await enrollInChallenge(challengeId);

      if (result.success) {
        const response = await fetchLiveChallenge();
        setLiveChallengeData(response.data);
        setConfirmRegistration(false);
        alert("Successfully enrolled in challenge!");
      } else {
        throw new Error(result.message || "Enrollment failed");
      }
    } catch (err) {
      setEnrollError(err.message || "Failed to enroll");
      console.error("Enrollment error:", err);
    } finally {
      setEnrolling(false);
    }
  };

  if (loading) return <p className="text-white text-center mt-20">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-20">Error: {error}</p>;

  const renderContent = () => {
    const message = liveChallengeData?.message;
    const action = liveChallengeData?.action;

    if (action === "JOIN_NOW") {
      const round = liveChallengeData?.registrationRound;
      return {
        title: round?.challengeName || "Challenge",
        company: round?.company_Name || "Unknown Company",
        role: round?.role || "Unknown Role",
        round: round?.roundName || "Registration Round",
        status: "Live",
        button: "Join Now",
        buttonColor: "bg-green-500 hover:bg-green-600",
        message: liveChallengeData?.details,
        testDetails: round?.testDetails || "No test details available",
        otherDetails: round?.otherDetails || "No other details available",
      };
    }

    if (action === "TRY_NEXT_TIME") {
      const round = liveChallengeData?.lastRegistrationRound;
      return {
        title: round?.challengeName || "Challenge",
        company: round?.company_Name || "Unknown Company",
        role: round?.role || "Unknown Role",
        round: round?.roundName || "Registration Round",
        status: "Closed",
        button: "Try Next Time",
        buttonColor: "bg-gray-500 cursor-not-allowed",
        message: liveChallengeData?.details,
        resultDate: round?.resultDate,
        isDisabled: true,
        testDetails: round?.testDetails || "No test details available",
        otherDetails: round?.otherDetails || "No other details available",
        action: "shshhs",
      };
    }

    if (action === "JOIN_ROUND") {
      const eligibleRounds = liveChallengeData?.eligibleRounds || [];
      const firstRound = eligibleRounds[0];
      return {
        title: firstRound?.challengeName || "Challenge",
        company: firstRound?.company_Name || "Unknown Company",
        role: firstRound?.role || "Unknown Role",
        round: firstRound?.roundName || "Round",
        status: "Live",
        button: firstRound?.roundName === "CODING_ROUND" ? "Start Coding Test" : "Join Round",
        buttonColor: "bg-blue-500 hover:bg-blue-600",
        message: liveChallengeData?.details,
        isDisabled: false,
        testDetails: firstRound?.testDetails || "No test details available",
        otherDetails: firstRound?.otherDetails || "No other details available",
      };
    }

    if (action === "ALREADY_REGISTERED") {
      const eligibleRounds = liveChallengeData?.eligibleRounds || [];
      const firstRound = eligibleRounds[0];
      return {
        title: firstRound?.challengeName || "Challenge",
        company: firstRound?.company_Name || "Unknown Company",
        role: firstRound?.role || "Unknown Role",
        round: firstRound?.roundName || "Round",
        status: "Live",
        button: "Already Registered",
        buttonColor: "bg-yellow-500 hover:bg-yellow-600",
        message: liveChallengeData?.details,
        isDisabled: true,
        testDetails: firstRound?.testDetails || "No test details available",
        otherDetails: firstRound?.otherDetails || "No other details available",
      };
    }

    if (action === "NOT_ELIGIBLE") {
      return {
        title: "Challenge",
        company: "Unknown Company",
        role: "Unknown Role",
        round: "Not Eligible",
        status: "Closed",
        button: "Not Eligible",
        buttonColor: "bg-red-500 cursor-not-allowed",
        message: liveChallengeData?.details || "You are not eligible for any rounds",
        isDisabled: true,
        testDetails: "No test details available",
        otherDetails: "No other details available",
      };
    }

    if (action === "NOT_SELECTED") {
      return {
        title: "Challenge",
        company: "Unknown Company",
        role: "Unknown Role",
        round: "Not Selected",
        status: "Closed",
        button: "Not Selected",
        buttonColor: "bg-red-500 cursor-not-allowed",
        message: liveChallengeData?.details || "You were not selected in previous round",
        isDisabled: true,
        testDetails: "No test details available",
        otherDetails: "No other details available",
      };
    }

    if (action === "SHOW_RESULTS") {
      const latestRound = liveChallengeData?.latestCompletedRound;
      return {
        title: latestRound?.challengeName || "Challenge",
        company: latestRound?.company_Name || "Unknown Company",
        role: latestRound?.role || "Unknown Role",
        round: latestRound?.roundName || "Completed Round",
        status: "Completed",
        button: "View Results",
        buttonColor: "bg-purple-500 hover:bg-purple-600",
        message: liveChallengeData?.details || "Check your results",
        resultDate: latestRound?.resultDate,
        isDisabled: false,
        testDetails: latestRound?.testDetails || "No test details available",
        otherDetails: latestRound?.otherDetails || "No other details available",
      };
    }

    return {
      title: "No Challenge",
      company: "",
      role: "",
      round: "Check back later",
      status: "Inactive",
      button: "Refresh",
      buttonColor: "bg-gray-500",
      message: "No challenges available",
      isDisabled: true,
      testDetails: "No test details available",
      otherDetails: "No other details available",
    };
  };

  const content = renderContent();

  const handleButtonClick = async () => {
    if (liveChallengeData?.action === "JOIN_NOW") {
      setConfirmRegistration(true);
      return;
    }

    if (liveChallengeData?.action === "JOIN_ROUND") {
      const roundName = liveChallengeData?.eligibleRounds?.[0]?.roundName;
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      
      if (roundName === "CODING_ROUND" || roundName === "coding_round") {
        router.push(`/challenges/coding/${user.email}/${user._id || user.id}`);
        return;
      }
      
      if (roundName === "TECHNICAL_MCQ" || roundName === "technical_mcq") {
        router.push(`/challenges/mcq/${user.email}/${user._id || user.id}`);
        return;
      }
      
      if (roundName === "HR" || roundName === "hr" || roundName === "behavioral" || roundName === "TECHNICAL_INTERVIEW" || roundName === "technical_interview") {
        router.push(`/challenges/interview/${user.email}/${user._id || user.id}`);
        return;
      }
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 bg-black min-h-screen">
        <div className="bg-black">
          <div className="flex items-center">
            <SidebarTrigger className="text-white lg:ml-60" />
          </div>
          <Navbar />
        </div>
        
        <div className="p-2 md:p-2 md:ml-60 ">
          <div className="max-w-7xl mx-auto ">
            <div className='bg-green-500/40 border border-green-500/20 rounded-lg p-2 mb-2 text-center text-green-400 font-semibold'>
<h2>Participate in Google software engineer internship challenge and compete with <span className='bg-black text-yellow-500 font-bold rounded-xl px-3 py-2'>150+</span> candidates and experience real interview processes</h2>
            </div>
            <div className="w-full mx-auto relative mb-8">
              <div className="w-full h-95 relative overflow-hidden rounded-lg">
                <img
                  src='https://ik.imagekit.io/qwzhnpeqg/mockround.ai%20imges%20public/challnage.png'
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="w-full max-w-md mx-auto border border-neutral-500/50 lg:h-90  bg-black rounded-lg overflow-hidden  relative shadow-lg ">
              <div className="w-full p-2 h-40 relative mb-4  ">
                <img 
                  src='https://ik.imagekit.io/qwzhnpeqg/mockround.ai%20imges%20publichttps://ik.imagekit.io/qwzhnpeqg/mockround.ai%20imges%20public/amazone.png'
                  alt="logo"
                  className="w-full p-2 h-40 object-cover border border-neutral-500/50 rounded-xl"
                />
                <SlCalender className="absolute top-4 right-4 text-gray-500/50 text-white text-xl" />
              </div>

              <div className="flex flex-col px-4 ">
                <h1 className="text-white text-xl font-bold">{content.title}</h1>
                <p className="text-gray-400 text-sm">{content.round}</p>

                <span
                  className={clsx(
                    "inline-block w-fit px-3 py-1 rounded-full text-xs font-bold mt-2",
                    content.status === "Live"
                      ? "bg-green-500 text-black"
                      : content.status === "Closed"
                      ? "bg-red-500 text-white"
                      : content.status === "Completed"
                      ? "bg-yellow-500 text-black"
                      : "bg-gray-500 text-white"
                  )}
                >
                  {content.status}
                </span>

                {content.resultDate && (
                  <p className="text-gray-300 text-sm mt-2">
                  <b>Result Date:</b> {new Date(content.resultDate).toLocaleDateString()}
                  </p>
                )}

                <p className="text-gray-300 text-sm mt-1"><b>{content.message}</b></p>

                <button
                  onClick={handleButtonClick}
                  className={clsx(
                    "px-4 py-2 font-bold rounded-lg mt-4 text-white",
                    content.buttonColor,
                    (enrolling || content.isDisabled) && "opacity-50 cursor-not-allowed"
                  )}
                  disabled={content.isDisabled || enrolling}
                >
                  {content.button}
                </button>
              </div>
            </div>
           
          </div>
        </div>
        
        {confirmRegistration && (
          <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-black rounded-xl border border-neutral-500 p-6 w-80">
              <h3 className="text-white font-bold text-lg">Confirm Registration</h3>
              <p className="text-gray-400 mt-2">{content.message}</p>
              {enrollError && <p className="text-red-500 text-sm mt-2">{enrollError}</p>}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={handleEnrollment}
                  disabled={enrolling}
                  className="flex-1 bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-gray-100 disabled:opacity-50"
                >
                  {enrolling ? "Enrolling..." : "Yes"}
                </button>
                <button
                  onClick={() => {
                    setConfirmRegistration(false);
                    setEnrollError(null);
                  }}
                  disabled={enrolling}
                  className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg font-bold disabled:opacity-50"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </SidebarProvider>
  );
}

export default ChallengesPage;