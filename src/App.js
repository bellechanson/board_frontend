import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import PostWrite from './pages/PostWrite';
import PostEdit from './pages/PostEdit';
import BoardPage from './pages/BoardPage'; // 🔥 인프런 스타일 게시판


function App() {
    return (
        <Router>
            <Routes>
                {/* ✅ 메인 페이지를 BoardPage로 설정 */}
                <Route path="/" element={<BoardPage />} />

                {/* 기존 PostList는 별도 경로로 이동 */}
                <Route path="/classic" element={<PostList />} />

                <Route path="/posts/:id" element={<PostDetail />} />

                {/* 게시글 상세/작성/수정 */}
                <Route path="/write" element={<PostWrite />} />
                <Route path="/posts/:id/edit" element={<PostEdit />} />
            </Routes>
        </Router>
    );
}

export default App;
