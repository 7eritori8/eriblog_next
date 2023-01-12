import Header from "../components/Header";
import MainImage from "../components/MainImage";
import Link from 'next/link'

export default function detail() {
    return (
        <>
            <Header />
            <MainImage />
            <div className="articleArea">
                <div className="articleHeader fc-white">
                    <h1>記事タイトル</h1>
                    <p>20<span className="fc-red">22</span>.11.23</p>
                </div>
                <div className="articleBody bc-white">
                    <div className="articleThumbnail mb-12"><img src="/thumbnail.jpg" alt="サムネイル" /></div>
                    <div className="articleText">
                        <h2 className="textHeader"><span>◆</span>記事見出し</h2>
                        <p>text text text text text text text text text text  本文    </p>
                        <p>本文本文　<Link href="/"><a>リンク</a></Link>text</p>
                    </div>
                </div>
            </div>
        </>
    )
}
