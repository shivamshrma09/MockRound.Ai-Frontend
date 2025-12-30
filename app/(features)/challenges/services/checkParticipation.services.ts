import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL 

export default async function checkParticipated(challengeID: string, roundNumber: number) {
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

    if (!user || !user.email) {
      throw new Error('Incomplete user data. Please login again.');
    }



    const response = await axios.post(`${API_BASE_URL}/check-participation`, {
      userEmail: user.email,
      challengeID,
      roundNumber
    });
    
    return response.data.hasParticipated;

  } catch (error: any) {
    return false;
  }
}