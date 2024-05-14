import { ReactNode } from 'react'

import { Card, CardHeader, CardTitle } from '@/components/ui/card'

interface Props {
  title: string
  action?: ReactNode
  children: ReactNode
}

const TableCard = ({ title, action, children }: Props) => {
  return (
    <Card className="bg-gray-950 text-white">
      <CardHeader className="flex flex-row items-center justify-between px-6 py-4">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {action}
      </CardHeader>
      <div className="overflow-x-auto">{children}</div>
    </Card>
  )
}

export default TableCard