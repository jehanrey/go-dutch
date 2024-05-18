import Link from 'next/link'

import Icon from '@/components/ui/icon'

type Menu = {
  name: string
  href: string
  icon: keyof typeof Icon
}

const menus: Array<Menu> = [
  { name: 'Dashboard', href: '#', icon: 'home' },
  { name: 'Expenses', href: '#', icon: 'bankNote' },
  { name: 'Groups', href: '#', icon: 'users' },
  { name: 'Settings', href: '#', icon: 'settings' },
]

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-300 bg-gray-200 p-4 text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 md:w-64 md:border-b-0 md:border-r">
      <ul className="space-y-4">
        {menus.map(({ name, href, icon }) => {
          const MenuIcon = Icon[icon]
          return (
            <li key={name}>
              <Link
                className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-50"
                href={href}
              >
                <MenuIcon className="h-5 w-5" />
                {name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
