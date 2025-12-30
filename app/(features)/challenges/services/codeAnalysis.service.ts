import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL 

export default async function submitCodeForAnalysis(
  challengeID: string,
  roundNumber: number,
  questions: any[]
) {
  try {
    const userStr = localStorage.getItem('user');

    if (!userStr) {
      throw new Error('User not found. Please login first.');
    }

    let user;
    try {
      user = JSON.parse(userStr);
    } catch (parseError) {
      throw new Error('Invalid user data in localStorage.');
    }

    if (!user || (!user._id && !user.id)) {
      throw new Error('Incomplete user data. Please login again.');
    }

  
    const response = await axios.post(
      `${API_BASE_URL}/challenge/save-questions`,
      {
        challengeID,
        roundNumber,
        candidateID: user.id || user._id,
        candidateName: user.name,
        candidateEmail: user.email,
        questions
      },
      {
        timeout: 30000,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data;

  } catch (error) {
    console.error('Submission Error Details:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    
    throw error;
  }
}
