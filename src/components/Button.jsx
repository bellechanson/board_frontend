import React from 'react';

function Button({ children, onClick, type = 'button', color = 'blue', className = '' }) {
    const base =
        'px-4 py-2 rounded shadow font-medium text-white transition duration-200';
    const colorMap = {
        blue: 'bg-blue-500 hover:bg-blue-600',
        red: 'bg-red-500 hover:bg-red-600',
        yellow: 'bg-yellow-400 hover:bg-yellow-500',
        gray: 'bg-gray-400 hover:bg-gray-500',
    };
    const colorStyle = colorMap[color] || colorMap.blue;

    return (
        <button type={type} onClick={onClick} className={`${base} ${colorStyle} ${className}`}>
            {children}
        </button>
    );
}

export default Button;
