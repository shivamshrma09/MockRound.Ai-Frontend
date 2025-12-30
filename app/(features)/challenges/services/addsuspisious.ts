import axios from 'axios';

 export default async function logSuspiciousActivity(title: string, challengeID: string, roundNumber: number, img?: string, video?: string) {
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


    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/challenge/addsuspiciousactivity`, {
      challengeID,
      roundNumber,
      candidateID : user._id || user.id,
      suspiciousActivities: [
        {
          title: title, 
          img: img || '', 
          video: video || '' 
        }
      ]
    });

    if (response.data.success) {
    }
  } catch (error) {
    console.error('Failed to log activity:', error);
  }
};
