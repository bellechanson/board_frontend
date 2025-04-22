import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostById, updatePost } from '../api/postApi';

function PostEdit() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [authorId, setAuthorId] = useState('');
    const [boardId, setBoardId] = useState('');

    useEffect(() => {
        const loadPost = async () => {
            try {
                const post = await getPostById(id);
                setTitle(post.title);
                setContent(post.content);
                setAuthorId(post.authorId);
                setBoardId(post.boardId);
            } catch (err) {
                console.error('게시글 로딩 실패:', err);
            }
        };

        loadPost();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updatePost(id, {
                title,
                content,
                authorId,
                bNotice: false,
                board: { bId: boardId }
            });
            alert('수정 완료!');
            navigate(`/posts/${id}`);
        } catch (err) {
            console.error('수정 실패:', err);
            alert('수정 중 오류 발생');
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">✏️ 게시글 수정</h2>
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

                <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded shadow mt-4"
                >
                    수정 완료
                </button>
            </form>
        </div>
    );
}

export default PostEdit;
