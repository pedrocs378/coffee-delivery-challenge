import { CurrencyDollar, MapPinLine } from 'phosphor-react'

import { defaultTheme } from '../../styles/themes/default'

import * as S from './styles'

export function Checkout() {
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
              <span>R$ 29,70</span>
            </S.CartDefailtRow>
            <S.CartDefailtRow>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </S.CartDefailtRow>
            <S.CartDefailtRow isTotal>
              <span>Total</span>
              <span>R$ 33,20</span>
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
