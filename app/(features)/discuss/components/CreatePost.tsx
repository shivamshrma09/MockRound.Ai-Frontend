import React, { useState } from 'react';
import { createPost, getUserData } from '../services/postService';

const AVAILABLE_TAGS = [
  'DSA', 'WebDev', 'AI', 'ML', 'LeetCode', 'JavaScript', 'Python', 
  'React', 'Node.js', 'MongoDB', 'SQL', 'DevOps', 'System Design',
  'Frontend', 'Backend', 'FullStack', 'Mobile', 'Cloud', 'Blockchain'
];

interface CreatePostProps {
  onPostCreated?: () => void;
}

function CreatePost({ onPostCreated }: CreatePostProps) {
  const [content, setContent] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isPosting, setIsPosting] = useState(false);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleSubmit = async () => {
    if (!content.trim() || isPosting) return;

    setIsPosting(true);
    const userData = getUserData();

    try {
      await createPost({
        content: content.trim(),
        authorId: userData.userId,
        author: {
          username: userData.username,
          avatar: userData.avatar
        },
        tags: selectedTags
      });

      setContent('');
      setSelectedTags([]);
      onPostCreated?.();
    } catch (error) {
      console.error('Failed to create post:', error);
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className='bg-black border border-gray-500 mt-[-800] rounded-xl p-4 mb-4'>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className='w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-600 focus:border-blue-400 outline-none resize-none'
        rows={3}
      />
      
      <div className='mt-3'>
        <p className='text-gray-400 text-sm mb-2'>Add tags:</p>
        <div className='flex flex-wrap gap-2 max-h-32 overflow-y-auto'>
          {AVAILABLE_TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagToggle(tag)}
              className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                selectedTags.includes(tag)
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-gray-800 text-gray-300 border-gray-600 hover:border-blue-400'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {selectedTags.length > 0 && (
        <div className='mt-2'>
          <p className='text-gray-400 text-sm'>Selected:</p>
          <div className='flex flex-wrap gap-1 mt-1'>
            {selectedTags.map(tag => (
              <span key={tag} className='bg-blue-600 text-white text-xs px-2 py-1 rounded-full'>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className='flex justify-between items-center mt-4'>
        <span className='text-gray-400 text-sm'>
          {content.length}/500 characters
        </span>
        <button
          onClick={handleSubmit}
          disabled={!content.trim() || isPosting || content.length > 500}
          className='bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors'
        >
          {isPosting ? 'Posting...' : 'Post'}
        </button>
      </div>
    </div>
  );
}

export default CreatePost;