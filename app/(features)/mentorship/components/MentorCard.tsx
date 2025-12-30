import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

interface MentorCardProps {
  mentor: {
    _id: string;
    name: string;
    profileImage: string;
    expertise: string[];
    experience: number;
    bio: string;
    pricePerHour: number;
  };
}

export default function MentorCard({ mentor }: MentorCardProps) {
  const router = useRouter();
  
  const handleConnect = () => {
    let userData = null;
    if (typeof window !== 'undefined') {
      try {
        const userStr = localStorage.getItem('user');
        userData = userStr ? JSON.parse(userStr) : null;
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'mentor_connect_click', {
        event_category: 'mentorship',
        event_label: mentor.name,
        mentor_id: mentor._id,
        mentor_name: mentor.name,
        mentor_price: mentor.pricePerHour,
        mentor_experience: mentor.experience,
        mentor_expertise: mentor.expertise.join(', '),
        user_id: userData?._id || userData?.id || 'anonymous',
        user_name: userData?.name || 'unknown',
        user_email: userData?.email || 'unknown',
        timestamp: new Date().toISOString(),
        value: mentor.pricePerHour
      });
    }
    
    router.push(`/mentorship/${mentor._id}`);
  };

  return (
    <div className="w-full max-w-sm mx-auto p-2 bg-black rounded-lg border border-[#1d1b1b] hover:border-[#555] flex flex-col">
      <div className="mb-4">
        <img
          src={mentor.profileImage || 'https://ik.imagekit.io/qwzhnpeqg/mockround.ai%20imges%20public/logo2.png'}
          alt={mentor.name}
          className="w-full h-40 sm:h-45 rounded-lg object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://ik.imagekit.io/qwzhnpeqg/mockround.ai%20imges%20public/logo2.png';
          }}
        />
      </div>

      <h3 className="text-white text-xl font-bold mb-2">{mentor.name}</h3>

      <p className="text-gray-300 text-sm mb-3 line-clamp-2">{mentor.bio}</p>

      <div className="flex flex-wrap gap-2 mb-3">
        {mentor.expertise.map((skill, index) => (
          <span key={index} className="bg-neutral-500 border border-neutral-500 text-white px-2 py-1 rounded text-xs">
            {skill}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-bold text-lg sm:text-xl">₹ {mentor.pricePerHour}</span>
        <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">New</span>
      </div>
      
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-2 gap-1 sm:gap-0">
        <span className="text-gray-500 text-xs">Duration: <span className="text-[#e29f89] font-semibold">60 mins</span></span>
        <span className="text-gray-500 text-xs">Experience: <span className="text-[#e29f89] font-semibold">{mentor.experience} years</span></span>
      </div>

      <div className="mt-auto">
        <button
          onClick={handleConnect}
          className="w-full bg-[#d97757] font-bold text-base sm:text-lg text-center hover:bg-[#b37e6d] text-white py-2 px-4 rounded-sm transition-all duration-300 font-semibold shadow-md hover:shadow-xl transform hover:scale-[1.02]"
        >
          Connect
        </button>
      </div>
    </div>
  );
}