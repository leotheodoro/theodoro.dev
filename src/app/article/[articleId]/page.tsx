import { Header } from '@/components/header'
import { articles } from '@/types/article'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { mockedArticle } from '@/assets/mock-article'
import { markdownComponents } from '@/utils/markdown-components'

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
          <div className="flex items-center gap-7">
            <Link href="/">
              <ArrowLeftIcon className="h-[24px] w-[24px]" />
            </Link>
            <h1 className="text-2xl font-bold">{article.title}</h1>
          </div>

          <Markdown
            className="mt-8 leading-7"
            components={markdownComponents}
            remarkPlugins={[remarkGfm]}
          >
            {mockedArticle}
          </Markdown>
        </main>
      )}
    </>
  )
}
