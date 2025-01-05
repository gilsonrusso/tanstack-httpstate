import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Skeleton from '@mui/material/Skeleton'
import {
  DataGrid,
  type GridColDef,
  type GridRenderCellParams,
} from '@mui/x-data-grid'
import { useState } from 'react'
import type { IClsCommits } from '../../shared/interfaces'
import { CustomBadge } from '../badge/CustomBadge'
import { CustomLegend } from './CustomLegend'

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

type TCustomTableProps = {
  dataGrid?: IClsCommits[]
  isLoading?: boolean
  pagination?: 5 | 10 | 20
}

export const CustomTable = ({
  dataGrid = [],
  isLoading,
  pagination = 5,
}: TCustomTableProps) => {
  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        loading={isLoading}
        rows={dataGrid}
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
              pageSize: pagination,
            },
          },
        }}
        getRowHeight={() => 'auto'}
        getEstimatedRowHeight={() => 100}
        pageSizeOptions={[5, 10, 20, { value: -1, label: 'All' }]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
      <CustomLegend />
    </Box>
  )
}
