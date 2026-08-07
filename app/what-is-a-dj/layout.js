import ArticleNav from '../../components/ArticleNav'

export default function ArticleLayout({ children }) {
  return (
    <>
      <div className="hero">
        <div className="hero__inner">
          <p className="hero__crumb">DJとは</p>
          <h1 className="hero__title">そもそもDJとは</h1>
        </div>
      </div>

      <main className="article">{children}</main>

      <ArticleNav slug="what-is-a-dj" />
    </>
  )
}
