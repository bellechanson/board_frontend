import axios from 'axios';

const API_BASE_URL = 'http://localhost:8787';

// ✅ 댓글 목록 조회
export const getCommentsByPostId = async (postId) => {
    const res = await axios.get(`${API_BASE_URL}/comments`, {
        params: { postId }
    });
    return res.data;
};

// ✅ 댓글 작성
export const createComment = async (postId, commentData) => {
    const res = await axios.post(`${API_BASE_URL}/comments/${postId}`, commentData);
    return res.data;
};
