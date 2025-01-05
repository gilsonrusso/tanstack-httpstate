import type { TStatus } from '../../shared/interfaces'
import { CustomBadge } from '../badge/CustomBadge'

const statusLabels: { status: TStatus; label: string }[] = [
  { status: 'inprogress', label: 'In Progress' },
  { status: 'done', label: 'Done' },
  { status: 'failed', label: 'Failed' },
]

export const CustomLegend = () => {
  return (
    <div className="flex gap-2 mt-[-35px] ml-[15px]">
      {statusLabels.map(({ status, label }) => (
        <div key={status} className="flex gap-2 h-3 items-center">
          <CustomBadge status={status} />
          <small>{label}</small>
        </div>
      ))}
    </div>
  )
}
