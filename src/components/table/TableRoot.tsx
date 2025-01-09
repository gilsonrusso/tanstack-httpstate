import Box from '@mui/material/Box'
import type { ComponentProps } from 'react'
import { cn } from '../../utils/ClasseMerge'

interface TableRootProps extends ComponentProps<typeof Box> {}
export const TableRoot = ({ children, className, ...rest }: TableRootProps) => {
  return (
    <Box
      {...rest}
      className={cn('', className)}
      sx={{ height: 600, width: '100%' }}
    >
      {children}
    </Box>
  )
}
