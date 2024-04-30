import { ToggleTheme } from '@/components/toggle-theme'

export default function Home() {
  return (
    <div className="flex pt-4 items-center justify-between font-bold">
      <h1 className="text-2xl">Theodoro.dev</h1>
      <ToggleTheme />
    </div>
  )
}
