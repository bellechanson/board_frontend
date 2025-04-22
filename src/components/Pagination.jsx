import React from 'react';
import Button from './Button';

function Pagination({ currentPage, totalPages, onPageChange }) {
    const isFirst = currentPage === 1;
    const isLast = currentPage === totalPages;

    return (
        <div className="flex justify-center items-center gap-2 mt-6">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={isFirst}
                className={`px-3 py-1 rounded ${
                    isFirst
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-blue-500 hover:underline'
                }`}
            >
                ◀ 이전
            </button>

            <span className="px-3 py-1 rounded bg-blue-500 text-white font-semibold">
        {currentPage}
      </span>

            <span className="text-gray-500">/</span>

            <span className="text-gray-600">{totalPages}</span>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={isLast}
                className={`px-3 py-1 rounded ${
                    isLast
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-blue-500 hover:underline'
                }`}
            >
                다음 ▶
            </button>
        </div>
    );
}

export default Pagination;
