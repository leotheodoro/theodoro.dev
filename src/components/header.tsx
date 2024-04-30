import Link from 'next/link'
import { ToggleTheme } from './toggle-theme'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

export function Header() {
  return (
    <div className="flex items-center justify-between pb-16 pt-4 font-bold">
      <Link href="/">
        <h1 className="text-2xl">Theodoro.dev</h1>
      </Link>
      <div className="flex items-center gap-4">
        <Input type="email" placeholder="grep |" />
        <Button type="submit">
          <MagnifyingGlassIcon />
        </Button>
        <ToggleTheme />
      </div>
    </div>
  )
}
