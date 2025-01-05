import Badge from '@mui/material/Badge'
import type { TStatus } from '../../shared/interfaces'
import { cn } from '../../utils/ClasseMerge'

type TCustomBadgeProps = {
  status: TStatus
}

export const CustomBadge = ({ status }: TCustomBadgeProps) => {
  return (
    <Badge
      //   badgeContent={4}
      className={cn(
        'rounded-full flex items-center justify-center',
        status === 'inprogress' && 'bg-yellow-500',
        status === 'done' && 'bg-green-500',
        status === 'failed' && 'bg-red-500',
      )}
    >
      <div className="w-3 h-3">{}</div>
    </Badge>
  )
}
