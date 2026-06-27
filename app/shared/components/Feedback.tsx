import React, { useState } from 'react'
import sendfeedback from '../services/feedbacksend'
import { IoClose } from "react-icons/io5";

interface FeedbackProps {
  onClose?: () => void;
}

function Feedback({ onClose }: FeedbackProps) {
  const [feedback, setFeedback] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!feedback.trim()) return
    
    setIsSubmitting(true)
    try {
      await sendfeedback(feedback)
      setFeedback('')
      alert('Feedback submitted successfully!')
      if (onClose) onClose()
    } catch (error) {
      alert('Failed to submit feedback')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='w-80 lg:w-96 relative h-auto bg-neutral-950 border border-neutral-800 shadow-2xl flex rounded-2xl flex-col items-center z-50 p-6'>
        {onClose && (
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
          >
            <IoClose className="text-xl" />
          </button>
        )}
        <h2 className='text-lg mb-4 text-center text-white font-bold'>Give your valuable feedback</h2>
        <textarea 
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className='w-full h-24 bg-neutral-900 border border-neutral-800 p-3 mb-2 focus:border-[#d97757] focus:ring-1 focus:ring-[#d97757]/30 rounded-xl text-white placeholder-neutral-500 focus:outline-none transition-all duration-300 resize-none' 
          placeholder='Type your feedback here...' 
        />
        <button 
          onClick={handleSubmit}
          disabled={isSubmitting}
          className='w-full bg-[#d97757] hover:bg-[#c86a47] font-bold text-white py-2.5 px-4 rounded-xl mt-4 transition-all duration-300 disabled:opacity-50 shadow-lg shadow-[#d97757]/10 hover:shadow-[#d97757]/20'
        >
          {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
        </button>
    </div>
  )
}

export default Feedback
