import { useEffect, useState } from 'react';
import axios from 'axios';

export default function BoardList() {
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        const fetchBoards = async () => {
            try {
                const response = await axios.get('http://localhost:8787/api/boards');
                setBoards(response.data);
            } catch (error) {
                console.error('보드 리스트 가져오기 실패:', error);
            }
        };

        fetchBoards();
    }, []);

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">보드 리스트</h2>
            <ul className="space-y-4">
                {boards.map((board) => (
                    <li key={board.bId} className="border p-4 rounded shadow">
                        <h3 className="text-2xl font-semibold">{board.category}</h3>
                        <p className="text-gray-500">{board.subCategory}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
