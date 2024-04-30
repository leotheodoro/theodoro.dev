import { Article } from '@/types/article'
import Link from 'next/link'

interface ArticleItemProps {
  article: Article
}

export function ArticleItem({ article }: ArticleItemProps) {
  return (
    <li className="py-4">
      <Link href="#">
        <h4 className="text-xl font-semibold">{article.title}</h4>
      </Link>
      <span className="text-sm">
        Published on {article.publishedAt.toLocaleDateString()} | Modified on{' '}
        {article.updatedAt.toLocaleDateString()}
      </span>
    </li>
  )
}
