"use client";
import React, { useState, useEffect, useRef } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import MentorCard from "./components/MentorCard";
import Image from 'next/image';
import Link from 'next/link';
import { fetchMentors } from './services/mentorshipService';
import { RiGeminiFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { FaArrowUp, FaSearch, FaFilter } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

function Navbar() {
  const { open, isMobile } = useSidebar();
  
  return (
    <header className='border-b bg-black w-full h-4 border-[#191919] flex items-center justify-between'>
      {(!open || isMobile) && (
        <div className='flex items-center ml-4 sm:ml-19 md:ml-65 mt-[-50px]'>
          <Link href='/home'>
            <Image
              src="https://ik.imagekit.io/qwzhnpeqg/mockround.ai%20imges%20public/logo2.png"
              alt="MockRound.AI Logo"
              width={125}
              height={37}
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>
        </div>
      )}
    </header>
  );
}

export default function MentorshipPage() {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openai, setopenai] = useState(false);
  const [input, setInput] = useState(""); 
  const [messages, setMessages] = useState([]);
  const [enhanceText, setEnhanceText] = useState("");
  const [showEnhancer, setShowEnhancer] = useState(false);
  const [enhancedResult, setEnhancedResult] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    loadMentors();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const loadMentors = async () => {
    try {
      const result = await fetchMentors();
      setMentors(result.mentors || []);
    } catch (error) {
      console.error("Mentors load error:", error);
      setMentors([]);
    }
    setLoading(false);
  };

  const enhanceUserText = async (textToEnhance) => {
    if (!textToEnhance.trim()) return;

    try {
      const enhancePrompt = `You are a text enhancement AI. Take the user's text and:
1. Fix grammar and spelling
2. Improve structure and flow
3. Make it more professional and clear
4. Keep the original meaning
5. Format it nicely with proper paragraphs

User text: ${textToEnhance}`;

      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(enhancePrompt);
      const response = await result.response.text();
      
      setEnhancedResult(response);
    } catch (error) {
      console.error("Enhancement Error:", error);
      setEnhancedResult("Enhancement service temporarily unavailable. Please try again later.");
    }
  };

  const sendMessageToAI = async (inputText) => {
    if (!inputText.trim()) return;

    const userMessage = { text: inputText, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    setMessages(prev => [...prev, { text: "🤖 AI thinking...", sender: "ai" }]);

    try {
      const mentorSummary = mentors.slice(0, 5).map(mentor => ({
        id: mentor._id || mentor.id,
        name: mentor.name,
        expertise: mentor.expertise,
        experience: mentor.experience,
        bio: mentor.bio,
        rating: mentor.rating,
        pricePerHour: mentor.pricePerHour
      }));

      const systemPrompt = `You are MockRound.AI mentorship assistant.

Available mentors: ${JSON.stringify(mentorSummary)}.

MANDATORY FORMAT:
**FIRST LINE ONLY**: Top 2-3 mentors with links in this exact format:
"Mentor1 - [Profile](http://localhost:3000/mentorship/mentor1_id) | Mentor2 - [Profile](http://localhost:3000/mentorship/mentor2_id)"

Then give advice in Hindi.

Rules:
1. ALWAYS start with mentor links in first line
2. Use exact link format above
3. Hindi friendly response after links
4. Short & relevant`;

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(systemPrompt + "\n\nUser: " + inputText);
      const response = await result.response.text();

      setMessages(prev => {
        const updated = prev.slice(0, -1);
        updated.push({ text: response, sender: "ai" });
        return updated;
      });

    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => {
        const updated = prev.slice(0, -1);
        updated.push({ text: "API quota exceeded. Please try again later or check your billing settings.", sender: "ai" });
        return updated;
      });
    }
  };

  const renderMessage = (text) => {
    const linkRegex = /\[([^\]]+?)\]\((https?:\/\/[^\)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;
    let partIndex = 0;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(
          <span key={`text-${partIndex++}`}>{text.slice(lastIndex, match.index)}</span>
        );
      }

      parts.push(
        <a
          key={`link-${partIndex++}`}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline font-semibold bg-blue-500/10 px-1 py-px rounded transition-all inline-block hover:bg-blue-500/20"
        >
          {match[1]}
        </a>
      );

      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(
        <span key={`text-${partIndex++}`}>{text.slice(lastIndex)}</span>
      );
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 bg-black min-h-screen">
        <div className="bg-black">
          <div className="flex items-center">
            <SidebarTrigger className="text-white lg:ml-60" />
            <motion.div 
              className='flex ml-45 mt-5 flex-row items-center shadow-lg border-neutral-500 rounded-lg lg:ml-250 mt-3 border relative overflow-hidden cursor-pointer'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              onClick={() => setopenai(!openai)}
            >
              <p className='text-white px-3 py-2 text-sm'>Find perfect mentor</p>
              <motion.div
                animate={{ 
                  rotate: [0, 90],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <RiGeminiFill className='text-blue-500/80 text-2xl font-bold mr-2'/>
              </motion.div>
              
              <motion.div 
                className='absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500'
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scaleY: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className='absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent'
                animate={{
                  x: [-100, 300]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
            
            
          </div>
          <Navbar />
        </div>
        
        <div className="p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2 mt-4">
                Find Your Perfect Mentor
              </h1>
              <p className="text-gray-400 text-lg">
                Connect with experienced professionals to accelerate your career growth
              </p>
            </div>

            {showEnhancer && (
              <div 
                className='fixed top-24 right-4 w-130 z-50 rounded-xl shadow-xl flex flex-col h-150 p-4 bg-black border border-[#d97757]'
                suppressHydrationWarning
              >
                <h3 className='text-white text-lg font-semibold mb-3 text-center'>Text Enhancer</h3>
                
                <div className='flex flex-col h-full'>
                  <textarea 
                    value={enhanceText}
                    onChange={(e) => setEnhanceText(e.target.value)}
                    placeholder="Paste your text here to enhance..."
                    className='w-full h-32 rounded-lg text-white p-3 outline-none bg-neutral-900 border border-neutral-600 placeholder-neutral-400 resize-none'
                  />
                  
                  <button
                    onClick={() => enhanceUserText(enhanceText)}
                    className='mt-3 bg-[#d97757] hover:bg-[#b85d3a] text-white px-4 py-2 rounded-lg transition-colors font-medium'
                  >
                     Enhance Text
                  </button>
                  
                  {enhancedResult && (
                    <div className='mt-4 flex-1 overflow-y-auto'>
                      <h4 className='text-[#d97757] font-medium mb-2'>Enhanced Version:</h4>
                      <div className='bg-neutral-900 border border-[#d97757]/30 rounded-lg p-3 text-white text-sm leading-relaxed max-h-64 overflow-y-auto'>
                        {enhancedResult}
                      </div>
                      <button
                        onClick={() => navigator.clipboard.writeText(enhancedResult)}
                        className='mt-2 text-[#d97757] hover:text-[#b85d3a] text-sm underline'
                      >
                        📋 Copy Enhanced Text
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {openai && (
              <div 
                className='fixed top-24 lg:ml-100 w-130 z-50 rounded-xl shadow-xl flex flex-col h-150 p-2 bg-black border border-neutral-500'
                suppressHydrationWarning
              >
                <div className='flex w-full h-125 py-3 px-2 flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-900 pr-2'>
                  {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end mb-3' : 'justify-start mb-3'}`}>
                      <div className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-[#ce5026] text-white rounded-br-sm shadow-lg'
                          : 'bg-neutral-800/60 backdrop-blur-md text-neutral-100 rounded-bl-sm border border-neutral-700/50 shadow-md'
                      }`}>
                        {renderMessage(msg.text)}
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                <div className='w-full group hover:border-[#d97757] h-30 flex flex-wrap border border-neutral-500 rounded-xl relative bg-neutral-900/50'>
                  <input 
                    type='text' 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        sendMessageToAI(input);
                      }
                    }}
                    placeholder="Type your message..."
                    className='w-full h-full rounded-xl text-white px-5 pr-14 outline-none bg-transparent placeholder-neutral-400'
                  />
                  <FaArrowUp 
                    className='text-[#d97757] absolute right-2 top-1/2 -translate-y-1/2 text-3xl cursor-pointer hover:scale-110 transition-all hover:text-amber-400' 
                    onClick={() => sendMessageToAI(input)}
                  />
                </div>
              </div>
            )}

            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:ml-40">
                {mentors.map((mentor, index) => (
                  <MentorCard key={mentor.id || mentor._id || `mentor-${index}`} mentor={mentor} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
}
