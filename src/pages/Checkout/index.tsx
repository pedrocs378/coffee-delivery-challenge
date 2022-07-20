import { CompleteOrder } from './components/CompleteOrder'
import { SelectedCoffees } from './components/SelectedCoffees'

import * as S from './styles'

export function Checkout() {
  return (
    <S.CheckoutContainer>
      <CompleteOrder />

      <SelectedCoffees />
    </S.CheckoutContainer>
  )
}
