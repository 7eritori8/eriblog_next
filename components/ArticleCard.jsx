
const ArticleCard = (props) => {
    const blogPosts =
        props.posts.map((post) => {
            let createdAt = new Date(post.createdAt)
            let formatedCreatedAt = `${createdAt.getFullYear()}.${createdAt.getMonth() + 1}.${createdAt.getDate()}`;
            return (
                <>
                    <div className="article-card">

                        <div className="article-thumbnail"><img src="/thumbnail.jpg" alt="" /></div>
                        <div className="article-info bc-white">
                            <p className="article-title  bc-white">{post.blogTitle}</p>
                            <p className="article-post-date  bc-white fc-red">{formatedCreatedAt}</p>
                        </div>
                    </div>
                </>

            )
        })
    return (
        <>
            {blogPosts}
        </>
    )
}
export default ArticleCard





// export default function ArticleCard() {
//     return (
//         <>
//             <div className="article-card">
//                 <div className="article-thumbnail"><img src="/thumbnail.jpg" alt="" /></div>
//                 <div className="article-info bc-white">
//                     <p className="article-title  bc-white">ブログタイトル</p>
//                     <p className="article-post-date  bc-white fc-red">2022.11.08</p>
//                 </div>
//             </div>
//         </>
//     )
// }