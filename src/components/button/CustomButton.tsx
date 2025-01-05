import { Button, type ButtonBaseOwnProps } from '@mui/material'
import type { ReactNode } from 'react'

type CustomButtonProps = ButtonBaseOwnProps & {
  icon?: ReactNode
  label: string
  isLoading?: boolean
  onClick?: () => void
}

export const CustomButton = ({
  icon: Icon,
  label,
  isLoading,
  onClick,
  ...props
}: CustomButtonProps) => {
  return (
    <Button
      disabled={isLoading}
      variant="contained"
      onClick={onClick}
      {...props}
      className="disabled:opacity-90 disabled:bg-gray-400 disabled:cursor-not-allowed w-36"
    >
      {isLoading ? 'Loading...' : label}
    </Button>
  )
}
