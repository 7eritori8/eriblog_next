export default function ArticleCard() {
    return (
        <>
            <div className="article-card">
                <div className="article-thumbnail"><img src="/thumbnail.jpg" alt="" /></div>
                <div className="article-info bc-white">
                    <p className="article-title  bc-white">ブログタイトル</p>
                    <p className="article-post-date  bc-white fc-red">2022.11.08</p>
                </div>
            </div>
        </>
    )
}