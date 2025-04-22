import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ post }) {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className="bg-white p-4 rounded shadow hover:shadow-md transition cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{post.title}</h3>

                {/* ✅ 태그 배열이 undefined일 경우를 방어 */}
                <div className="flex gap-2 flex-wrap mb-2">
                    {(post.tags ?? []).map((tag, index) => (
                        <span key={index} className="text-xs bg-gray-200 px-2 py-1 rounded-full text-gray-600">
                            #{tag}
                        </span>
                    ))}
                </div>

                <p className="text-sm text-gray-500">
                    작성자: {post.author || post.authorId} • {new Date(post.createdAt).toLocaleString()}
                </p>
            </div>
        </Link>
    );
}

export default PostCard;
