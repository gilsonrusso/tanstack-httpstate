import { DataGrid } from '@mui/x-data-grid'
import type { ComponentProps } from 'react'

interface CommonTableProps extends ComponentProps<typeof DataGrid> {}

export const Table = ({ ...props }: CommonTableProps) => {
  return <DataGrid {...props} />
}
