import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BoardCreate from './pages/BoardCreate';
import PostCreate from "./pages/PostCreate";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import BoardCategory from "./pages/BoardCategory";
import Header from "./components/Header";
import Home from "./pages/Home";

import "./App.css"

function App() {

    return (

        <Router>
            <Header />
            <div className="wrap">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/board" element={<BoardCreate />} />
                <Route path="/boards/:boardId/create" element={<PostCreate />} />
                <Route path="/boards/:boardId/posts" element={<PostList />} />
                <Route path="/posts/:postId" element={<PostDetail />} />
                <Route path="/boardcategory" element={<BoardCategory />} />

            </Routes>
        </div>
        </Router>
    );
}

export default App;

