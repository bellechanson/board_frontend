import { useEffect, useState } from 'react';
import { getPostsByBoardId , getboardsByBoardId} from '../api/boardApi';
import { useParams, Link, useNavigate } from 'react-router-dom';

export default function PostList() {
    const { boardId } = useParams(); // URL 파라미터에서 boardId 가져오기
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getPostsByBoardId(boardId);
                setPosts(data);

                const response = await getboardsByBoardId(boardId);
                setBoards(response);
                //console.log(response);

            } catch (error) {
                console.error('게시글 목록 가져오기 실패:', error);
            }
            // console.log(posts);
            //console.log(posts.nickname);
        };

        fetchPosts();
    }, [boardId]);

    const handleCreatePost = () => {
        navigate(`/boards/${boardId}/create`);
    };

    return (
        <div className="p-4 max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">{boards.category} <br/> 게시글 목록</h2>
                <button
                    onClick={handleCreatePost}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                    게시글 작성
                </button>
            </div>

            <div className="flex flex-col gap-4">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <Link
                            key={post.id}
                            to={`/posts/${post.id}`}
                            className="border p-4 rounded hover:bg-gray-100"
                        >
                            <h3 className="text-xl font-semibold">{post.title}</h3>
                            <p className="text-gray-600 text-sm">작성자: {post.nickname}</p>
                            <p className="text-gray-500 text-xs">{new Date(post.createdAt).toLocaleString()}</p>
                        </Link>
                    ))
                ) : (
                    <p>게시글이 없습니다.</p>
                )}
            </div>
        </div>
    );
}
