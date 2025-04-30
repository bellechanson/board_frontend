import "../style/Header.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="header">
            <h1 onClick={() => navigate("/")} className="logo">
                STUDYLOG
            </h1>
            <nav className="nav-menu">
                <span onClick={() => navigate("/board")}>게시판</span>
                <span onClick={() => navigate("/")}>메뉴1</span>
                <span onClick={() => navigate("/")}>메뉴2</span>
            </nav>
            <div className="header-buttons">
                {isLoggedIn ? (
                    <>
                        <button>
                            로그아웃
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={() => navigate("/login")}>
                            로그인
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Header