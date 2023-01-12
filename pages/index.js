import { createClient } from '../contentful-info'
import Header from "../components/Header";
import MainImage from "../components/MainImage";
import ArticleCard from "../components/ArticleCard";
import ViewOneLineContents from "../components/ViewOneLineContents"
export default function Home({ blogPosts, onLinePosts }) {
  return (
    <>
      <Header />
      <MainImage />
      <div className="contents-area mb-6">
        <h2 className="fc-white">最<span className="fc-red">新</span>記事</h2>
        <div className="article-cards bc-gray content-padding">
          <ArticleCard posts={blogPosts} />
        </div>
      </div>
      <div className="contents-area mb-6">
        <h2 className="fc-white"><span className="fc-red">１</span>行日記</h2>
        <div className="bc-gray content-padding">
          <div className="bc-white one-line-wrapper">

            <ViewOneLineContents posts={onLinePosts} />
          </div>
        </div>
      </div>

    </>
  )
}

// ContentfulAPIから１行日記データを取得する処理
const getAllPostsFromAPI = async () => {
  try {
    // データはresponseに格納
    const response = await createClient().getEntries({
    })
      .catch((error) => {
        console.log(error)
        return error
      })
    // id、作成日時、投稿テキストのオブジェクトが入った配列を１行日記とブログに分けて作成
    const blogPosts = response.items.filter((responseItem) => {
      return (responseItem.sys.contentType.sys.id === 'blogPost')
    }).map((postItem) => {
      return ({
        id: postItem.sys.id,
        createdAt: postItem.sys.createdAt,
        ...postItem.fields,
      })
    })
    const oneLinePosts = response.items.filter((responseItem) => {
      return (responseItem.sys.contentType.sys.id === 'oneLinePost')
    }).map((postItem) => {
      return ({
        id: postItem.sys.id,
        createdAt: postItem.sys.createdAt,
        ...postItem.fields,
      })
    })
    return ({
      oneLinePosts: oneLinePosts,
      blogPosts: blogPosts
    }
    )
  } catch (error) {
    throw new Error(error.message)
  }
}

export async function getStaticProps() {
  const posts = await getAllPostsFromAPI();
  console.log(posts.oneLinePosts)

  // postsが無ければ404にリダイレクトする
  if (!posts) {
    return {
      notFound: true
    }
  }
  // 子コンポーネントに渡す用のデータ
  return {
    props: {
      onLinePosts: posts.oneLinePosts,
      blogPosts: posts.blogPosts
    }
  }
}

