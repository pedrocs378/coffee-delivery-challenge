import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { useCart } from '../../../../contexts/CartContext'

import { RoundedIcon } from '../../../../components/RoundedIcon'

import { MotoboyDelivery } from '../MotoboyDelivery'

import * as S from './styles'

enum PaymentTypes {
  credit_card = 'Cartão de Crédito',
  debit_card = 'Cartão de Débito',
  cash = 'Dinheiro',
}

export function ConfirmedOrder() {
  const { cart } = useCart()

  return (
    <S.ConfirmedOrderContainer>
      <S.ConfirmedOrder>
        <strong>Uhu! Pedido confirmado</strong>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <S.OrderDetails>
          <S.OrderDetail>
            <RoundedIcon icon={MapPin} bgColor="purple-500" />

            <div>
              <p>
                Entrega em{' '}
                <strong>
                  {cart.deliveryAddress?.street}, {cart.deliveryAddress?.number}
                </strong>
              </p>
              <p>
                {cart.deliveryAddress?.neighborhood} -{' '}
                {cart.deliveryAddress?.city}, {cart.deliveryAddress?.uf}
              </p>
            </div>
          </S.OrderDetail>
          <S.OrderDetail>
            <RoundedIcon icon={Timer} bgColor="yellow-500" />

            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </S.OrderDetail>
          <S.OrderDetail>
            <RoundedIcon icon={CurrencyDollar} bgColor="yellow-700" />

            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>
                  {cart.paymentType && PaymentTypes[cart.paymentType]}
                </strong>
              </p>
            </div>
          </S.OrderDetail>
        </S.OrderDetails>
      </S.ConfirmedOrder>

      <MotoboyDelivery />
    </S.ConfirmedOrderContainer>
  )
}
