export default function ArticleLayout({ children }) {
  return (
    <>
      <div className="hero">
        <div className="hero__inner">
          <p className="hero__crumb">
            <a href="/">‹ DJをはじめる前に</a>
          </p>
          <h1 className="hero__title">そもそもDJとは</h1>
        </div>
      </div>

      <main className="article">{children}</main>

      <nav className="article-foot">
        <a href="/">‹ 目次へ戻る</a>
      </nav>
    </>
  )
}
