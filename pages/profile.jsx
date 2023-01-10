import Header from "../components/Header";
import MainImage from "../components/MainImage";

export default function detail() {
    return (
        <>
            <Header />
            <MainImage />
            <div className="articleArea">
                <div className="articleHeader fc-white">
                    <h1>about <span className="fc-red">m</span>e</h1>
                </div>
                <div className="articleBody bc-white">
                    <div className="articleThumbnail mb-12"><img src="/profileImg.png" alt="サムネイル" /></div>
                    <div className="articleText">
                        <section className="mb-5">
                            <h3 className="blackHighlight">ざっくりプロフィール</h3>
                            <p>名前：森脇絵理</p>
                        </section>
                        <section className="mb-5">
                            <h3 className="blackHighlight">IT経験</h3>
                            <p>実務経験：</p>
                            <p>勉強したこと</p>
                            <p>qiita：<a href="https://qiita.com/aliceroot0678">https://qiita.com/aliceroot0678</a></p>

                        </section>
                        <section>
                            <h3 className="blackHighlight"></h3>
                            <p>誕生日：7月8日</p>
                            <p>血液型：A型</p>
                            <p>出身：島根県</p>
                            <p>経験職種：看護師、飲食店</p>
                            <p>趣味：ゲーム、睡眠、温泉、おいしいもの</p>

                        </section>
                    </div>
                </div>
            </div>

        </>

    )
}