import Header from "../components/Header";
import MainImage from "../components/MainImage";
import ArticleCard from "../components/ArticleCard";

export default function Home() {
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
            <h3 className="one-line-title">徒然なるままに</h3>
            <p className="one-line-content one-line-border-bottom">つれづれなるままに、日暮らし硯に向かひて<span className="fc-green">2022/11/08</span></p>
            <p className="one-line-content one-line-border-bottom">心にうつりゆくよしなしごとを、そこはかとなく書きつくれば、<span className="fc-green">2022/11/08</span></p>
            <p className="one-line-content one-line-border- mb-2">あやしうこそものぐるほしけれ<span className="fc-green">2022/11/08</span></p>
          </div>
        </div>
      </div>

    </>
  )
}