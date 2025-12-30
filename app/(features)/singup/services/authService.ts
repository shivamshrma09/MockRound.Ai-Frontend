const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL 

export const sendOTP = async (email: string, name: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/send-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name }),
    });

    return await response.json();
  } catch (error) {
    console.error('Send OTP error:', error);
    throw error;
  }
};

export const verifyOTP = async (email: string, otp: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/verify-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otp }),
    });

    return await response.json();
  } catch (error) {
    console.error('OTP verification error:', error);
    throw error;
  }
};

export const registerUser = async (email: string, password: string, name: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    });

    const data = await response.json();
    
    if (data.success && data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }
    
    return data;
  } catch (error) {
    console.error('Register error:', error);
    throw error;
  }
};