const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL 

export const fetchMentors = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/mentors`);
    const data = await response.json();
    return {
      success: true,
      mentors: data.mentors || []
    };
  } catch (error) {
    console.error('Error fetching mentors:', error);
    return {
      success: false,
      mentors: []
    };
  }
};

export const fetchMentorById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/mentors/${id}`);
    const data = await response.json();
    return {
      success: true,
      mentor: data.mentor
    };
  } catch (error) {
    console.error('Error fetching mentor:', error);
    return {
      success: false,
      mentor: null
    };
  }
};

export const fetchAvailableSlots = async (mentorId, day, date) => {
  try {
    const response = await fetch(`${API_BASE_URL}/mentors/${mentorId}/slots/${day}/${date}`);
    const data = await response.json();
    return {
      success: data.success,
      availableSlots: data.availableSlots || [],
      message: data.message
    };
  } catch (error) {
    console.error('Error fetching slots:', error);
    return {
      success: false,
      availableSlots: [],
      message: 'Failed to fetch slots'
    };
  }
};

export const bookMentorSlot = async (mentorId, day, date, timeSlot, userInfo) => {
  try {
    const response = await fetch(`${API_BASE_URL}/mentors/${mentorId}/book/${day}/${date}/${timeSlot}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: userInfo.userId,
        userName: userInfo.userName,
        userEmail: userInfo.userEmail
      })
    });
    
    const data = await response.json();
    return {
      success: data.success,
      message: data.message,
      booking: data.booking
    };
  } catch (error) {
    console.error('Booking error:', error);
    return {
      success: false,
      message: 'Booking failed. Please try again.'
    };
  }
};

export const getUserInfo = () => {
  try {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return {
      userId: user._id || 'user123',
      userName: user.name || 'User',
      userEmail: user.email || 'user@email.com'
    };
  } catch (error) {
    return {
      userId: 'user123',
      userName: 'User',
      userEmail: 'user@email.com'
    };
  }
};

export const generateDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push({
      date: date.toISOString().split('T')[0],
      day: date.toLocaleDateString('en', { weekday: 'long' }).toLowerCase(),
      dayName: date.toLocaleDateString('en', { weekday: 'short' }),
      dayNum: date.getDate(),
      month: date.toLocaleDateString('en', { month: 'short' })
    });
  }
  return dates;
};