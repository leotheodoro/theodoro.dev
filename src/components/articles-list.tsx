import { articles } from '@/types/article'
import { ArticleItem } from './article-item'

export function ArticlesList() {
  return (
    <ul>
      {articles.map((article) => (
        <ArticleItem article={article} key={article.id} />
      ))}
    </ul>
  )
}
