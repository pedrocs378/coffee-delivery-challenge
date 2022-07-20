import { useState } from 'react'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { defaultTheme } from '../../../styles/themes/default'

import * as S from '../styles'

type PaymentType = 'credit_card' | 'debit_card' | 'cash'

export function CompleteOrder() {
  const [checkedPaymentType, setCheckedPaymentType] = useState<PaymentType>()

  return (
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

        <S.AddressInputsContainer>
          <S.InputContainer size={4}>
            <S.AddressInput placeholder="CEP" />
          </S.InputContainer>
          <S.InputContainer size={12}>
            <S.AddressInput placeholder="Rua" />
          </S.InputContainer>
          <S.InputContainer size={4}>
            <S.AddressInput type="number" placeholder="Número" />
          </S.InputContainer>
          <S.InputContainer size={8} isOptional>
            <S.AddressInput placeholder="Complemento" />
          </S.InputContainer>
          <S.InputContainer size={4}>
            <S.AddressInput placeholder="Bairro" />
          </S.InputContainer>
          <S.InputContainer size={6}>
            <S.AddressInput placeholder="Cidade" />
          </S.InputContainer>
          <S.InputContainer size={2}>
            <S.AddressInput placeholder="UF" />
          </S.InputContainer>
        </S.AddressInputsContainer>
      </S.DeliveryAddressCard>

      <S.PaymentCard>
        <S.CardHeader>
          <CurrencyDollar size={22} color={defaultTheme.colors['purple-500']} />

          <div>
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </S.CardHeader>

        <S.PaymentButtonsContainer>
          <S.PaymentCheckButton
            type="button"
            isChecked={checkedPaymentType === 'credit_card'}
            onClick={() => setCheckedPaymentType('credit_card')}
          >
            <CreditCard size={16} />
            Cartão de Crédito
          </S.PaymentCheckButton>
          <S.PaymentCheckButton
            type="button"
            isChecked={checkedPaymentType === 'debit_card'}
            onClick={() => setCheckedPaymentType('debit_card')}
          >
            <Bank size={16} />
            Cartão de Débito
          </S.PaymentCheckButton>
          <S.PaymentCheckButton
            type="button"
            isChecked={checkedPaymentType === 'cash'}
            onClick={() => setCheckedPaymentType('cash')}
          >
            <Money size={16} />
            Dinheiro
          </S.PaymentCheckButton>
        </S.PaymentButtonsContainer>
      </S.PaymentCard>
    </S.CompleteOrderSection>
  )
}
