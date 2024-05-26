'use client'
import { useTheme } from 'next-themes'

import { ClientGate } from '@/components/client-gate'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Icon from '@/components/ui/icon'

const states = ['system', 'light', 'dark'] as const

const themeIcon: Record<(typeof states)[number], keyof typeof Icon> = {
  system: 'sunMoon',
  light: 'sun',
  dark: 'moon',
}

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()

  const ThemeIcon =
    Icon[themeIcon[theme as (typeof states)[number]]] ?? (() => <></>)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" size="icon">
          <ClientGate>
            {() => <ThemeIcon className="h-[1.2rem] w-[1.2rem]" />}
          </ClientGate>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {states.map((state) => (
          <DropdownMenuItem
            key={state}
            onClick={() => setTheme(state)}
            className="capitalize"
          >
            {state}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeToggle
