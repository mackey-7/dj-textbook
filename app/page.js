export default function Home() {
  return (
    <>
      <section className="masthead">
        <div className="masthead__inner">
          <h1 className="masthead__title">
            DJの
            <br />
            教科書
          </h1>
          <p className="masthead__tag">
            事実と、<strong>僕の解釈</strong>を分けて書いています。
          </p>
          <p className="masthead__lead">
            音楽好きは、全員DJをやるべきだと思っています。好きな曲を自分の手で繋ぐのは、単純に楽しい。
            そして一度やると、クラブもフェスも別物に聴こえます。そういう人が増えたら、シーンはもっと面白くなる。
            <br />
            日本語で読める体系的なDJの教科書がなかったので、書いています。無料、随時更新。
          </p>
        </div>
      </section>

      <main>
        <section className="chapter">
          <div className="chapter__inner">
            <h2 className="chapter__label">この教科書について</h2>
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
              <li>
                <span>
                  事実と解釈を分けて書く
                  <em className="toc__state">準備中</em>
                </span>
              </li>
              <li>
                <span>
                  著者について
                  <em className="toc__state">準備中</em>
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="chapter chapter--band">
          <div className="chapter__inner">
            <h2 className="chapter__label">DJをはじめる前に</h2>
            <ul className="toc">
              <li>
                <a href="/what-is-a-dj">
                  そもそもDJとは
                  <em className="toc__state">公開中</em>
                </a>
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
      </main>
    </>
  )
}
