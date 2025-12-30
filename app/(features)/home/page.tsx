"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import CardComponent from './components/Cards';
import { interviewDatabase } from '../../shared/data/interviewDatabase';
import { AppSidebar } from '../../../components/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '../../../components/ui/sidebar';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { VscFeedback } from "react-icons/vsc";
import dynamic from 'next/dynamic';

const Codinground = dynamic(() => import('../../shared/components/Codinground'), { ssr: false });
const MCQround = dynamic(() => import('../../shared/components/MCQround'), { ssr: false });
const Interviewround = dynamic(() => import('../../shared/components/Interviewround'), { ssr: false });
const Feedback = dynamic(() => import('../../shared/components/Feedback'), { ssr: false });

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentView, setCurrentView] = useState('home')
  const [selectedChallenge, setSelectedChallenge] = useState(null)
  const [showfeedback, setShowfeedback] = useState(false)
  const router = useRouter()
  
  const filteredInterviews = interviewDatabase.filter(item => 
    item.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.roundType.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleCardClick = (item) => {
    setSelectedChallenge(item)
    
    if (item.roundType.toLowerCase().includes('coding')) {
      setCurrentView('coding')
    } else if (item.roundType.toLowerCase().includes('mcq')) {
      setCurrentView('mcq')
    } else {
      setCurrentView('interview')
    }
  }

  const handleBackToHome = () => {
    setCurrentView('home')
    setSelectedChallenge(null)
  }

  if (currentView === 'coding') {
    return <Codinground questionsList={selectedChallenge?.questionsList} onBack={handleBackToHome} testdetails={selectedChallenge} />
  }
  
  if (currentView === 'mcq') {
    return <MCQround questionsList={selectedChallenge?.questionsList} onBack={handleBackToHome} testdetails={selectedChallenge} />
  }
  
  if (currentView === 'interview') {
    return <Interviewround 
      company_Name={selectedChallenge?.companyName} 
      role="Software Engineer" 
      experience={0} 
      roundType="Behavioral" 
      resumeData={null} 
    />
  }
  
  
  
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 bg-black min-h-screen">
        <div className='bg-black border-b border-gray-800 px-6 lg:ml-60 py-4 sticky top-0 z-30'>
          <div className='flex items-center gap-2'>
            <div className="bg-black">
              <SidebarTrigger className="text-white" />
            </div>


            <Link href='/home'>
              <Image
                src="https://ik.imagekit.io/qwzhnpeqg/mockround.ai%20imges%20public/logo2.png"
                alt="MockRound.AI Logo"
                width={10}
                height={10}
                loading="eager"
                className="object-contain    w-30 lg:hidden"
              />
            </Link>

            <div className='relative flex-1 max-w-lg lg:ml-110'>
              <CiSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl' />
              <input
                type='text'
                placeholder='Search by round or company name'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full bg-black border border-neutral-500/50 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/40'
              />
            </div>

            <div className='text-white p-2  rounded-lg cursor-pointer'>
              <FaUser className='text-xl' />
            </div>

            <div onClick={() => setShowfeedback(!showfeedback)}  className='text-white hover:scale-105 flex flex-row shadow-xl bg-black border-1 py-2 px-3 border-white   rounded-lg cursor-pointer  items-center gap-3'>
                            <h3 className='text-base font-bold hidden lg:block'>Feedback</h3>
              <VscFeedback className='text-xl text-[#9e563e]' />
            </div>
          </div>
        </div>

        {showfeedback && (
          <div className='flex flex-row mt-50  bg-black items-center lg:ml-120 justify-center z-100 absolute  lg:mt-50'>
            <Feedback />
            </div>
          
        )}

        <div className='p-6 bg-black'>
          <div className='lg:hidden space-y-6'>
            {filteredInterviews.map((item, index) => (
              <React.Fragment key={item.id}>
                <CardComponent
                  companyName={item.companyName}
                  logoSrc={item.logoSrc}
                  roundType={item.roundType}
                  questions={item.questions}
                  duration={item.duration}
                  successRate={item.successRate}
                  attempts={item.attempts}
                  description={item.description}
                  reviews={item.reviews}
                  questionsList={item.questionsList}
                  onClick={() => handleCardClick(item)}
                />
                {(index + 1) % 3 === 0 && (
                  <div className='bg-black border border-gray-800 rounded-xl p-4 cursor-pointer hover:border-gray-600 transition-colors'
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open('https://takeuforward.org/plus#pricing-section?source=sidepanel-ad', '_blank')
                      }
                    }}
                  >
                    <Image 
                      src='https://ik.imagekit.io/qwzhnpeqg/mockround.ai%20imges%20public/promotion.png' 
                      alt='Promotion' 
                      width={300} 
                      height={200} 
                      style={{ width: 'auto', height: 'auto' }}
                      className='rounded-lg object-cover w-full' 
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className='hidden lg:flex gap-4 lg:ml-60'>
            <div className='flex-1'>
              <div className='grid grid-cols-3 gap-4'>
                {filteredInterviews.map((item) => (
                  <CardComponent
                    key={item.id}
                    companyName={item.companyName}
                    logoSrc={item.logoSrc}
                    roundType={item.roundType}
                    questions={item.questions}
                    duration={item.duration}
                    successRate={item.successRate}
                    attempts={item.attempts}
                    description={item.description}
                    reviews={item.reviews}
                    questionsList={item.questionsList}
                    onClick={() => handleCardClick(item)}
                  />
                ))}
              </div>
            </div>

            <div className='w-72'>
              <div className='sticky top-28 bg-black rounded-xl p-2 cursor-pointer  transition-colors'
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.open('https://takeuforward.org/plus#pricing-section?source=sidepanel-ad', '_blank')
                  }
                }}
              >
                <Image 
                  src='https://ik.imagekit.io/qwzhnpeqg/mockround.ai%20imges%20public/promotion.png' 
                  alt='Promotion' 
                  width={240} 
                  height={300} 
                  style={{ width: 'auto', height: 'auto' }}
                  className='rounded-lg object-cover w-full mb-4' 
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </SidebarProvider>
  )
}

export default HomePage