import axios from "axios"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const sendfeedback = async (content?: string) => {
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

    const userId = user.id || user._id;
    const name = user.name || 'Anonymous';
    if (!content) {
      throw new Error('Content is required.');
    }

   



        
        const response = await axios.post(`${API_BASE_URL}/feedback`, {
            content,
            userId,
            name,
            email: user.email 
        });
        return response.data;
    } catch (error) {
        console.error("Error saving feedback:", error);
        throw error;
    }
}

export default sendfeedback;