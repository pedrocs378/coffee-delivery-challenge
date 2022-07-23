import { Fragment, useMemo } from 'react'
import { Trash } from 'phosphor-react'

import { useCart } from '../../../contexts/CartContext'

import { CartItemQuantity } from '../../../components/CoffeeQuantity'

import * as S from '../styles'

const formatPrice = (value: number) => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export function SelectedCoffees() {
  const { cart, removeItemFromCart, changeItemAmount } = useCart()

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
    <S.SelectedCoffeesSection>
      <strong>Cafés selecionados</strong>

      <S.SelectedCoffeesCard>
        <S.CartItems>
          {cart.totalValue <= 0 ? (
            <S.EmptyCart>Nenhum café selecionado ainda</S.EmptyCart>
          ) : (
            cart.items.map((cartItem) => {
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

                        <div>
                          <CartItemQuantity
                            value={cartItem.amount}
                            onChange={(operation) =>
                              changeItemAmount(cartItem.coffee.slug, operation)
                            }
                          />

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
                      </div>
                    </S.CartItemDetails>

                    <span>
                      {formatPrice(cartItem.coffee.price * cartItem.amount)}
                    </span>
                  </S.CartItem>

                  <S.Divider />
                </Fragment>
              )
            })
          )}
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

        <S.ConfirmOrderButton type="submit" disabled={cart.totalValue <= 0}>
          Confirmar Pedido
        </S.ConfirmOrderButton>
      </S.SelectedCoffeesCard>
    </S.SelectedCoffeesSection>
  )
}
