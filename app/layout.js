import './globals.css'
import SiteHeader from '../components/SiteHeader'

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
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteHeader />

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
