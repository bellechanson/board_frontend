import React from 'react';

function SortSelector({ sort, onChange }) {
    return (
        <select
            value={sort}
            onChange={(e) => onChange(e.target.value)}
            className="ml-4 border rounded px-3 py-2 text-sm text-gray-700"
        >
            <option value="latest">🕒 최신순</option>
            <option value="likes">👍 좋아요순</option>
            <option value="comments">💬 댓글순</option>
        </select>
    );
}

export default SortSelector;
