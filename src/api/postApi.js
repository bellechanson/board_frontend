import axios from 'axios';

const API_BASE_URL = 'http://localhost:8787/api/posts'; // ✅ 수정된 베이스 경로

// ✅ 특정 boardId에 대한 게시글 목록
export const getPostsByBoardId = async (boardId) => {
    const res = await axios.get(`${API_BASE_URL}?boardId=${boardId}`);
    return res.data;
};

// ✅ 게시글 ID로 단건 조회
export const getPostById = async (id) => {
    const res = await axios.get(`http://localhost:8787/api/posts/${id}`); // ✅ 이 경로가 맞아야 합니다
    return res.data;
};

// ✅ 전체 게시글 조회
export const getAllPosts = async () => {
    const res = await axios.get(`${API_BASE_URL}/all`);
    return res.data;
};

// ✅ 게시글 작성
export const createPost = async (boardId, postData) => {
    const res = await axios.post(`${API_BASE_URL}/${boardId}`, postData);
    return res.data;
};

// ✅ 페이지네이션 게시글 조회
export const getPagedPosts = async (page = 0, size = 5) => {
    const res = await axios.get(`${API_BASE_URL}/paged`, {
        params: { page, size }
    });
    return res.data;
};

// ✅ 게시글 삭제
export const deletePost = async (id) => {
    const res = await axios.delete(`${API_BASE_URL}/${id}`);
    return res;
};

// ✅ 게시글 수정
export const updatePost = async (id, postData) => {
    const res = await axios.put(`${API_BASE_URL}/${id}`, postData);
    return res.data;
};


