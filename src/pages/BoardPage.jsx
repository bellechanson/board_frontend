import React, { useEffect, useState } from 'react';
import SidebarFilter from '../components/SidebarFilter';
import TagFilter from '../components/TagFilter';
import SortSelector from '../components/SortSelector';
import PostCard from '../components/PostCard';
import { getAllPosts } from '../api/postApi';

function BoardPage() {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [sort, setSort] = useState('latest');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getAllPosts();
                console.log("✅ 전체 게시글:", data);
                setPosts(data);
            } catch (err) {
                console.error('게시글 가져오기 실패:', err);
            }
        };
        fetchPosts();
    }, []);

    // ✅ 디버깅 로그 추가 위치
    posts.forEach(post => {
        console.log(
            "🔍 post.board.category =", post.board?.category,
            "🔸 selectedCategory =", selectedCategory
        );
    });

    // ✅ 통합 필터링
    const filteredPosts = posts
        .filter(post =>
            !selectedCategory || post.board?.category === selectedCategory
        )
        .filter(post =>
            selectedTags.length === 0 || selectedTags.every(tag => post.tags?.includes(tag))
        )
        .filter(post =>
            post.title.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
            if (sort === 'latest') {
                return new Date(b.createdAt) - new Date(a.createdAt);
            }
            return 0;
        });

    return (
        <div className="flex max-w-6xl mx-auto mt-10 gap-6">
            {/* 좌측 카테고리 필터 */}
            <SidebarFilter
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            {/* 우측 게시글 목록 */}
            <div className="flex-1">
                {/* 검색 + 정렬 */}
                <div className="flex items-center justify-between mb-4">
                    <input
                        type="text"
                        placeholder="검색어 입력..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border px-4 py-2 rounded w-full max-w-md"
                    />
                    <SortSelector sort={sort} onChange={setSort} />
                </div>

                {/* 태그 필터 */}
                <TagFilter selectedTags={selectedTags} setSelectedTags={setSelectedTags} />

                {/* 게시글 카드 리스트 */}
                <div className="space-y-4 mt-4">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
                    ) : (
                        <div className="text-center text-gray-400 py-12">게시글이 없습니다.</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BoardPage;
