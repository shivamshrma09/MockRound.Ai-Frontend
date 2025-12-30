"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { 
  fetchMentorById, 
  fetchAvailableSlots, 
  bookMentorSlot, 
  getUserInfo, 
  generateDates 
} from '../services/mentorshipService';

export default function MentorDetailPage() {
  const params = useParams();
  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [booking, setBooking] = useState(false);

  useEffect(() => {
    if (selectedDate && params.id) {
      loadAvailableSlots();
    }
  }, [selectedDate, params.id]);

  const loadAvailableSlots = async () => {
    setSlotsLoading(true);
    setSelectedTime("");  
    
    const dateObj = generateDates().find(d => d.date === selectedDate);
    const dayName = dateObj?.day || 'monday';
    
    const result = await fetchAvailableSlots(params.id, dayName, selectedDate);
    setAvailableSlots(result.availableSlots);
    setSlotsLoading(false);
  };

  useEffect(() => {
    if (params.id) {
      loadMentor(params.id);
    }
  }, [params.id]);

  const loadMentor = async (id) => {
    const result = await fetchMentorById(id);
    setMentor(result.mentor);
    setLoading(false);
  };

  const handleBookSlot = async () => {
    if (!selectedDate || !selectedTime) return;
    
    setBooking(true);
    
    const dateObj = generateDates().find(d => d.date === selectedDate);
    const dayName = dateObj?.day || 'monday';
    const userInfo = getUserInfo();
    
    const result = await bookMentorSlot(params.id, dayName, selectedDate, selectedTime, userInfo);
    
    if (result.success) {
      alert('Slot booked successfully!');
      setSelectedDate("");
      setSelectedTime("");
      setAvailableSlots([]);
    } else {
      alert(result.message || 'Booking failed!');
    }
    
    setBooking(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading mentor details...</div>
      </div>
    );
  }

  if (!mentor) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Mentor not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="bg-black border-b border-gray-800 px-6 py-4 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Image
            src="/logo2.png"
            alt="MockRound.AI Logo"
            width={120}
            height={40}
            className="object-contain"
          />
          <h1 className="text-xl font-semibold text-white">Confirm Booking</h1>
        </div>
      </div>
      
      <div className="p-4">
        <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">{mentor.name}</h1>
          <h2 className="text-xl text-gray-300 mb-4">{mentor.expertise.join(', ')} Coaching with {mentor.name}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className=" border border-gray-700 rounded-lg p-6 mb-6">
              <img
                src={mentor.profileImage || '/logo2.png'}
                alt={mentor.name}
                className="w-40 h-40 rounded-full mx-auto mb-2"
                onError={(e) => {
                  e.currentTarget.src = '/logo2.png';
                }}
              />
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-white">₹{mentor.pricePerHour}</div>
                <div className="text-gray-400">60 mins</div>
              </div>
              
             
              
              <div className="mb-6">
                <h3 className="font-semibold text-white mb-2">Expertise</h3>
                <p className="text-sm text-gray-300">{mentor.bio}</p>
                <p className="text-xs text-gray-500 mt-2">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">When should we meet?</h3>
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 mb-6">
                {generateDates().map((dateObj) => (
                  <button
                    key={dateObj.date}
                    onClick={() => setSelectedDate(dateObj.date)}
                    className={`p-3 text-center rounded-lg border text-sm ${
                      selectedDate === dateObj.date
                        ? 'bg-black text-white border-white'
                        : 'bg-white text-black border-gray-600 hover:border-blue-400'
                    }`}
                  >
                    <div className="font-medium">{dateObj.dayName}</div>
                    <div className="text-xs">{dateObj.dayNum} {dateObj.month}</div>
                  </button>
                ))}
              </div>
            </div>

            {selectedDate && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Available time slots
                  {slotsLoading && <span className="text-sm text-gray-400 ml-2">(Loading...)</span>}
                </h3>
                
                {availableSlots.length > 0 ? (
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                    {availableSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`p-3 text-center rounded-lg border text-sm ${
                          selectedTime === slot
                            ? 'bg-black text-white border-white'
                            : 'bg-white text-black border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                ) : (
                  !slotsLoading && (
                    <div className="text-gray-400 text-sm">
                      No available slots for this day
                    </div>
                  )
                )}
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Timezone</h3>
              <div className="text-sm text-gray-400">
                (GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi (IST)
              </div>
            </div>
            <button 
              onClick={handleBookSlot}
              disabled={booking || !selectedDate || !selectedTime}
              className="w-full bg-white text-black hover:bg-gray-200 disabled:bg-gray-600 disabled:text-white py-4 rounded-lg font-semibold text-lg transition-colors border border-gray-300"
            >
              {booking ? 'Booking...' : 'Book Session'}
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}