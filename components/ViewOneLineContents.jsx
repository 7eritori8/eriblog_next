const ViewOneLineContents = (props) => {
    console.log(props.posts)
    const oneLineTexts =
        props.posts.map((post) => {
            return (
                <p className="one-line-content one-line-border-bottom">{post.oneLinetext}<span className="fc-green">{post.createdAt}</span></p>

            )
        })
    return (
        <>
            {oneLineTexts}
        </>
    )
}
export default ViewOneLineContents
