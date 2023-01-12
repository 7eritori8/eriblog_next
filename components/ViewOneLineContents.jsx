const ViewOneLineContents = (props) => {
    const oneLineTexts =
        props.posts.map((post) => {
            let createdAt = new Date(post.createdAt)
            let formatedCreatedAt = `${createdAt.getFullYear()}年${createdAt.getMonth() + 1}月${createdAt.getDate()}日`;
            return (
                <p className="one-line-content one-line-border-bottom" key={post.id}>
                    {post.oneLinetext}<span className="fc-green">{formatedCreatedAt}</span>
                </p>

            )
        })
    return (
        <>
            {oneLineTexts}
        </>
    )
}
export default ViewOneLineContents
