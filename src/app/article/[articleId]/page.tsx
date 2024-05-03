import { Header } from '@/components/header'
import { articles } from '@/types/article'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import Markdown from 'react-markdown'
import { mockedArticle } from '@/assets/mock-article'

export default function ArticlePage({
  params,
}: {
  params: { articleId: string }
}) {
  const { articleId } = params

  const article = articles.find((article) => article.id === articleId)

  const components = {
    h1: ({ ...props }) => <h1 className="text-2xl font-bold" {...props} />,
    h2: ({ ...props }) => <h1 className="text-xl font-bold" {...props} />,
    pre: ({ ...props }) => (
      <pre
        className="relative rounded bg-zinc-900 px-4 py-6 font-mono text-sm font-semibold text-white"
        {...props}
      />
    ),
  }

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

          <Markdown className="mt-4 leading-7" components={components}>
            {mockedArticle}
          </Markdown>
        </main>
      )}
    </>
  )
}
