const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL 

// Helper function to get user data from localStorage
export const getUserData = () => {
  if (typeof window !== 'undefined') {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        return {
          userId: user._id || user.id || 'temp_user_id',
          username: user.username || user.name || 'Anonymous',
          avatar: user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.username || 'Anonymous')}&background=random`
        };
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }
  return {
    userId: 'temp_user_id',
    username: 'Anonymous',
    avatar: 'https://ui-avatars.com/api/?name=Anonymous&background=random'
  };
};

export interface Post {
  _id?: string;
  content: string;
  authorId: string;
  author: {
    username: string;
    avatar: string;
  };
  tags?: string[];
  likes?: string[];
  likesCount?: number;
  commentsCount?: number;
  createdAt?: string;
  updatedAt?: string;
  comments?: Array<{
    commenterId: string;
    commenter: {
      username: string;
      avatar: string;
    };
    content: string;
    createdAt: string;
  }>;
}

export const createPost = async (postData: Omit<Post, '_id' | 'createdAt' | 'updatedAt'>) => {
  const response = await fetch(`${API_BASE}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  });
  return response.json();
};

export const getAllPosts = async () => {
  const response = await fetch(`${API_BASE}/posts`);
  return response.json();
};

export const getPost = async (id: string) => {
  const response = await fetch(`${API_BASE}/posts/${id}`);
  return response.json();
};

export const updatePost = async (id: string, postData: Partial<Post>) => {
  const response = await fetch(`${API_BASE}/posts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  });
  return response.json();
};

export const deletePost = async (id: string) => {
  const response = await fetch(`${API_BASE}/posts/${id}`, {
    method: 'DELETE'
  });
  return response.json();
};

export const likePost = async (id: string, userId: string) => {
  const response = await fetch(`${API_BASE}/posts/${id}/like`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId })
  });
  return response.json();
};

export const addComment = async (postId: string, commentData: any) => {
  const response = await fetch(`${API_BASE}/posts/${postId}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(commentData)
  });
  return response.json();
};


export const getComments = async (postId: string) => {
  const response = await fetch(`${API_BASE}/posts/${postId}/comments`);
  return response.json();
};

export const getsinglepost = async (postId: string) => {
  const response = await fetch(`${API_BASE}/posts/${postId}`);
  return response.json();
};

