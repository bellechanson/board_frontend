import React, { useEffect, useState } from 'react';
import { getAllPosts } from '../api/postApi';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Pagination from '../components/Pagination'; // ✅ 페이지네이션 컴포넌트 추가

function PostList() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const postsPerPage = 5; // 🔧 페이지당 게시글 수
    const totalPages = Math.ceil(posts.length / postsPerPage);

    useEffect(() => {
        const loadPosts = async () => {
            const data = await getAllPosts();
            setPosts(data);
        };
        loadPosts();
    }, []);

    // ✅ 현재 페이지에 맞게 게시글 자르기
    const paginatedPosts = posts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">📰 게시글 목록</h2>
                <Link to="/write">
                    <Button color="yellow">✍️ 새 글 쓰기</Button>
                </Link>
            </div>

            <div className="grid gap-4">
                {paginatedPosts.map((post) => (
                    <Link to={`/posts/${post.id}`} key={post.id}>
                        <div className="p-4 border rounded shadow hover:shadow-md hover:bg-gray-50 transition">
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">{post.title}</h3>
                            <p className="text-sm text-gray-500">
                                작성자: {post.authorId} • {new Date(post.createdAt).toLocaleString()}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* ✅ 페이지네이션 하단 추가 */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </div>
    );
}

export default PostList;
