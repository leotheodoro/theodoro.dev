import { Checkbox } from '@/components/ui/checkbox'

export const markdownComponents = {
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
