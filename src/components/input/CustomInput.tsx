import { TextField } from '@mui/material'
import { type ComponentProps, forwardRef, useEffect, useState } from 'react'

interface CustomInputProps extends ComponentProps<typeof TextField> {
  label: string
  variant: 'filled' | 'outlined' | 'standard'
  reset?: boolean
}

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, variant, reset, ...props }, ref) => {
    const [value, setValue] = useState<string>('')

    useEffect(() => {
      if (reset) {
        setValue('')
      }
    }, [reset])

    return (
      <TextField
        {...props}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        label={label}
        variant={variant}
        inputRef={ref}
      />
    )
  },
)
