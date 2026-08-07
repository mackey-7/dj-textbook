import './globals.css'

export const metadata = {
  title: 'DJの教科書',
  description:
    'クラブDJのための教科書。事実と、書き手の解釈を分けて書いています。無料・随時更新。',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Zen+Kaku+Gothic+New:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="site-header">
          <div className="site-header__inner">
            <a className="site-header__title" href="/">
              DJの教科書
            </a>
            <span className="site-header__tag">事実と、僕の解釈</span>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="shell">
            <p>
              DJの教科書 — クラブDJのための教科書。無料・随時更新。
              <br />
              書き手: Mackey
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
