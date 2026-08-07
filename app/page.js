import { sections } from '../content/structure'

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
        {sections.map((section) => (
          <section className="chapter" id={section.id} key={section.id}>
            <div className="chapter__inner">
              <h2 className="chapter__label">
                <span className="chapter__en">{section.en}</span>
                {section.ja}
              </h2>
              <ul className="toc">
                {section.articles.map((article) => (
                  <li key={article.title}>
                    {article.status === 'published' ? (
                      <a href={`/${article.slug}`}>{article.title}</a>
                    ) : (
                      <span>
                        {article.title}
                        <em className="toc__state">準備中</em>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </main>
    </>
  )
}
