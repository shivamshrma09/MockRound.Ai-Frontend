import axios from 'axios';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL 

interface LiveChallengeResponse {
  success: boolean;
  message: string;
  action?: string;
  details?: string;
  userRegistration?: any;
  eligibleRounds?: any[];
  ineligibleRounds?: any[];
  registrationRound?: any;
  lastRegistrationRound?: any;
  latestCompletedRound?: any;
  totalEligibleRounds?: number;
  totalIneligibleRounds?: number;
}

interface EnrollmentResponse {
  success: boolean;
  message: string;
  challengeId?: string;
  enrollmentDate?: string;
}

const fetchLiveChallenge = async (userId?: string): Promise<{ data: LiveChallengeResponse }> => {
  try {
    if (typeof window === 'undefined') {
      throw new Error('This function can only be called on the client side');
    }

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
      throw new Error('User ID not found. Please login again.');
    }

    const response = await axios.post(
      `${API_BASE_URL}/live`,
      {
        userId: user._id || user.id,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-requested-with': 'XMLHttpRequest'
        },
        timeout: 10000  
      }
    );

    return response;
  } catch (error: any) {
    if (error.code === 'ECONNABORTED') {
      console.error('Request timeout - API server may be down');
      throw new Error('Request timeout. Please check your connection.');
    }
    
    if (error.code === 'ERR_NETWORK') {
      console.error('Network error - API server may be unreachable');
      throw new Error('Network error. Please check if the API server is running.');
    }

    if (error.response?.status === 403 && error.response?.data) {
      return {
        data: error.response.data,
      };
    }

    if (error.response?.status === 400 || error.response?.status === 404 || error.response?.status === 500) {
      console.error('Error fetching live challenge:', error.response.data);
      throw error.response.data || error.message || 'Failed to fetch live challenge';
    }

    console.error('Error fetching live challenge:', error.message);
    throw error.message || 'Failed to fetch live challenge';
  }
};

const enrollInChallenge = async (challengeID: string  ): Promise<EnrollmentResponse> => {
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
      throw new Error('User ID not found. Please login again.');
    }

    const candidateName = user.name 
    const userEmail = user.email 
    
    const response = await axios.post(
      `${API_BASE_URL}/enroll-challenge`,
      {
        challengeID,
        candidateName,
        userEmail,
        userID: user._id,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('Error enrolling in challenge:', error);
    throw error.response?.data?.error || error.message || 'Failed to enroll in challenge';
  }
};

export { fetchLiveChallenge, enrollInChallenge };
export default fetchLiveChallenge;