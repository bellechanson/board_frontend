import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostById, deletePost} from '../api/boardApi';
import Comment from '../components/Comment';
import PostEdit from '../components/PostEdit';

export default function PostDetail() {
    const { postId } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState('');
    const [isEditing, setIsEditing] = useState(false);


    useEffect(() => {
        const fetchPost = async () => {
            try {
                const data = await getPostById(postId);
                setPost(data);
            } catch (error) {
                console.error('게시글 가져오기 실패:', error);
            }
        };

        fetchPost();
    }, [postId]);

    if (!post) {
        return <div>로딩중...</div>;
    }

    const handleDelete = async () => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            try {
                await deletePost(postId);
                alert('게시글이 삭제되었습니다.');
                navigate(-1);
            } catch (error) {
                console.error('삭제 실패:', error);
                alert('삭제 실패');
            }
        }
    };

    const handleEditClick = () => {
        setIsEditing(true); // 수정모드로 전환
    };

    const handleEditComplete = () => {
        setIsEditing(false); // 수정 완료 후 다시 상세 화면으로
        window.location.reload(); // 새로고침해서 수정된 내용 반영
    };

    return (
        <div className="p-4 max-w-3xl mx-auto">
            {isEditing ? (
                <PostEdit post={post} onEditComplete={handleEditComplete} /> // ✅ 수정폼 보여주기
            ) : (
                <>
                    <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
                    <p className="text-gray-700 mb-2">작성자: {post.nickname}</p>
                    <p className="text-gray-500 text-sm mb-4">{new Date(post.createdAt).toLocaleString()}</p>
                    <div className="border p-4 rounded mb-6">
                        {post.content}
                    </div>

                    {/* 수정/삭제 버튼 */}
                    <div className="flex justify-end gap-4 mb-10">
                        <button onClick={handleEditClick} className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded">
                            수정
                        </button>
                        <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white p-2 rounded">
                            삭제
                        </button>
                    </div>

                    {/* 댓글 */}
                    <Comment postId={postId} />
                </>
            )}
        </div>
    );
}
