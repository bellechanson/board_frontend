import { useState } from 'react';
import { createBoard } from '../api/boardApi';

export default function BoardCreate() {
    const [category, setCategory] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const boardData = { category };
            const response = await createBoard(boardData);
            alert('보드 생성 완료! ID: ' + response.id);
            setCategory('');
        } catch (error) {
            console.error(error);
            alert('보드 생성 실패');
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">게시판 생성</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="카테고리"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border p-2 rounded"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    생성하기
                </button>
            </form>
        </div>
    );
}
