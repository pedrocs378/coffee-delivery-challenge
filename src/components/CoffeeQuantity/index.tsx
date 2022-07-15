import { Minus, Plus } from 'phosphor-react'

import * as S from './styles'

type CartItemQuantityProps = {
  value?: number
  onChange?: (operation: 'decrease' | 'increase') => void
}

export function CartItemQuantity({ value, onChange }: CartItemQuantityProps) {
  return (
    <S.CoffeeQuantityContainer>
      <button
        type="button"
        title="Diminuir"
        onClick={() => onChange?.('decrease')}
      >
        <Minus size={14} weight="bold" />
      </button>
      <span>{value}</span>
      <button
        type="button"
        title="Aumentar"
        onClick={() => onChange?.('increase')}
      >
        <Plus size={14} weight="bold" />
      </button>
    </S.CoffeeQuantityContainer>
  )
}
