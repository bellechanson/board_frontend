import { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';

export default function BoardCategory() {
    const [boards, setBoards] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBoards = async () => {
            try {
                const response = await axios.get('http://localhost:8787/api/boards');
                setBoards(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('보드 리스트 가져오기 실패:', error);
            }
        };

        fetchBoards();
    }, []);

    const handlePostList = (bid) => {
        navigate(`/boards/${bid}/posts`);
        console.log(bid);
    };

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">보드 리스트</h2>
            <ul className="space-y-4">
                {boards.map((board) => (
                    <li key={board.bid} className="border p-4 rounded shadow"
                    onClick={() => handlePostList(board.bid)}>
                        <h3 className="text-2xl font-semibold">{board.category}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
}
