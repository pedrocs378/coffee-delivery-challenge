import * as S from './styles'

type FormGroupProps = {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  error?: string
  isOptional?: boolean
  children?: React.ReactNode
  className?: string
}

export function FormGroup({
  size = 12,
  error,
  isOptional = false,
  children,
  className,
}: FormGroupProps) {
  return (
    <S.FormGroupContainer
      className={className}
      size={size}
      isOptional={isOptional}
    >
      {children}
      {error && <small>{error}</small>}
    </S.FormGroupContainer>
  )
}
