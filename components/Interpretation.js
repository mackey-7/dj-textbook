import { sections } from '../content/structure'

/**
 * 解釈ブロック。
 * バッジを「僕の解釈」とすることで、誰の意見かがラベルだけで伝わる。
 * 検索から直接この記事に着地した読者でも説明を要しない。
 */
export default function Interpretation({ id, children }) {
  return (
    <aside className="interp" id={id}>
      <p className="interp__badge">僕の解釈</p>
      <div className="interp__body">{children}</div>
    </aside>
  )
}
