import React from 'react';

const AVAILABLE_TAGS = [
  'DSA', 'WebDev', 'AI', 'ML', 'LeetCode', 'JavaScript', 'Python', 
  'React', 'Node.js', 'MongoDB', 'SQL', 'DevOps', 'System Design',
  'Frontend', 'Backend', 'FullStack', 'Mobile', 'Cloud', 'Blockchain'
];

interface CompactFilterProps {
  selectedTags: string[];
  sortBy: 'newest' | 'oldest';
  onTagChange: (tags: string[]) => void;
  onSortChange: (sort: 'newest' | 'oldest') => void;
}

function CompactFilter({ selectedTags, sortBy, onTagChange, onSortChange }: CompactFilterProps) {
  const handleTagSelect = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      onTagChange([...selectedTags, tag]);
    }
  };

  const removeTag = (tagToRemove: string) => {
    onTagChange(selectedTags.filter(tag => tag !== tagToRemove));
  };

  const clearAllTags = () => {
    onTagChange([]);
  };

  return (
    <div className='flex items-center gap-3 '>
      <div className='flex flex-col gap-1'>
        <select
          onChange={(e) => {
            if (e.target.value) {
              handleTagSelect(e.target.value);
              e.target.value = '';
            }
          }}
          value=""
          className='bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 text-sm min-w-[120px]'
        >
          <option value=""> Filter Tags</option>
          {AVAILABLE_TAGS.filter(tag => !selectedTags.includes(tag)).map(tag => (
            <option key={tag} value={tag}>#{tag}</option>
          ))}
        </select>
        
        {selectedTags.length > 0 && (
          <div className='flex flex-wrap gap-1 max-w-[200px]'>
            {selectedTags.map(tag => (
              <span 
                key={tag} 
                className='bg-blue-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1'
              >
                #{tag}
                <button 
                  onClick={() => removeTag(tag)}
                  className='hover:bg-blue-700 rounded-full w-3 h-3 flex items-center justify-center text-xs'
                >
                  ×
                </button>
              </span>
            ))}
            <button 
              onClick={clearAllTags}
              className='text-red-400 hover:text-red-300 text-xs'
            >
              Clear
            </button>
          </div>
        )}
      </div>

      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value as 'newest' | 'oldest')}
        className='bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 text-sm'
      >
        <option value="newest"> Newest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
}

export default CompactFilter;