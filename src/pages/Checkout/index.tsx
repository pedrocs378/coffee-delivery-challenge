import { Fragment, useMemo } from 'react'
import { CurrencyDollar, MapPinLine, Trash } from 'phosphor-react'

import { useCart } from '../../contexts/CartContext'

import { defaultTheme } from '../../styles/themes/default'

import * as S from './styles'

const formatPrice = (value: number) => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export function Checkout() {
  const { cart, removeItemFromCart } = useCart()

  const cartDetails = useMemo(() => {
    const formattedTotalItems = formatPrice(cart.totalItemsValue)
    const formattedDeliveryValue = formatPrice(cart.deliveryValue)
    const formattedTotalValue = formatPrice(cart.totalValue)

    return {
      formattedTotalItems,
      formattedDeliveryValue,
      formattedTotalValue,
    }
  }, [cart])

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
          <S.CartItems>
            {cart.items.map((cartItem) => {
              return (
                <Fragment key={cartItem.coffee.slug}>
                  <S.CartItem>
                    <S.CartItemDetails>
                      {cartItem.coffee.imageUrl && (
                        <img
                          src={cartItem.coffee.imageUrl}
                          alt={cartItem.coffee.name}
                        />
                      )}

                      <div>
                        <span>{cartItem.coffee.name}</span>

                        <S.RemoveButton
                          type="button"
                          onClick={() =>
                            removeItemFromCart(cartItem.coffee.slug)
                          }
                        >
                          <Trash size={16} />
                          Remover
                        </S.RemoveButton>
                      </div>
                    </S.CartItemDetails>

                    <span>
                      {formatPrice(cartItem.coffee.price * cartItem.amount)}
                    </span>
                  </S.CartItem>

                  <S.Divider />
                </Fragment>
              )
            })}
          </S.CartItems>

          <S.CartTotalValues>
            <S.CartValueRow>
              <span>Total de itens</span>
              <span>{cartDetails.formattedTotalItems}</span>
            </S.CartValueRow>
            <S.CartValueRow>
              <span>Entrega</span>
              <span>{cartDetails.formattedDeliveryValue}</span>
            </S.CartValueRow>
            <S.CartValueRow isTotal>
              <span>Total</span>
              <span>{cartDetails.formattedTotalValue}</span>
            </S.CartValueRow>
          </S.CartTotalValues>

          <S.ConfirmOrderButton type="button">
            Confirmar Pedido
          </S.ConfirmOrderButton>
        </S.SelectedCoffeesCard>
      </S.SelectedCoffeesSection>
    </S.CheckoutContainer>
  )
}
