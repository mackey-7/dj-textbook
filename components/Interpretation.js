'use client'

import { useState } from 'react'

/**
 * 解釈ブロック。
 * 事実と区別するため視覚的に浮かせ、バッジ自体が自己説明的に振る舞う。
 * 検索から直接この記事に着地した読者でも、バッジを押せば意味が分かる。
 */
export default function Interpretation({ id, children }) {
  const [open, setOpen] = useState(false)

  return (
    <aside className="interp" id={id}>
      <div className="interp__head">
        <button
          type="button"
          className="interp__badge"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          解釈
        </button>
        <span className="interp__hint">タップで説明</span>
      </div>

      {open && (
        <p className="interp__note">
          ここから先は書き手の意見です。事実ではないので、反対の立場もありえます。
          違うと思ったら、ページ下部のフォームから聞かせてください。
        </p>
      )}

      <div className="interp__body">{children}</div>
    </aside>
  )
}
