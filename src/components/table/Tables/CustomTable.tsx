import Link from '@mui/material/Link'
import Skeleton from '@mui/material/Skeleton'
import type {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
} from '@mui/x-data-grid'
import { type ComponentProps, useState } from 'react'
import type { IClsCommits } from '../../../shared/interfaces'
import { CustomBadge } from '../../badge/CustomBadge'
import { Table } from './Table'

interface TCustomTableProps
  extends Omit<ComponentProps<typeof DataGrid>, 'columns'> {
  isLoading?: boolean
  paginationSize?: 5 | 10 | 20
  rows?: IClsCommits[]
}

function ExpandableCell({ value }: GridRenderCellParams) {
  const [expanded, setExpanded] = useState<boolean>(false)
  const limitlines = 4

  const values = Array.isArray(value) ? value : []
  return (
    <div>
      {expanded
        ? values.map((val: string, index: number) => (
            <div key={`${val + index}`}>
              {index + 1}: {val}
            </div>
          ))
        : values.slice(0, limitlines).map((val: string, index: number) => (
            <div key={`${val + index}`}>
              {' '}
              {index + 1}: {val}
            </div>
          ))}
      {values.length > limitlines && (
        <Link
          type="button"
          component="button"
          sx={{ fontSize: 'inherit', letterSpacing: 'inherit' }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'view less' : `view more (${values.length - limitlines})`}
        </Link>
      )}
      {values.length === 0 && <div>No commits</div>}
    </div>
  )
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 300 },
  {
    field: 'clBase',
    headerName: 'CL Base',
    width: 150,
    editable: false,
    renderCell: (params) => (
      <div className="flex items-center justify-between gap-2">
        {params.value} {<CustomBadge status={params.row.status} />}
      </div>
    ),
  },
  {
    field: 'commits',
    headerName: 'Commits',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 400,
    renderCell: (params: GridRenderCellParams) =>
      params.row.status === 'inprogress' ? (
        <Skeleton animation="wave" width="100%" />
      ) : params.row.status === 'failed' ? (
        <div>No commits</div>
      ) : (
        <ExpandableCell {...params} />
      ),
  },
]

export const CustomTable = ({
  isLoading,
  paginationSize = 5,
  rows,
}: TCustomTableProps) => {
  return (
    <Table
      loading={isLoading}
      rows={rows}
      columns={columns}
      slotProps={{
        loadingOverlay: {
          variant: 'skeleton',
          noRowsVariant: 'skeleton',
        },
      }}
      sx={{
        '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': { py: '8px' },
        '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': {
          py: '15px',
        },
        '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': {
          py: '22px',
        },
      }}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: paginationSize,
          },
        },
      }}
      getRowHeight={() => 'auto'}
      getEstimatedRowHeight={() => 100}
      pageSizeOptions={[5, 10, 20, { value: -1, label: 'All' }]}
      // checkboxSelection
      disableRowSelectionOnClick
    />
  )
}
