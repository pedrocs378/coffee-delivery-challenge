import { useMemo } from 'react'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'

import { useCart } from '../../contexts/CartContext'

import { defaultTheme } from '../../styles/themes/default'

import * as S from './styles'

const DELIVERY_VALUE = 3.5

const formatPrice = (value: number) => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export function Checkout() {
  const { cartItems } = useCart()

  const cartDetails = useMemo(() => {
    const totalItems = cartItems.reduce((total, item) => {
      return total + item.coffee.price * item.amount
    }, 0)

    const deliveryValue = DELIVERY_VALUE
    const totalValue = totalItems + deliveryValue

    const formattedTotalItems = formatPrice(totalItems)
    const formattedDeliveryValue = formatPrice(deliveryValue)
    const formattedTotalValue = formatPrice(totalValue)

    return {
      formattedTotalItems,
      formattedDeliveryValue,
      formattedTotalValue,
    }
  }, [cartItems])

  return (
    <S.CheckoutContainer>
      <S.CompleteOrderSection>
        <strong>Complete seu pedido</strong>

        <S.DeliveryAddressCard>
          <S.CardHeader>
            <MapPinLine size={22} color={defaultTheme.colors['yellow-700']} />

            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </S.CardHeader>
        </S.DeliveryAddressCard>
        <S.PaymentCard>
          <S.CardHeader>
            <CurrencyDollar
              size={22}
              color={defaultTheme.colors['purple-500']}
            />

            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </S.CardHeader>
        </S.PaymentCard>
      </S.CompleteOrderSection>

      <S.SelectedCoffeesSection>
        <strong>Cafés selecionados</strong>

        <S.SelectedCoffeesCard>
          <S.CartDetails>
            <S.CartDefailtRow>
              <span>Total de itens</span>
              <span>{cartDetails.formattedTotalItems}</span>
            </S.CartDefailtRow>
            <S.CartDefailtRow>
              <span>Entrega</span>
              <span>{cartDetails.formattedDeliveryValue}</span>
            </S.CartDefailtRow>
            <S.CartDefailtRow isTotal>
              <span>Total</span>
              <span>{cartDetails.formattedTotalValue}</span>
            </S.CartDefailtRow>
          </S.CartDetails>

          <S.ConfirmOrderButton type="button">
            Confirmar Pedido
          </S.ConfirmOrderButton>
        </S.SelectedCoffeesCard>
      </S.SelectedCoffeesSection>
    </S.CheckoutContainer>
  )
}
