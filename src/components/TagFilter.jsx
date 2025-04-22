import React from 'react';

const allTags = ['React', 'Spring', '스터디', '백엔드'];

function TagFilter({ selectedTags, setSelectedTags }) {
    const toggleTag = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    return (
        <div className="mb-4">
            <h4 className="text-sm text-gray-600 font-medium mb-2">🔥 인기 태그</h4>
            <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => {
                    const isSelected = selectedTags.includes(tag);
                    return (
                        <button
                            key={tag}
                            onClick={() => toggleTag(tag)}
                            className={`px-3 py-1 border rounded-full text-sm transition ${
                                isSelected
                                    ? 'bg-blue-100 border-blue-500 text-blue-700 font-semibold'
                                    : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            #{tag}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default TagFilter;
