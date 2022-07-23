import {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  useCallback,
} from 'react'

import * as S from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  mask?: (value: string) => string
  isErrored?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ mask, onChange, ...rest }, ref) => {
    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        if (mask) {
          const newValue = mask(event.target.value)
          event.target.value = newValue
        }

        return onChange?.(event)
      },
      [mask, onChange],
    )

    return <S.InputContainer ref={ref} {...rest} onChange={handleChange} />
  },
)
Input.displayName = 'Input'
