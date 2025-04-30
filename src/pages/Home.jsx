import { useNavigate } from "react-router-dom";
import '../style/Home.css';

function Home() {
    const navigate = useNavigate();
    const tags = ["#코딩", "#리액트", "#자바스크립트", "#프론트엔드"];

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            navigate("/board");
        }
    };

    return (
        <div className="home-page">
            <h1>STUDYLOG</h1>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="검색어를 입력하세요"
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="tags">
                {tags.map((tag, index) => (
                    <span key={index} className="tag" onClick={() => navigate("/boardcategory")}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Home;