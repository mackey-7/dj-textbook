export default function Home() {
  return (
    <>
      <section className="masthead">
        <div className="masthead__inner">
          <h1 className="masthead__title">
            EVERYONE
            <br />
            SHOULD DJ.
          </h1>
          <p className="masthead__lead">
            音楽好きは、全員DJをやるべきだと思っています。
            好きな曲を自分の手で繋ぐのは、単純に楽しい。
            そして一度やると、クラブもフェスも別物に聴こえます。
          </p>
        </div>
      </section>

      <main>
        <section className="chapter" id="vision">
          <div className="chapter__inner">
            <h2 className="chapter__label">ビジョン</h2>
            <ul className="toc">
              <li>
                <span>
                  音楽好きは、全員DJをやるべきだ
                  <em className="toc__state">準備中</em>
                </span>
              </li>
              <li>
                <span>
                  やると耳が変わる
                  <em className="toc__state">準備中</em>
                </span>
              </li>
              <li>
                <span>
                  今から始めるのは遅くない
                  <em className="toc__state">準備中</em>
                </span>
              </li>
              <li>
                <span>
                  入場料は下がった。到達点は変わっていない
                  <em className="toc__state">準備中</em>
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="chapter" id="purpose">
          <div className="chapter__inner">
            <h2 className="chapter__label">この教科書の目的と役割</h2>
            <ul className="toc">
              <li>
                <span>
                  この教科書が引き受ける仕事
                  <em className="toc__state">準備中</em>
                </span>
              </li>
              <li>
                <span>
                  事実と解釈を分けて書く
                  <em className="toc__state">準備中</em>
                </span>
              </li>
              <li>
                <span>
                  更新方針と、議論への参加のしかた
                  <em className="toc__state">準備中</em>
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="chapter" id="what-is-a-dj">
          <div className="chapter__inner">
            <h2 className="chapter__label">DJとは</h2>
            <ul className="toc">
              <li>
                <a href="/what-is-a-dj">
                  そもそもDJとは
                  <em className="toc__state">公開中</em>
                </a>
              </li>
              <li>
                <span>
                  現場の種類
                  <em className="toc__state">準備中</em>
                </span>
              </li>
              <li>
                <span>
                  何から始めるか
                  <em className="toc__state">準備中</em>
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="chapter" id="author">
          <div className="chapter__inner">
            <h2 className="chapter__label">著者について</h2>
            <ul className="toc">
              <li>
                <span>
                  Mackey
                  <em className="toc__state">準備中</em>
                </span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
