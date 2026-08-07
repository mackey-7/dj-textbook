import Interpretation from './components/Interpretation'

// MDX内で使えるコンポーネントの登録。
// <Interpretation> を記事から呼べるようにするために必要。
export function useMDXComponents(components) {
  return {
    Interpretation,
    ...components,
  }
}
