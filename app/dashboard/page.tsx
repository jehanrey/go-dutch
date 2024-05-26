import Link from 'next/link'

import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import DataCard from './_components/data-card'
import TableCard from './_components/table-card'

const DATA_DUMMY = [
  {
    title: 'Total Expenses',
    icon: <Icon.dollarSign className="h-4 w-4 text-gray-400" />,
    value: 4231.89,
    delta: 20.1,
  },
  {
    title: 'Pending Expenses',
    icon: <Icon.clock className="h-4 w-4 text-gray-400" />,
    value: 1350,
    delta: 12.3,
  },
  {
    title: 'Upcoming Expenses',
    icon: <Icon.calendar className="h-4 w-4 text-gray-400" />,
    value: 2800,
    delta: 15,
  },
]

const Dashboard = () => {
  return (
    <div className="flex-1 p-4 md:p-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {DATA_DUMMY.map((data) => (
          <DataCard key={data.title} {...data} />
        ))}
      </div>
      <div className="mt-4 md:mt-8">
        <TableCard
          title="Recent Transactions"
          action={
            <Link
              className="text-sm font-medium text-gray-400 hover:text-gray-50"
              href="#"
            >
              View all
            </Link>
          }
        >
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="whitespace-nowrap">Date</TableHead>
                <TableHead className="whitespace-nowrap">Description</TableHead>
                <TableHead className="whitespace-nowrap text-right">
                  Amount
                </TableHead>
                <TableHead className="whitespace-nowrap">Group</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="whitespace-nowrap">2023-04-15</TableCell>
                <TableCell className="whitespace-nowrap">
                  Dinner at Acme Restaurant
                </TableCell>
                <TableCell className="whitespace-nowrap text-right">
                  $75.00
                </TableCell>
                <TableCell className="whitespace-nowrap">Friends</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="whitespace-nowrap">2023-04-10</TableCell>
                <TableCell className="whitespace-nowrap">
                  Groceries at Supermart
                </TableCell>
                <TableCell className="whitespace-nowrap text-right">
                  $125.50
                </TableCell>
                <TableCell className="whitespace-nowrap">Roommates</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="whitespace-nowrap">2023-04-05</TableCell>
                <TableCell className="whitespace-nowrap">
                  Movie tickets
                </TableCell>
                <TableCell className="whitespace-nowrap text-right">
                  $30.00
                </TableCell>
                <TableCell className="whitespace-nowrap">Family</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableCard>
      </div>
      <div className="mt-4 md:mt-8">
        <TableCard
          title="Manage Groups"
          action={
            <Button
              className="text-gray-400 hover:text-gray-50"
              size="sm"
              variant="outline"
            >
              Create Group
            </Button>
          }
        >
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="whitespace-nowrap">Group Name</TableHead>
                <TableHead className="whitespace-nowrap">Members</TableHead>
                <TableHead className="whitespace-nowrap text-right">
                  Total Expenses
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="whitespace-nowrap">Friends</TableCell>
                <TableCell className="whitespace-nowrap">3</TableCell>
                <TableCell className="whitespace-nowrap text-right">
                  $450.00
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="whitespace-nowrap">Roommates</TableCell>
                <TableCell className="whitespace-nowrap">2</TableCell>
                <TableCell className="whitespace-nowrap text-right">
                  $800.00
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="whitespace-nowrap">Family</TableCell>
                <TableCell className="whitespace-nowrap">4</TableCell>
                <TableCell className="whitespace-nowrap text-right">
                  $1,200.00
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableCard>
      </div>
    </div>
  )
}

export default Dashboard
