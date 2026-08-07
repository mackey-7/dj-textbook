/*
  サイト全体の構成と読む順番の定義。
  ハンバーガーメニュー・トップの目次・記事の前後ナビは、すべて
  このファイルから生成する。記事を足す時はここだけ直せばよい。

  status: 'published' なら記事へのリンクが張られ、それ以外は
  「準備中」として一覧にだけ出る。
*/

export const sections = [
  {
    id: 'vision',
    en: 'VISION',
    ja: 'ビジョン',
    articles: [
      {
        slug: null,
        title: '音楽好きは、全員DJをやるべきだ',
        status: 'draft',
      },
      {
        slug: null,
        title: 'DJをやると、聴き方が変わる',
        status: 'draft',
      },
      {
        slug: null,
        title: '今から始めるのは遅くない',
        status: 'draft',
      },
      {
        slug: null,
        title: '入場料は下がった。到達点は変わっていない',
        status: 'draft',
      },
    ],
  },
  {
    id: 'purpose',
    en: 'PURPOSE',
    ja: 'この教科書の目的と役割',
    articles: [
      {
        slug: null,
        title: 'この教科書が引き受ける仕事',
        status: 'draft',
      },
      {
        slug: null,
        title: '事実と解釈を分けて書く',
        status: 'draft',
      },
      {
        slug: null,
        title: '更新方針と、議論への参加のしかた',
        status: 'draft',
      },
    ],
  },
  {
    id: 'what-is-a-dj',
    en: 'WHAT IS A DJ',
    ja: 'DJとは',
    articles: [
      {
        slug: 'what-is-a-dj',
        title: 'そもそもDJとは',
        status: 'published',
      },
      {
        slug: null,
        title: '現場の種類',
        status: 'draft',
      },
      {
        slug: null,
        title: '何から始めるか',
        status: 'draft',
      },
    ],
  },
  {
    id: 'author',
    en: 'AUTHOR',
    ja: '著者について',
    articles: [
      {
        slug: null,
        title: 'Mackey',
        status: 'draft',
      },
    ],
  },
]

/* セクションをまたいで全記事を読む順に並べたもの。前後ナビ用 */
export const flatArticles = sections.flatMap((section) =>
  section.articles.map((article) => ({ ...article, section: section.ja }))
)

/* 指定スラッグの前後の記事を返す。準備中の記事も順番には含める */
export function getNeighbors(slug) {
  const index = flatArticles.findIndex((a) => a.slug === slug)
  if (index === -1) return { prev: null, next: null, current: null }
  return {
    prev: index > 0 ? flatArticles[index - 1] : null,
    next: index < flatArticles.length - 1 ? flatArticles[index + 1] : null,
    current: flatArticles[index],
  }
}
