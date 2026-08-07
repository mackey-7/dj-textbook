import { getNeighbors } from '../content/structure'

/**
 * 記事末尾のナビゲーション。
 * 教科書は順番に読むものなので「次へ」を主役にし、前と目次は添える。
 */
export default function ArticleNav({ slug }) {
  const { prev, next } = getNeighbors(slug)

  return (
    <nav className="article-nav">
      {next && (
        <div className="article-nav__next">
          <p className="article-nav__label">次に読む</p>
          {next.status === 'published' ? (
            <a className="article-nav__title" href={`/${next.slug}`}>
              {next.title} →
            </a>
          ) : (
            <p className="article-nav__title article-nav__title--draft">
              {next.title}
              <em className="article-nav__state">準備中</em>
            </p>
          )}
        </div>
      )}

      <div className="article-nav__sub">
        {prev && prev.status === 'published' ? (
          <a href={`/${prev.slug}`}>← {prev.title}</a>
        ) : prev ? (
          <span>← {prev.title}</span>
        ) : (
          <span />
        )}
        <a href="/">もくじ</a>
      </div>
    </nav>
  )
}
