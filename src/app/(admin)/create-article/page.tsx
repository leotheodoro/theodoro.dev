import { CreateArticleForm } from '@/components/create-article-form'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <CreateArticleForm />
      </main>
    </>
  )
}
