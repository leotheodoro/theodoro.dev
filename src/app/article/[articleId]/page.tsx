import { Header } from '@/components/header'
import { articles } from '@/types/article'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { mockedArticle } from '@/assets/mock-article'
import { Checkbox } from '@/components/ui/checkbox'

export default function ArticlePage({
  params,
}: {
  params: { articleId: string }
}) {
  const { articleId } = params

  const article = articles.find((article) => article.id === articleId)

  const components = {
    h1: ({ ...props }) => (
      <h1
        className="my-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
        {...props}
      />
    ),
    h2: ({ ...props }) => (
      <h2
        className="my-5 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
        {...props}
      />
    ),
    h3: ({ ...props }) => (
      <h3
        className="my-5 scroll-m-20 text-2xl font-semibold tracking-tight"
        {...props}
      />
    ),
    h4: ({ ...props }) => (
      <h4
        className="my-5 scroll-m-20 text-xl font-semibold tracking-tight"
        {...props}
      />
    ),
    p: ({ ...props }) => (
      <p className="my-5 leading-7 [&:not(:first-child)]:mt-6" {...props} />
    ),
    blockquote: ({ ...props }) => (
      <blockquote className="my-5 mt-6 border-l-2 pl-6 italic" {...props} />
    ),
    table: ({ ...props }) => <table className="my-5 w-full" {...props} />,
    tr: ({ ...props }) => (
      <tr className="m-0 my-5 border-t p-0 even:bg-muted" {...props} />
    ),
    th: ({ ...props }) => (
      <th
        className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
        {...props}
      />
    ),
    td: ({ ...props }) => (
      <td
        className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
        {...props}
      />
    ),
    pre: ({ ...props }) => (
      <pre
        className="relative rounded bg-zinc-900 px-4 py-6 font-mono text-sm font-semibold text-white"
        {...props}
      />
    ),
    code: ({ ...props }) => (
      <code
        className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
        {...props}
      />
    ),
    ul: ({ ...props }) => (
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />
    ),
    input: ({ ...props }) => <Checkbox {...props} />,
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

          <Markdown
            className="mt-8 leading-7"
            components={components}
            remarkPlugins={[remarkGfm]}
          >
            {mockedArticle}
          </Markdown>
        </main>
      )}
    </>
  )
}
