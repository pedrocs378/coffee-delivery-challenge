import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { RoundedIcon } from '../../../../components/RoundedIcon'

import { MotoboyDelivery } from '../MotoboyDelivery'

import * as S from './styles'

export function ConfirmedOrder() {
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
                Entrega em <strong>Rua Lázaro F. Arantes, 39</strong>
              </p>
              <p>Jardim Cristal - Valparaíso, SP</p>
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
                <strong>Cartão de Crédito</strong>
              </p>
            </div>
          </S.OrderDetail>
        </S.OrderDetails>
      </S.ConfirmedOrder>

      <MotoboyDelivery />
    </S.ConfirmedOrderContainer>
  )
}
