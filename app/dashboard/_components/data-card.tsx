import { ReactNode } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Props {
  title: string
  icon?: ReactNode
  value: number
  delta: number
}

const DataCard = ({ title, icon = null, value: current, delta }: Props) => {
  const formattedCurrent = `$${current.toLocaleString()}`
  const formattedDelta = `${delta > 0 ? '+' : '-'}${delta}% from last month`
  return (
    <Card className="bg-gray-950 text-white">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{formattedCurrent}</div>
        <p className="text-xs text-gray-400">{formattedDelta}</p>
      </CardContent>
    </Card>
  )
}

export default DataCard
