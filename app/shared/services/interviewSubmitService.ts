import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL 

export interface SubmitInterviewPayload {
  company_Name: string;
  role: string;
  candidateName: string;
  candidateEmail: string;
  roundType: string;
  totalScore: number;
  timestamp: string;
  interviewData: InterviewDataEntry[];
  resume?: any;
}

export interface InterviewDataEntry {
  question: string;
  answer: string;
  feedback: string;
  score: number;
  topics: string[];
  timestamp: string;
  roundType: string;
}

export interface SubmitInterviewResponse {
  success: boolean;
  message: string;
  interviewId?: string;
  emailSent?: boolean;
}

export const interviewSubmitService = {
  submitInterview: async (payload: SubmitInterviewPayload): Promise<SubmitInterviewResponse> => {
    try {
      const { default: submitCodeForAnalysis } = await import('../../(features)/challenges/services/codeAnalysis.service');
      
      const questionsWithCode = payload.interviewData.map((item, index) => ({
        question: item.question,
        userCode: item.answer,
        solution: item.feedback,
        language: 'Interview',
        difficulty: 'Medium',
        score: item.score,
        topics: item.topics
      }));

      const result = await submitCodeForAnalysis(
        '694948d92df92542b75baa36', 
        1,
        questionsWithCode
      );
      
      return {
        success: result.success || true,
        message: 'Interview submitted successfully',
        interviewId: result.submissionId || 'interview_' + Date.now()
      };
    } catch (error: any) {
      console.error('Error submitting interview:', error);
      throw new Error(error.message || 'Failed to submit interview results');
    }
  },

  calculateTotalScore: (interviewData: InterviewDataEntry[]): number => {
    if (!interviewData || interviewData.length === 0) return 0;
    const sum = interviewData.reduce((total, item) => total + (item.score || 0), 0);
    return Math.round((sum / interviewData.length) * 10);
  },

  prepareSubmitPayload: (
    company_Name: string,
    currentRoundType: string,
    interviewData: InterviewDataEntry[],
    userData: any
  ): SubmitInterviewPayload => {
    return {
      company_Name,
      role: userData.role || 'Software Engineer',
      candidateName: userData.name || 'Anonymous',
      candidateEmail: userData.email || 'test@example.com',
      roundType: currentRoundType,
      totalScore: interviewSubmitService.calculateTotalScore(interviewData),
      timestamp: new Date().toISOString(),
      interviewData,
      resume: userData
    };
  }
};
