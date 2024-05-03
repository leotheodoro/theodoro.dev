import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export function CreateArticleForm() {
  return (
    <main className="w-full">
      <section className="px-4 py-8 md:px-6 md:py-12 lg:py-16">
        <div className="prose prose-gray dark:prose-invert mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Add New Article
          </h1>
          <form className="mt-10 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Enter article title" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                className="min-h-[300px]"
                id="description"
                placeholder="Write article description in Markdown"
              />
            </div>
            <Button className="w-full" type="submit">
              Save Article
            </Button>
          </form>
        </div>
      </section>
    </main>
  )
}
