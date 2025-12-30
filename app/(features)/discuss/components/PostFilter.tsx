import React from 'react';

const AVAILABLE_TAGS = [
  'DSA', 'WebDev', 'AI', 'ML', 'LeetCode', 'JavaScript', 'Python', 
  'React', 'Node.js', 'MongoDB', 'SQL', 'DevOps', 'System Design',
  'Frontend', 'Backend', 'FullStack', 'Mobile', 'Cloud', 'Blockchain'
];

interface PostFilterProps {
  selectedTags: string[];
  sortBy: 'newest' | 'oldest';
  onTagChange: (tags: string[]) => void;
  onSortChange: (sort: 'newest' | 'oldest') => void;
}

function PostFilter({ selectedTags, sortBy, onTagChange, onSortChange }: PostFilterProps) {
  const handleTagToggle = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    onTagChange(newTags);
  };

  const clearAllTags = () => {
    onTagChange([]);
  };

  return (
    <div className='bg-gray-900 border border-gray-600 rounded-xl p-4 mb-4'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-4'>
          <span className='text-white text-sm font-medium'>Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as 'newest' | 'oldest')}
            className='bg-gray-800 text-white border border-gray-600 rounded px-3 py-1 text-sm'
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

        <div>
          <div className='flex items-center justify-between mb-2'>
            <span className='text-white text-sm font-medium'>Filter by tags:</span>
            {selectedTags.length > 0 && (
              <button
                onClick={clearAllTags}
                className='text-red-400 hover:text-red-300 text-xs'
              >
                Clear all
              </button>
            )}
          </div>
          
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

          {selectedTags.length > 0 && (
            <div className='mt-2'>
              <span className='text-gray-400 text-xs'>
                Filtering by: {selectedTags.length} tag{selectedTags.length > 1 ? 's' : ''}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostFilter;