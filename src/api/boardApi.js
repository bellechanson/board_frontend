import axios from 'axios';


const API_BASE_URL = 'http://localhost:8787/api/boards'; // 경로 수정

export const createBoard = async (boardData) => {
    const response = await axios.post(`${API_BASE_URL}`, boardData);
    return response.data;
};      // 게시판 생성 페이지

export const createPost = async (boardId, postData) => {
    const response = await axios.post(`${API_BASE_URL}/posts/${boardId}`, postData);
    return response.data;
};      // 게시글 작성 페이지

export const getPostsByBoardId = async (boardId) => {
    const response = await axios.get(`${API_BASE_URL}/posts?boardId=${boardId}`);
    return response.data;
};      // 게시글 리스트 페이지

export const getPostById = async (Id) => {
    const response = await axios.get(`${API_BASE_URL}/posts/${Id}`);
    return response.data;
};      // 게시글 상세 페이지

// ✅ 게시글에 달린 댓글 목록 조회
export const getCommentsByPostId = async (postId) => {
    const response = await axios.get(`${API_BASE_URL}/comments/${postId}`);
    console.log(response.data);
    return response.data;
};

// ✅ 댓글 작성
export const createComment = async (postId, commentData) => {
    const response = await axios.post(`${API_BASE_URL}/comments/${postId}`, commentData);
    return response.data;
};

// 게시글 삭제
export const deletePost = async (postId) => {
    const response = await axios.delete(`${API_BASE_URL}/posts/${postId}`);
    return response.data;
};

// 게시글 수정 (필요할 때)
export const updatePost = async (postId, updatedPostData) => {
    const response = await axios.put(`${API_BASE_URL}/posts/${postId}`, updatedPostData);
    return response.data;
};

// 카테고리 출력 함수
export const getboardsByBoardId = async (boardId) => {
    const response = await axios.get(`${API_BASE_URL}/${boardId}`);
    return response.data;
};