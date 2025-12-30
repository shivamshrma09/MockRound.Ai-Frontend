import React, { useState } from 'react'
import sendfeedback from '../services/feedbacksend'

function Feedback() {
  const [feedback, setFeedback] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!feedback.trim()) return
    
    setIsSubmitting(true)
    try {
      await sendfeedback(feedback)
      setFeedback('')
      alert('Feedback submitted successfully!')
    } catch (error) {
      alert('Failed to submit feedback')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='w-80 lg:w-96  relative h-auto bg-[#000000]/40 flex rounded-xl flex-col items-center border border-1 border-white z-10 p-6'>
        <h2  className='text-xl mb-3 text-center text-white font-bold'>Give your valuable feedback</h2>
        <input 
          type="text" 
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className='w-full h-20 bg-black border border-neutral-500 p-3 m-2 focus:border-white rounded-md text-gray-200' 
          placeholder='Feedback..' 
        />
        <button 
          onClick={handleSubmit}
          disabled={isSubmitting}
          className='bg-[#9d300b] relative -top-2 font-bold text-white px-4 py-2 rounded-md mt-4 hover:bg-[#f35a27] disabled:opacity-50'
        >
          {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
        </button>
    </div>
  )
}

export default Feedback
