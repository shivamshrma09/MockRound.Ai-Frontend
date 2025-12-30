import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL 

interface TechnicalRoundQuestion {
  question: string;
  answer: string;
  isright: boolean;
  rightanswer: string;
  explainantion?: string;
}

interface TechnicalRoundData {
  companyName: string;
  role: string;
  date: string;
  score: number;
  questions: TechnicalRoundQuestion[];
  userId: string;
}

export const technicalRoundService = {
  async submitTechnicalRound(data: TechnicalRoundData) {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/technical-round-analysis`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || 'Failed to submit technical round analysis'
      );
    }
  },
};