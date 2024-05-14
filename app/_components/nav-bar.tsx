import Link from 'next/link'

import Icon from '@/components/ui/icon'

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-800 bg-gray-900 p-4 text-gray-400 md:w-64 md:border-b-0 md:border-r">
      <ul className="space-y-4">
        <li>
          <Link className="flex items-center gap-2 hover:text-gray-50" href="#">
            <Icon.home className="h-5 w-5" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-2 hover:text-gray-50" href="#">
            <Icon.bankNote className="h-5 w-5" />
            Expenses
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-2 hover:text-gray-50" href="#">
            <Icon.users className="h-5 w-5" />
            Groups
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-2 hover:text-gray-50" href="#">
            <Icon.settings className="h-5 w-5" />
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
