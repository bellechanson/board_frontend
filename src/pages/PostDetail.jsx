import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8787/api/posts/${id}`) // ✅ 절대경로로 명시하면 안전
            .then(res => {
                console.log("✅ 받은 게시글 데이터:", res.data);
                setPost(res.data);
            })
            .catch(err => {
                console.error("❌ 게시글 조회 실패:", err);
            });
    }, [id]);

    if (!post) return <div className="p-4">⏳ 로딩 중...</div>;

    return (
        <div className="max-w-2xl mx-auto p-4 bg-white rounded-2xl shadow-md">
            <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-4">
                {post.createdAt ? new Date(post.createdAt).toLocaleString() : '날짜 없음'} · by {post.authorId}
            </p>
            <div className="text-lg text-gray-800 whitespace-pre-line">{post.content}</div>
        </div>
    );
}

export default PostDetail;
