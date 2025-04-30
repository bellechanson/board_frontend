import { useState } from 'react';
import { updatePost } from '../api/boardApi'; // 수정 API 가져오기

export default function PostEdit({ post, onEditComplete }) {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const updatedPost = {
                ...post,
                title,
                content,
            };
            await updatePost(post.id, updatedPost);
            alert('게시글이 수정되었습니다.');
            onEditComplete(); // 수정 완료 후 콜백 호출
        } catch (error) {
            console.error('게시글 수정 실패:', error);
            alert('수정 실패');
        }
    };

    return (
        <div className="p-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">게시글 수정</h2>
            <form onSubmit={handleUpdate} className="flex flex-col gap-4">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-2 rounded text-lg"
                    placeholder="제목을 입력하세요"
                    required
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="border p-2 rounded h-80 text-lg"
                    placeholder="내용을 입력하세요"
                    required
                />
                <div className="flex justify-end">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded w-32">
                        수정 완료
                    </button>
                </div>
            </form>
        </div>
    );
}
