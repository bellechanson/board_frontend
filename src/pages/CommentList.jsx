import React, { useEffect, useState } from 'react';
import { getCommentsByPostId } from '../api/commentApi';

function CommentList({ postId }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const loadComments = async () => {
            try {
                const data = await getCommentsByPostId(postId);
                setComments(data);
            } catch (err) {
                console.error('댓글 불러오기 실패:', err);
            }
        };

        loadComments();
    }, [postId]);

    if (comments.length === 0) {
        return <p className="text-gray-400 mt-4">아직 댓글이 없습니다.</p>;
    }

    return (
        <div className="space-y-4 mt-6">
            {comments.map((comment) => (
                <div key={comment.id} className="border rounded p-4 bg-gray-50 shadow-sm">
                    <div className="text-sm text-gray-500 mb-1">
                        작성자: {comment.authorId} | {new Date(comment.createdAt).toLocaleString()}
                    </div>
                    <div className="text-base text-gray-700">{comment.content}</div>
                </div>
            ))}
        </div>
    );
}

export default CommentList;
