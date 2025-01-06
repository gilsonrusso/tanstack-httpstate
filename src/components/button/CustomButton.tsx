import { Button } from '@mui/material'
import type { ComponentProps, ReactNode } from 'react'

interface CustomButtonProps extends ComponentProps<typeof Button> {
  icon?: ReactNode
  label: string
  onClick?: () => void
}

export const CustomButton = ({
  icon: Icon,
  label,
  onClick,
  ...props
}: CustomButtonProps) => {
  return (
    <Button variant="contained" onClick={onClick} {...props}>
      {label}
    </Button>
  )
}
