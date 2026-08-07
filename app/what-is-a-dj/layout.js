export default function ArticleLayout({ children }) {
  return (
    <main className="article">
      {children}
      <nav className="article-foot">
        <a href="/">← 目次へ戻る</a>
      </nav>
    </main>
  )
}
