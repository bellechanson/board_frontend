import { useEffect, useState } from 'react';
import { createComment, getCommentsByPostId } from '../api/boardApi'; // commentApi 사용

export default function Comment({ postId }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const authorId = 1; // ✅ 임시 로그인 유저 ID (나중에 세션이나 토큰으로)

    // 댓글 목록 불러오기
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const data = await getCommentsByPostId(postId);
                setComments(data);
            } catch (error) {
                console.error('댓글 가져오기 실패:', error);
            }
        };

        fetchComments();
    }, [postId]);

    // 댓글 작성하기
    const handleAddComment = async (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        try {
            await createComment(postId, {
                authorId,
                content: newComment,
            });
            setNewComment('');
            // 댓글 다시 로딩
            const updated = await getCommentsByPostId(postId);
            setComments(updated);
        } catch (error) {
            console.error('댓글 작성 실패:', error);
        }
    };

    return (
        <div className="mt-10">
            <h3 className="text-2xl font-bold mb-4">댓글</h3>

            {/* 댓글 입력 */}
            <form onSubmit={handleAddComment} className="flex gap-2 mb-6">
                <input
                    type="text"
                    placeholder="댓글을 입력하세요"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="border p-2 rounded flex-1"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    등록
                </button>
            </form>

            {/* 댓글 리스트 */}
            <div className="flex flex-col gap-4">
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <div key={comment.cId ?? index} className="border p-4 rounded">
                            <p className="font-semibold">작성자 ID: {comment.authorId}</p>
                            <p className="text-gray-500 text-sm">{new Date(comment.createdAt).toLocaleString()}</p>
                            <p className="mt-2">{comment.content}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400">아직 댓글이 없습니다.</p>
                )}
            </div>
        </div>
    );
}
