import { ToggleTheme } from './toggle-theme'

export function Header() {
  return (
    <div className="flex items-center justify-between pt-4 font-bold">
      <h1 className="text-2xl">Theodoro.dev</h1>
      <ToggleTheme />
    </div>
  )
}
