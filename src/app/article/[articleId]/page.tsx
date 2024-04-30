import { Header } from '@/components/header'
import { articles } from '@/types/article'

export default function ArticlePage({
  params,
}: {
  params: { articleId: string }
}) {
  const { articleId } = params

  const article = articles.find((article) => article.id === articleId)

  return (
    <>
      <Header />
      {article && (
        <main>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </main>
      )}
    </>
  )
}
