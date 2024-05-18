'use client'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import { cycle } from '@/utils/array'

const states = ['system', 'light', 'dark']

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(cycle({ value: theme, states }))}
    >
      {(theme === 'dark' && <Icon.moon className="h-[1.2rem] w-[1.2rem]" />) ||
        (theme === 'light' && (
          <Icon.sun className="h-[1.2rem] w-[1.2rem]" />
        )) || <Icon.sunMoon className="h-[1.2rem] w-[1.2rem]" />}
    </Button>
  )
}

export default ThemeToggle
