"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaStar,
  FaLaptopCode,
  FaYoutube,
  FaMedium,
} from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdLaptop } from "react-icons/io";
import { FaPercent } from "react-icons/fa";

import StarBorder from "../components/StarBorder";
import { CiSearch } from "react-icons/ci";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import CardComponent from "./(features)/home/components/Cards";
import Contentdispaly from "./(features)/discuss/components/Contentdispaly";
import { CiStar } from "react-icons/ci";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { staggerChildren: 0.2, delayChildren: 0.3 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

function page() {
  const [email, setEmail] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [challengeStep, setChallengeStep] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(0);
  const router = useRouter();

  const faqs = [
    {
      question: "what is test templets ?",
      answer:
        "Test templates are pre-defined sets of questions and scenarios designed to simulate real interview experiences based upon questions asked my compnies in coding and texhnical MCQ rounds in diffrent colleges and hackthons helping you practice and improve your interview skills.",
    },
    {
      question: "What is challnages",
      answer:
      "challnages are like all india level mock interview competetion where thousands of candidates  compite with each other to become unbetable and win exciting prizes and get hired by top compnies",
    },
    {
      question: "dissuion section",
      answer:
      "Read others interview exprnce and there solutions and connect with community ",

    },
    {
      question: "mentorship program",
      answer:
      "get mentorship form top compines working profeesions and get personal guidance and 1:1 session to crack your dream compnies",
    },
    {
      question: "how to make AI powerd interview ?",
      answer:
      "in just 3 steps creat personalised intevriew by selecting role , compnites and rounds and get AI powerd mock interview to crack your dream compnies",
    },
    {
      question: "how to prevent cheating in AI mock interview ?",
      answer:
      "we are using advanced proctoring techniques including webcam monitoring, screen recording, and AI-based behavior analysis to ensure the integrity of our AI mock interviews.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 2);
    }, 3000);

    const challengeInterval = setInterval(() => {
      setChallengeStep((prev) => (prev + 1) % 2);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(challengeInterval);
    };
  }, []);

  return (
    <>
      <main className="min-h-screen  bg-black w-full">
        <motion.div 
          className='bg-gradient-to-r from-[#ba3f16] to-[#d25a32] max-w-5xl h-8 flex items-center justify-center mx-auto rounded-full mb-3 text-white shadow-lg'
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className='text-center text-sm lg:text-base font-medium px-4'>
            Get <span className='bg-black/80 px-2 py-1 rounded-lg font-bold text-yellow-400'>55% OFF</span> on year end sale and crack interviews
          </h3>
        </motion.div>

        <motion.div
          className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border border-neutral-500/30 rounded-2xl flex justify-between items-center px-2 lg:ml-25 lg:mr-25 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="">
            <img
              src="/logo2.png"
              alt="Logo"
              width={100}
              height={40}
              className="w-40 h-12 lg:w-50 p-3 lg:h-16"
            />
          </div>

          <div className="flex gap-2 lg:gap-4 p-3 items-center">
            <motion.button
              type="button"
              className="px-2 lg:px-1 py-1 text-white font-semibold bg-transparent hover:text-[#d97757] transition-all duration-300 text-sm lg:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/login')}
            >
              Login
            </motion.button>

            <motion.div
              className="flex items-center gap-1 text-white border border-white rounded-lg px-2 lg:px-4 lg:py-1 py-1"
              whileHover={{ borderColor: "#d97757" }}
            >
              <FaGithub size={16} className="lg:w-5 lg:h-5" />
              <span className="text-xs lg:text-sm">200</span>
              <CiStar className="text-yellow-500 font-bold" />
            </motion.div>

            <motion.button
              type="button"
              className="
                px-4 lg:px-6 py-2 
                text-white font-semibold 
                bg-[#d25a32]
                rounded-lg 
                hover:bg-[#ce4d22] 
                transition-all duration-300
                shadow-[0_8px_16px_rgba(0,0,0,0.15),-8px_0_16px_rgba(0,0,0,0.15)]
                text-sm lg:text-base
              "
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 12px 24px rgba(0, 0, 0, 0.2), -10px 0 20px rgba(0, 0, 0, 0.18)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/singup')}
            >
              Signup
            </motion.button>
          </div>
        </motion.div>










        <div className="relative w-full h-250 lg:mt-[-50]  overflow-hidden ">
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white ">
              <motion.h2
                className="text-4xl lg:text-5xl font-bold mb-6 text-white px-4 lg:mt-17 mt-[-150] leading-snug lg:leading-snug"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Crack Your dream company{" "}
                <motion.span
                  className="text-4xl px-4 rounded-sm inline-block relative"
                  style={{ background: "#ce4d22" }}
                  whileHover={{
                    boxShadow: "0 8px 30px rgba(206, 77, 34, 0.6)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-sm opacity-0"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                    }}
                    whileHover={{
                      opacity: 1,
                      x: [-200, 200],
                      transition: { duration: 0.6 },
                    }}
                  />

                  <motion.span className="relative sm:mt-2 z-10 inline-block py-2  ">
                    Interview
                  </motion.span>
                </motion.span>
                <motion.span
                  className="text-[#d97757] block "
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  With AI Power
                </motion.span>
              </motion.h2>

              <motion.h2
                className="text-lg md:text-2xl  text-neutral-500 mb-20 max-w-3xl mx-auto px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Transform your interview skills with personalized AI coaching,
                real-time job
              </motion.h2>

              <motion.button
                className="px-8 md:px-10 py-3 md:py-4 bg-[#ce4d22] text-white font-bold text-base md:text-lg rounded-lg hover:bg-[#c86647] transition-all duration-300 shadow-xl hover:shadow-2xl mt-4 flex items-center justify-center gap-2 mx-auto"
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                onClick={() => router.push('/singup')}
              >
                Start Mock Interview
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FaArrowAltCircleRight className="text-xl" />
                </motion.div>
              </motion.button>




            <div className="lg:mt-10 mt-[-8] z-10 w-full max-w-8xl mx-auto border-b  border-neutral-500 overflow-hidden">
                <Image
                  src="/monilebanner2.png"
                  alt="home2"
                  width={2000}
                  height={1250}
                  className="w-full h-auto rounded-xl lg:hidden"
                />
                <Image
                  src="/homebanner.png"
                  alt="home1"
                  width={2000}
                  height={1250}
                  className="w-full h-auto rounded-xl hidden lg:block"
                />
              </div>

          
            </div>
          </div>
        </div>






        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto text-center lg:mt-20 mt-[-110]  px-4">
            <motion.h3
              className="text-3xl font-semibold text-white mb-4"
              variants={fadeInUp}
            >
              Revolutionize Your Interview Prep with AI
            </motion.h3>

            <motion.div
              className="flex justify-center items-center gap-12 mt-8 border   p-7 rounded-full shadow-xl border-gray-500"
              variants={scaleIn}
            >
              <motion.div
                className="text-white text-center"
                whileHover={{ scale: 1.1, color: "#d97757" }}
              >
                <HiUsers className="text-4xl mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-[#d97757] mb-1">
                  180+
                </h3>
                <p className="text-gray-300 text-sm">Active Users</p>
              </motion.div>

              <motion.div
                className="text-white text-center"
                whileHover={{ scale: 1.1, color: "#d97757" }}
              >
                <IoMdLaptop className="text-4xl mx-auto mb-2" 
                />
                <h3 className="text-2xl font-bold text-[#d97757] mb-1">
                  500+
                </h3>
                <p className="text-gray-300 text-sm">Mock Interviews</p>
              </motion.div>

              <motion.div
                className="text-white text-center"
                whileHover={{ scale: 1.1, color: "#d97757" }}
              >
                                <FaPercent className="text-4xl mx-auto mb-2" />

                <h3 className="text-2xl font-bold text-[#d97757] mb-1">95%</h3>
                <p className="text-gray-300 text-sm">Success Rate</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>



        <motion.div
          className="w-full py-3 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12 mt-20 lg:mt-40">
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-white mb-4"
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              Our Features
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Discover powerful tools designed to help you succeed in your
              interview journey
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-16 max-w-7xl mx-auto">
            <motion.div
              className="rounded-xl p-6 group lg:flex lg:items-center lg:gap-19"
              variants={slideInLeft}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <div className="lg:flex-1">
                <h3 className="text-xl lg:text-3xl font-bold text-white mb-3 lg:  bg-[#ce4d22]  p-3 rounded-full lg:mr-70 text-center lg:mt-[-170]">
                  Test templet
                </h3>
                <hr className="border-gray-600 mb-4" />
                <p className="text-neutral-500 mb-4">
                  give predefine tests Based on question ask by company in there OA test in diffrent colleges test and Hackthons etc.
                </p>

                
              </div>
              <motion.div
                className="relative h-48 lg:h-90 lg:w-150 overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/testetmpplet.png"
                  alt="Home Dashboard"
                  fill
                  className="object-fill border-6 border-[#dfa491] rounded-xl "
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="rounded-xl p-6 group lg:flex lg:items-center lg:gap-19 lg:flex-row-reverse"
              variants={slideInRight}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <div className="lg:flex-1">
                <h3 className="text-xl lg:text-3xl font-bold text-white mb-3 lg:  bg-[#ce4d22]  p-3 rounded-full lg:mr-70 text-center lg:mt-[-170]">
                  Interview Challenges
                </h3>
                <hr className="border-gray-600 mb-4" />
                <p className="text-neutral-500 mb-4">
                  Expernce real interview exprence and compete with others thousands of candidates and become unbetable
                </p>
              </div>




              <motion.div
                className="relative h-48 lg:h-90 lg:w-150 overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/intevriewchallnages.png"
                  alt="Coding Challenges"
                  fill
                  className="object-fill border-6 border-[#dfa491] rounded-xl "
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="rounded-xl p-6 group lg:flex lg:items-center lg:gap-19"
              variants={slideInLeft}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <div className="lg:flex-1">
                <h3 className="text-xl lg:text-3xl font-bold text-white mb-3 lg:w-100   bg-[#ce4d22]  p-3 rounded-full lg:mr-70 text-center lg:mt-[-170]">
                  Interview Experncess
                </h3>
                <hr className="border-gray-600 mb-4" />
                <p className="text-gray-400 mb-4">
                  Read others Interview exprencess and connect with community 
                </p>
              </div>
              <motion.div
                className="relative h-64 lg:h-96 lg:w-200 overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/post.png"
                  alt="Discussion Forum"
                  fill
                  className="object-fill border-6 border-[#dfa491] rounded-xl "
                />
              </motion.div>
            </motion.div>



            <motion.div
              className="rounded-xl p-6 group lg:flex lg:items-center lg:gap-19 lg:flex-row-reverse"
              variants={slideInRight}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <div className="lg:flex-1">
                <h3 className="text-xl lg:text-3xl font-bold text-white mb-3 lg:  bg-[#ce4d22]  p-3 rounded-full lg:mr-70 text-center lg:mt-[-170]">
                  1:1 Mentor
                </h3>
                <hr className="border-gray-600 mb-4" />
                <p className="text-neutral-500 mb-4">
                  Get personalized personal guidance from experienced professionals and
                  industry experts.
                </p>
              </div>
              <motion.div
                className="relative h-48 lg:h-90 lg:w-150 overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/mentor.png"
                  alt="1:1 Mentor"
                  fill
                  className="object-fill border-6 border-[#dfa491] rounded-xl "
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="rounded-xl p-6 group lg:flex lg:items-center lg:gap-19"
              variants={slideInLeft}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <div className="lg:flex-1">
                <h3 className="text-xl lg:text-3xl font-bold text-white mb-3 lg:  bg-[#ce4d22]  p-3 rounded-full lg:mr-70 lg:w-100 text-center lg:mt-[-170]">
                  AI Mock interview
                </h3>
                <hr className="border-gray-600 mb-4" />
                <p className="text-gray-400 mb-4">
                  creak ai powerded mock inteview off all rounds like coding , Techncial , techncial MCQ  for various roler and compnintes
                </p>
              </div>
              <motion.div
                className="relative h-64 lg:h-96 lg:w-200 overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/aimock.png"
                  alt="Create Interview"
                  fill
                  className="object-fill border-6 border-[#dfa491] rounded-xl "
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>








        <motion.div
          className="w-full flex flex-col items-center justify-center my-16 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <motion.h3
              className="text-4xl font-semibold text-white mb-2"
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              See in Action
            </motion.h3>
            <motion.p
              className="text-neutral-500 text-lg max-w-xl"
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Watch how our AI-powered platform transforms your interview
              preparation
            </motion.p>
          </div>
          <motion.div
            className="relative w-full max-w-4xl lg:w-3/4 xl:w-2/3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <iframe
              src="https://www.youtube.com/embed/MYYeCneMpKE"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="relative w-full h-56 md:h-72 lg:h-80 xl:h-96 rounded-xl shadow-2xl border border-gray-800"
            ></iframe>
          </motion.div>
          0
        </motion.div>






<div className="w-full  ">
  <div className="text-center mb-12 px-4">
<h1 className='font-bold text-4xl text-white'>Pricing of your future</h1>
<p className='text-neutral-500  text-2xl'>Select the best pricing plan that suits your needs</p>
  </div>

  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
    <div  className='border border-neutral-500 rounded-xl p-6 bg-black hover:shadow-lg  transition-all duration-300'>
      
        <h1 className='text-white  text-xl'>Basic Plan</h1>
        <p className='text-neutral-500 mb-2 '>Perfect for interview preparation beginners.</p>
        <h1 className='text-white text-5xl font-bold mb-5'>2$ <span className='text-neutral-500 text-xl'>/interview</span></h1>
<hr/>
       <span className='inline-flex items-center gap-2 mt-2 text-neutral-500'>
                <FaCheckCircle className='text-green-500 '/>get 5 AI mock interverive 

       </span>


       <span className='inline-flex items-center gap-2 mt-2 text-neutral-500'>
                <FaCheckCircle className='text-green-500 '/>get 2 Mentorship session 

       </span>


       <span className='inline-flex items-center gap-2 mt-2 text-neutral-500'>
                <FaCheckCircle className='text-green-500 '/> get 1 challnage access

       </span>


 <span className='inline-flex items-center gap-2 mt-2 text-neutral-500'>
                <FaCheckCircle className='text-green-500 '/> get access to all Test templets
       </span>



       <button className='px-5 py-3 w-full rounded-xl font-bold bg-[#c9613e] flex flex-rw items-center justify-center text-xl mt-3 '>Get  it now  <RiArrowRightDoubleLine className='hover:text-[#852e11] ml-4'/></button>

        </div>







           <div  className='border border-neutral-500 rounded-xl p-6 bg-black hover:shadow-lg  transition-all duration-300'>
      
        <h1 className='text-white font-bold text-xl bg-[#c9613e] rounded-xl w-30 text-center'>Pro Plan</h1>
        <p className='text-neutral-500 mb-2 '>Advanced features with mentorship support.</p>
        <h1 className='text-white text-5xl font-bold mb-5'>4$ <span className='text-neutral-500 text-xl'>/month</span></h1>
<hr/>


       <span className='inline-flex items-center gap-2 mt-2 text-neutral-500'>
                <FaCheckCircle className='text-green-500 '/>Everything in Basic Plan 

       </span>
       <span className='inline-flex items-center gap-2 mt-2 text-neutral-500'>
                <FaCheckCircle className='text-green-500 '/>get 5 AI mock interverive 

       </span>


       <span className='inline-flex items-center gap-2 mt-2 text-neutral-500'>
                <FaCheckCircle className='text-green-500 '/>get 6 Mentorship session
       </span>


             <span className='inline-flex items-center gap-2 mt-2 text-neutral-500'>
                <FaCheckCircle className='text-green-500 '/> Resume review

       </span>

 <span className='inline-flex items-center gap-2 mt-2 text-neutral-500'>
                <FaCheckCircle className='text-green-500 '/> Access to community

       </span>



       <span className='inline-flex items-center gap-2 mt-2 text-neutral-500'>
                <FaCheckCircle className='text-green-500 '/>get offline Mock interview 

       </span>


       
       <span className='inline-flex items-center gap-2 mt-2 text-neutral-500'>
                <FaCheckCircle className='text-green-500 '/>Get 5 challanges access 

       </span>


       <button className='px-5 py-3 w-full rounded-xl font-bold bg-[#c9613e] flex flex-rw items-center justify-center text-xl mt-3 '>Get  it now  <RiArrowRightDoubleLine className='hover:text-[#852e11] ml-4'/></button>

        </div>











    <div  className='border border-neutral-500 rounded-xl p-6 bg-black hover:shadow-lg  transition-all duration-300'>
      
        <h1 className='text-white  text-xl'>Premium Plan</h1>
        <p className='text-neutral-500 mb-2 '>Complete solution with unlimited access.</p>
        <h1 className='text-white text-5xl font-bold mb-5'>3$ <span className='text-neutral-500 text-xl'>/month</span></h1>
<hr/>
       <span className='inline-flex items-center gap-2 mt-2 text-neutral-500'>
                <FaCheckCircle className='text-green-500 '/>Everything in Basic Plang 
       </span>



       <span className='inline-flex items-center gap-2 mt-2 text-neutral-500'>
                <FaCheckCircle className='text-green-500 '/>get 3 more AI mock interverive 

       </span>


       <span className='inline-flex items-center gap-2 mt-2 text-neutral-500'>
                <FaCheckCircle className='text-green-500 '/>get 4 Mentorship session
       </span>


       
       <span className='inline-flex items-center gap-2 mt-2 text-neutral-500'>
                <FaCheckCircle className='text-green-500 '/>       Get 5 challanges access

       </span>



       <button className='px-5 py-3 w-full rounded-xl font-bold bg-[#c9613e] flex flex-rw items-center justify-center text-xl mt-3 '>Get  it now  <RiArrowRightDoubleLine className='hover:text-[#852e11] ml-4'/></button>

        </div>


  </div>
    </div>










<div className="w-full px-4 py-20">
  <div className="text-center mb-16">
    <motion.h3 className="text-3xl lg:text-5xl font-bold text-white mb-4" variants={fadeInUp}>
      Results
    </motion.h3>
    <motion.p 
      className="text-neutral-400 text-lg max-w-2xl mx-auto" 
      variants={fadeInUp}
      transition={{ delay: 0.1 }}
    >
      See what our community is talking about
    </motion.p>
  </div>

  <div className="  p-1 rounded-xl">
    <div className="flex flex-row gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory scroll-smooth">
      
      <div className="flex w-[300px] h-52 bg-black border-3 border-neutral-500 rounded-xl shadow-xl overflow-hidden snap-center min-w-[300px]">
        <div className="w-1/2 h-full">
          <iframe
            src="https://www.youtube.com/embed/iY3KWaR4iig?controls=0"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 p-2 flex flex-col justify-center items-center lg:mt-[-5]">
          <h2 className="text-white  font-bold">Shivam Sharma</h2>
          <p className="text-neutral-500 text-sm">@Google SDE-2</p>
          <p className="text-neutral-400 text-xs leading-relaxed mt-2">
            Cracked Google SDE-2 after 3 months of consistent practice! all credit goes to  my techer mentor shivam kumar
          </p>
        </div>
      </div>


         
      <div className="flex w-[300px] h-52 bg-black border-3 border-neutral-500 rounded-xl shadow-xl overflow-hidden snap-center min-w-[300px]">
        <div className="w-1/2 h-full">
          <iframe
            src="https://www.youtube.com/embed/iY3KWaR4iig?controls=0"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 p-2 flex flex-col justify-center items-center lg:mt-[-5]">
          <h2 className="text-white  font-bold">Shivam Sharma</h2>
          <p className="text-neutral-500 text-sm">@Google SDE-2</p>
          <p className="text-neutral-400 text-xs leading-relaxed mt-2">
            Cracked Google SDE-2 after 3 months of consistent practice! all credit goes to  my techer mentor shivam kumar
          </p>
        </div>
      </div>


      
         
      <div className="flex w-[300px] h-52 bg-black border-3 border-neutral-500 rounded-xl shadow-xl overflow-hidden snap-center min-w-[300px]">
        <div className="w-1/2 h-full">
          <iframe
            src="https://www.youtube.com/embed/iY3KWaR4iig?controls=0"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 p-2 flex flex-col justify-center items-center lg:mt-[-5]">
          <h2 className="text-white  font-bold">Shivam Sharma</h2>
          <p className="text-neutral-500 text-sm">@Google SDE-2</p>
          <p className="text-neutral-400 text-xs leading-relaxed mt-2">
            Cracked Google SDE-2 after 3 months of consistent practice! all credit goes to  my techer mentor shivam kumar
          </p>
        </div>
      </div>


         
      <div className="flex w-[300px] h-52 bg-black border-3 border-neutral-500 rounded-xl shadow-xl overflow-hidden snap-center min-w-[300px]">
        <div className="w-1/2 h-full">
          <iframe
            src="https://www.youtube.com/embed/iY3KWaR4iig?controls=0"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 p-2 flex flex-col justify-center items-center lg:mt-[-5]">
          <h2 className="text-white  font-bold">Shivam Sharma</h2>
          <p className="text-neutral-500 text-sm">@Google SDE-2</p>
          <p className="text-neutral-400 text-xs leading-relaxed mt-2">
            Cracked Google SDE-2 after 3 months of consistent practice! all credit goes to  my techer mentor shivam kumar
          </p>
        </div>
      </div>


         
      <div className="flex w-[300px] h-52 bg-black border-3 border-neutral-500 rounded-xl shadow-xl overflow-hidden snap-center min-w-[300px]">
        <div className="w-1/2 h-full">
          <iframe
            src="https://www.youtube.com/embed/iY3KWaR4iig?controls=0"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 p-2 flex flex-col justify-center items-center lg:mt-[-5]">
          <h2 className="text-white  font-bold">Shivam Sharma</h2>
          <p className="text-neutral-500 text-sm">@Google SDE-2</p>
          <p className="text-neutral-400 text-xs leading-relaxed mt-2">
            Cracked Google SDE-2 after 3 months of consistent practice! all credit goes to  my techer mentor shivam kumar
          </p>
        </div>
      </div>


         
      <div className="flex w-[300px] h-52 bg-black border-3 border-neutral-500 rounded-xl shadow-xl overflow-hidden snap-center min-w-[300px]">
        <div className="w-1/2 h-full">
          <iframe
            src="https://www.youtube.com/embed/iY3KWaR4iig?controls=0"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 p-2 flex flex-col justify-center items-center lg:mt-[-5]">
          <h2 className="text-white  font-bold">Shivam Sharma</h2>
          <p className="text-neutral-500 text-sm">@Google SDE-2</p>
          <p className="text-neutral-400 text-xs leading-relaxed mt-2">
            Cracked Google SDE-2 after 3 months of consistent practice! all credit goes to  my techer mentor shivam kumar
          </p>
        </div>
      </div>


         
      <div className="flex w-[300px] h-52 bg-black border-3 border-neutral-500 rounded-xl shadow-xl overflow-hidden snap-center min-w-[300px]">
        <div className="w-1/2 h-full">
          <iframe
            src="https://www.youtube.com/embed/iY3KWaR4iig?controls=0"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 p-2 flex flex-col justify-center items-center lg:mt-[-5]">
          <h2 className="text-white  font-bold">Shivam Sharma</h2>
          <p className="text-neutral-500 text-sm">@Google SDE-2</p>
          <p className="text-neutral-400 text-xs leading-relaxed mt-2">
            Cracked Google SDE-2 after 3 months of consistent practice! all credit goes to  my techer mentor shivam kumar
          </p>
        </div>
      </div>


      

      
      

      

      

      

    </div>
  </div>

  <div className="flex justify-between mt-6 px-2 md:hidden">
    <button className="p-3 bg-neutral-900/50 hover:bg-[#d97757]/20 border border-neutral-700 rounded-full text-neutral-400 hover:text-[#d97757] transition-all duration-300 shadow-lg">
      <MdKeyboardDoubleArrowLeft size={20} />
    </button>
    <button className="p-3 bg-neutral-900/50 hover:bg-[#d97757]/20 border border-neutral-700 rounded-full text-neutral-400 hover:text-[#d97757] transition-all duration-300 shadow-lg">
      <RiArrowRightDoubleLine size={20} />
    </button>
  </div>
</div>



















<motion.section className="w-full py-20 px-4" initial="initial" whileInView="whileInView">
  <div className="max-w-6xl mx-auto text-center">
    <motion.h1 
      className="text-4xl lg:text-5xl font-bold text-white mb-6" 
      variants={fadeInUp}
    >
      Top Companies
    </motion.h1>
    <motion.p 
      className="text-neutral-500 text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
      variants={fadeInUp}
      transition={{ delay: 0.1 }}
    >
      Trusted by engineers at the world's leading companies who use MockRound.AI to ace their interviews
    </motion.p>

    <div className="border border-neutral-500 p-6  flex justify-center lg:p-8 rounded-xl = backdrop-blur-sm">
      <div className="flex flex-row gap-4 lg:gap-8 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#d97757]/70 scrollbar-thumb-rounded scrollbar-track-neutral-900/50 snap-x snap-mandatory scroll-smooth">
        
        <motion.div 
          className="flex-none w-24 h-24 lg:w-28 lg:h-28 p-4  border rounded-xl   shadow-lg "
        >
          <Image
            src="/google.png"
            width={80}
            height={80}
            alt="Google"
            className="h-full w-full object-contain filter  "
          />
        </motion.div>
        <motion.div 
          className="flex-none w-24 h-24 lg:w-28 lg:h-28 p-4  border rounded-xl   shadow-lg "
        >
          <Image
            src="/meta.png"
            width={80}
            height={80}
            alt="Google"
            className="h-full w-full object-contain filter  "
          />
        </motion.div>


        <motion.div 
          className="flex-none w-24 h-24 lg:w-28 lg:h-28 p-4  border rounded-xl   shadow-lg "
        >
          <Image
            src="/amazone.png"
            width={80}
            height={80}
            alt="Google"
            className="h-full w-full object-contain filter  "
          />
        </motion.div>


        <motion.div 
          className="flex-none w-24 h-24 lg:w-28 lg:h-28 p-4  border rounded-xl   shadow-lg "
        >
          <Image
            src="/uber.png"
            width={80}
            height={80}
            alt="Google"
            className="h-full w-full object-contain filter  "
          />
        </motion.div>

        <motion.div 
          className="flex-none w-24 h-24 lg:w-28 lg:h-28 p-4  border rounded-xl   shadow-lg "
        >
          <Image
            src="/flipkart.png"
            width={80}
            height={80}
            alt="Google"
            className="h-full w-full object-contain filter  "
          />
        </motion.div>



      </div>
    </div>

    <div className="flex justify-between mt-8 px-2 lg:hidden">
      <motion.button 
        className="p-3 bg-neutral-900/50 hover:bg-[#d97757]/20 border border-neutral-700 rounded-full text-neutral-400 hover:text-[#d97757] transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MdKeyboardDoubleArrowLeft size={24} />
      </motion.button>
      <motion.button 
        className="p-3 bg-neutral-900/50 hover:bg-[#d97757]/20 border border-neutral-700 rounded-full text-neutral-400 hover:text-[#d97757] transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <RiArrowRightDoubleLine size={24} />
      </motion.button>
    </div>
  </div>
</motion.section>




        <motion.section
          className="py-10 bg-black sm:py-16 lg:py-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
              <motion.h3
                className="text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                Frequently Asked Questions
              </motion.h3>
              <motion.p
                className="max-w-xl mx-auto mt-2 text-base leading-relaxed text-gray-400"
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                Get answers to common questions about MockRound.AI
              </motion.p>
            </div>

            <div className="max-w-3xl mx-auto mt-8 space-y-3 md:mt-16 rounded-xl">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="transition-all rounded-xl duration-200  border border-gray-700 shadow-lg cursor-pointer "
                  whileHover={{ borderColor: "#d97757" }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    type="button"
                    className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                    onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                  >
                    <span className="flex text-lg font-semibold text-white">
                      {faq.question}
                    </span>
                    <motion.svg
                      className="w-6 h-6 text-gray-400"
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </button>
                  <motion.div
                    className={`px-4 pb-5 sm:px-6 sm:pb-6 ${
                      openFAQ === index ? "block" : "hidden"
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: openFAQ === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-300">{faq.answer}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-center text-gray-400 text-base mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Didn't find the answer you are looking for?
              <a
                href="#"
                className="font-medium text-[#ce4d22] transition-all duration-200 hover:text-[#c86647] focus:text-[#c86647] hover:underline ml-1"
              >
                Contact our support
              </a>
            </motion.p>
          </div>
        </motion.section>
        <motion.footer
          className=" border-t border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div>
                <Image
                  src="/logo2.png"
                  alt="MockRound.AI Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>

              <motion.div
                className="flex items-center gap-2"
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                {[
                  { href: "https://x.com/Vsion09", icon: FaTwitter },
                  {
                    href: "https://www.linkedin.com/in/shivam-kumar-321810324/",
                    icon: FaLinkedin,
                  },
                  { href: "https://github.com/shivamshrma09", icon: FaGithub },
                  { href: "https://medium.com/@vsion09", icon: FaMedium },
                  {
                    href: "https://www.youtube.com/@shivamsharmadev",
                    icon: FaYoutube,
                  },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.2, color: "#d97757" }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            <div className="mt-3 pt-3 border-t border-gray-700 text-center">
              <motion.p
                className="text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                © 2024 MockRound.AI. All rights reserved.
              </motion.p>
            </div>
          </div>
        </motion.footer>
      </main>
    </>
  );
}

export default page;
