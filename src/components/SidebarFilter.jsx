import React from 'react';

const categories = [
    { key: '', label: '전체' },
    { key: 'study', label: '스터디' },
    { key: 'free', label: '자유게시판' },
    { key: 'worry', label: '고민있어요' },
];

function SidebarFilter({ selectedCategory, onSelectCategory }) {
    return (
        <aside className="w-1/5">
            <h3 className="text-lg font-bold text-gray-800 mb-4">📂 카테고리</h3>
            <ul className="space-y-2">
                {categories.map((cat) => (
                    <li key={cat.key}>
                        <button
                            onClick={() => onSelectCategory(cat.key)}
                            className={`block w-full text-left px-3 py-2 rounded hover:bg-gray-100 ${
                                selectedCategory === cat.key
                                    ? 'bg-blue-100 font-semibold text-blue-700'
                                    : 'text-gray-700'
                            }`}
                        >
                            {cat.label}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default SidebarFilter;
