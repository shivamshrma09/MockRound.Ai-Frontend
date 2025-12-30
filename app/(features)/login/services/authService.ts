import axios from 'axios';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL 

export const loginUser = async (email: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/send-login-otp`, {
      email
    });

    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const verifyOtp = async (email: string, otp: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/verify-login-otp`, {
      email,
      otp
    });

    return response.data;
  } catch (error) {
    console.error('OTP verification error:', error);
    return { success: false, message: 'OTP verification failed' };
  }
};