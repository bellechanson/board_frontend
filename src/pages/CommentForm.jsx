import React, { useState } from 'react';
import { createComment } from '../api/commentApi';

function CommentForm({ postId, onCommentAdded }) {
    const [authorId, setAuthorId] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createComment(postId, {
                authorId,
                content,
                post: { pId: postId }
            });
            setAuthorId('');
            setContent('');
            onCommentAdded(); // 댓글 추가 후 새로고침
        } catch (err) {
            console.error('댓글 등록 실패:', err);
            alert('댓글 등록 중 오류 발생');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-4">
            <input
                type="number"
                placeholder="작성자 ID"
                value={authorId}
                onChange={(e) => setAuthorId(e.target.value)}
                required
                className="border rounded px-3 py-2 w-full sm:w-1/4"
            />
            <input
                type="text"
                placeholder="댓글 내용"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className="border rounded px-3 py-2 w-full"
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
                등록
            </button>
        </form>
    );
}

export default CommentForm;
