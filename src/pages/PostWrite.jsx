import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../api/postApi';
import Button from '../components/Button'; // ✅ 버튼 컴포넌트 import

function PostWrite() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [authorId, setAuthorId] = useState('');
    const [boardId, setBoardId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createPost(boardId, {
                title,
                content,
                authorId,
                bNotice: false,
                board: { bId: boardId }
            });
            alert('게시글이 등록되었습니다!');
            navigate('/');
        } catch (err) {
            console.error('등록 실패:', err);
            alert('등록 중 오류가 발생했습니다.');
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">✍️ 새 게시글 작성</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-1">제목</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">내용</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full border rounded px-3 py-2 h-40"
                        required
                    />
                </div>

                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-gray-700 font-medium mb-1">작성자 ID</label>
                        <input
                            type="number"
                            value={authorId}
                            onChange={(e) => setAuthorId(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>

                    <div className="flex-1">
                        <label className="block text-gray-700 font-medium mb-1">게시판 ID</label>
                        <input
                            type="number"
                            value={boardId}
                            onChange={(e) => setBoardId(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>
                </div>

                {/* ✅ 버튼 교체 */}
                <Button type="submit" color="blue" className="mt-4">
                    등록하기
                </Button>
            </form>
        </div>
    );
}

export default PostWrite;
