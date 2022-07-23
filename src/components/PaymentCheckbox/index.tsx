import { IconProps } from 'phosphor-react'

import * as S from './styles'

type PaymentCheckboxProps = {
  checked?: boolean
  onClick?: () => void
  label: string
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
}

export function PaymentCheckbox({
  label,
  icon: Icon,
  checked,
  onClick,
}: PaymentCheckboxProps) {
  return (
    <S.PaymentCheckboxContainer
      type="button"
      isChecked={checked}
      onClick={onClick}
    >
      <Icon size={16} />
      {label}
    </S.PaymentCheckboxContainer>
  )
}
