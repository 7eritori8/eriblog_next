import { createClient } from '../contentful-info'
import Header from "../components/Header";
import MainImage from "../components/MainImage";
import ArticleCard from "../components/ArticleCard";
import ViewOneLineContents from "../components/ViewOneLineContents"
export default function Home({ posts }) {
  return (
    <>
      <Header />
      <MainImage />
      <div className="contents-area mb-6">
        <h2 className="fc-white">最<span className="fc-red">新</span>記事</h2>
        <div className="article-cards bc-gray content-padding">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
      <div className="contents-area mb-6">
        <h2 className="fc-white"><span className="fc-red">１</span>行日記</h2>
        <div className="bc-gray content-padding">
          <div className="bc-white one-line-wrapper">

            <ViewOneLineContents posts={posts} />
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
      content_type: 'oneLinePost'
    })
      .catch((error) => {
        console.log(error)
        return error
      })
    // posts：id、作成日時、投稿テキストのオブジェクトが入った配列
    console.log({ response })
    const posts = response.items.map((responseItem) => {
      return (
        {
          id: responseItem.sys.id,
          createdAt: responseItem.sys.createdAt,
          // updatedAt: responseItems.sys.updatedAt,
          ...responseItem.fields,
        }
      )
    })
    return (posts)
  } catch (error) {
    throw new Error(error.message)
  }
}

export async function getStaticProps() {
  const posts = await getAllPostsFromAPI();
  // postsが無ければ404にリダイレクトする
  if (!posts) {
    return {
      notFound: true
    }
  }
  // 子コンポーネントに渡す用にpostsを返す
  console.log(posts)
  return {
    props: {
      posts
    }
  }
}