import axios from 'axios';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL 

export interface SaveInterviewPayload {
  challengeID: string;
  roundNumber: number;
  candidateID: string;
  candidateName: string;
  candidateEmail: string;
  questions: InterviewQuestionEntry[];
}

export interface InterviewQuestionEntry {
  question: string;
  answer: string;
  feedback?: string;
  timestamp?: string;
}

export const saveInterviewService = {
  saveUserQuestions: async (payload: SaveInterviewPayload) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/save-questions`, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      return response.data;
    } catch (error: any) {
      console.error('Error saving interview questions:', error);
      throw new Error(error.response?.data?.message || 'Failed to save interview questions');
    }
  },

  prepareSavePayload: (
    challengeID: string,
    roundNumber: number,
    interviewData: any[],
    userData: any
  ): SaveInterviewPayload => {
    const questions = interviewData.map(item => ({
      question: item.question,
      answer: item.answer,
      feedback: item.feedback,
      timestamp: item.timestamp
    }));

    return {
      challengeID,
      roundNumber,
      candidateID: userData._id || userData.id,
      candidateName: userData.name || 'Anonymous',
      candidateEmail: userData.email || 'test@example.com',
      questions
    };
  }
};