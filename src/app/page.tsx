import { ArticlesList } from '@/components/articles-list'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ArticlesList />
      </main>
    </>
  )
}
