import axios from 'axios';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL 

export const getTechnicalMCQ = async () => {
  try {
    const userStr = localStorage.getItem('user');
    
    if (!userStr) {
      throw new Error('User not found. Please login first.');
    }

    const user = JSON.parse(userStr);
    
    if (!user || !user.email) {
      throw new Error('Incomplete user data. Please login again.');
    }

    const response = await axios.get(`${API_BASE_URL}/technical-questions?count=15`, {
      headers: {
        'Authorization': `Bearer ${user.token}`,
        'Content-Type': 'application/json'
      }
    });
    
    return response.data;

  } catch (error: any) {
    console.error('Get technical MCQ error:', error);
    return { questions: [] };
  }
};