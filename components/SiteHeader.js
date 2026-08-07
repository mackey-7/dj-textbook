'use client'

import { useState } from 'react'
import { sections } from '../content/structure'

/**
 * サイトヘッダー。
 * ハンバーガーに全セクションの構成を入れることで、どのページからでも
 * 目次に戻らず目的の記事へ飛べるようにしている。
 */
export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__title" href="/" onClick={() => setOpen(false)}>
          DJの教科書
        </a>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-label="メニュー"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '閉じる' : 'もくじ'}
        </button>
      </div>

      {open && (
        <nav className="menu">
          <div className="menu__inner">
            {sections.map((section) => (
              <div className="menu__section" key={section.id}>
                <p className="menu__label">
                  <span className="menu__en">{section.en}</span>
                  {section.ja}
                </p>
                <ul className="menu__list">
                  {section.articles.map((article) => (
                    <li key={article.title}>
                      {article.status === 'published' ? (
                        <a href={`/${article.slug}`} onClick={() => setOpen(false)}>
                          {article.title}
                        </a>
                      ) : (
                        <span>
                          {article.title}
                          <em className="menu__state">準備中</em>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
