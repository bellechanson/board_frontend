import { useState } from 'react';
import { createPost } from '../api/boardApi'; // API 함수 가져오기
import { useParams, useNavigate } from 'react-router-dom';

export default function PostCreate() {
    const { boardId } = useParams(); // URL에서 boardId 추출
    const navigate = useNavigate(); // ✅ navigate 선언

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [nickname, setNickname] = useState('');

    // authorId는 로그인 유저에서 가져온다고 가정 (임시로 고정값 사용 가능)
    const authorId = 1;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const postData = {
                title,
                content,
                nickname,
                authorId,
            };
            const response = await createPost(boardId, postData);
            alert('게시글 작성 완료! ID: ' + response.id);
            setTitle('');
            setContent('');
            setNickname('');
            navigate(`/boards/${boardId}/posts`);            // 바꿔야함!!!! 1을 보드아이디로
            console.log(response);
        } catch (error) {
            console.error(error);
            alert('게시글 작성 실패');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-6">
            <div className="w-full max-w-4xl bg-white p-8 rounded shadow-md">
                <h2 className="text-4xl font-bold mb-8 text-center">게시글 작성</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                    {/* 제목 + 닉네임 한 줄 */}
                    <div className="flex gap-6">
                        <input
                            type="text"
                            placeholder="제목"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="border p-4 rounded flex-1 text-lg"
                            required
                        />
                        <input
                            type="text"
                            placeholder="닉네임"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            className="border p-4 rounded w-48 text-lg"
                            required
                        />
                    </div>

                    {/* 내용 입력 */}
                    <textarea
                        placeholder="내용"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="border p-4 rounded h-80 text-lg"
                        required
                    />

                    {/* 작성 버튼 오른쪽 정렬 */}
                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded w-32 text-lg">
                            작성
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
