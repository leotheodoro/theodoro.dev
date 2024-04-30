'use client'

import * as React from 'react'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ToggleTheme() {
  const { setTheme, theme } = useTheme()

  console.log({ theme })

  function toggleTheme() {
    if (theme === 'light') {
      return setTheme('dark')
    }

    return setTheme('light')
  }

  return (
    <Button onClick={toggleTheme} variant={'ghost'}>
      {theme === 'light' ? (
        <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <SunIcon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  )
}
