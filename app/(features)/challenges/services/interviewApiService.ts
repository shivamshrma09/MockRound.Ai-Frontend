import axios from 'axios';

const HG_API  = process.env.NEXT_PUBLIC_HUGGINGFACE_API_URL 

export interface InterviewRequest {
  company_Name: string;
  role: string;
  start: number;
  maxfollowup: number;
  exprences?: number;
  package?: number;
  previous_questions?: string;
  previous_answer?: string;
  resume?: ResumeData;
}

export interface ResumeData {
  name?: string;
  education?: string;
  skills?: string[];
  experience?: string;
  projects?: string[];
  certifications?: string[];
}

export interface InterviewResponse {
  success: boolean;
  question?: string;
  feedback?: string;
  score?: number;
  topics?: string[];
  new_question?: string;
  followup_question?: string;
  max_followup?: number;
  interview_continues?: boolean;
  error?: string;
}

export interface InterviewEntry {
  question: string;
  answer: string;
  feedback: string;
  score: number;
  topics: string[];
  timestamp: string;
  roundType: string;
}

export const interviewApiService = {
  getRoundConfig: (roundType: string) => {
    const configs = {
      'HR': { maxQuestions: 14, endpoint: '/api/hr' },
      'Technical': { maxQuestions: 14, endpoint: '/api/technical' },
      'Coding': { maxQuestions: 14, endpoint: '/api/coding' },
      'Behavioral': { maxQuestions: 14, endpoint: '/api/behavioral' }
    };
    return configs[roundType] || configs['HR'];
  },

  getNewQuestion: async (requestData: InterviewRequest, endpoint: string): Promise<InterviewResponse> => {
    try {
      const response = await axios.post(`${HG_API}${endpoint}`, requestData);
      return response.data;
    } catch (error) {
      console.error('Error getting question:', error);
      throw new Error('Failed to get question. Please try again.');
    }
  },

  submitAnswer: async (requestData: InterviewRequest, endpoint: string): Promise<InterviewResponse> => {
    try {
      const response = await axios.post(`${HG_API}${endpoint}`, requestData);
      return response.data;
    } catch (error) {
      console.error('Error submitting answer:', error);
      throw new Error('Failed to submit answer. Please try again.');
    }
  },

  prepareRequestData: (
    company_Name: string,
    role: string,
    start: number,
    maxfollowup: number,
    roundType: string,
    experience?: number,
    previous_questions?: string,
    previous_answer?: string,
    resume?: ResumeData
  ): InterviewRequest => {
    const requestData: InterviewRequest = {
      company_Name,
      role,
      start,
      maxfollowup
    };

    if (roundType === 'HR' || roundType === 'Technical' || roundType === 'Coding') {
      requestData.exprences = experience || 0;
      requestData.package = 100000;
    }

    if (previous_questions && previous_answer) {
      requestData.previous_questions = previous_questions;
      requestData.previous_answer = previous_answer;
    }

    if (resume) {
      requestData.resume = resume;
    }

    return requestData;
  },

  createInterviewEntry: (
    question: string,
    answer: string,
    result: InterviewResponse,
    roundType: string
  ): InterviewEntry => {
    return {
      question,
      answer,
      feedback: result.feedback || '',
      score: result.score || 0,
      topics: result.topics || [],
      timestamp: new Date().toISOString(),
      roundType
    };
  }
};