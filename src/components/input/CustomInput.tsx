import { TextField } from '@mui/material'
import { forwardRef, useEffect, useState } from 'react'

interface CustomInputProps {
  label: string
  variant: 'filled' | 'outlined' | 'standard'
  isLoading?: boolean
  isSuccessful?: boolean
}

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ isLoading, label, variant, isSuccessful }, ref) => {
    const [value, setValue] = useState<string>('')

    useEffect(() => {
      if (isSuccessful) {
        setValue('')
      }
    }, [isSuccessful])

    return (
      <TextField
        disabled={isLoading}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        id="outlined-basic"
        label={label}
        variant={variant}
        className="w-full bg-white "
        inputRef={ref}
      />
    )
  },
)
