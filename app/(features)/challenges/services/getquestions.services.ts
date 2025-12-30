import axios from 'axios';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL 


export async function getquestions() {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/coding-questions?count=3`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching coding questions:', error);
    throw error;
  }
}

export async function getquestionstechnical() {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/technical-questions?count=14`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching technical questions:', error);
    throw error;
  }
}
