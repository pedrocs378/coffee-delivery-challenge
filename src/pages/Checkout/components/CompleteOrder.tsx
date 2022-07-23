import { useState } from 'react'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { Input } from '../../../components/Input'
import { PaymentCheckbox } from '../../../components/PaymentCheckbox'

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
            <Input placeholder="CEP" />
          </S.InputContainer>
          <S.InputContainer size={12}>
            <Input placeholder="Rua" />
          </S.InputContainer>
          <S.InputContainer size={4}>
            <Input type="number" placeholder="Número" />
          </S.InputContainer>
          <S.InputContainer size={8} isOptional>
            <Input placeholder="Complemento" />
          </S.InputContainer>
          <S.InputContainer size={4}>
            <Input placeholder="Bairro" />
          </S.InputContainer>
          <S.InputContainer size={6}>
            <Input placeholder="Cidade" />
          </S.InputContainer>
          <S.InputContainer size={2}>
            <Input placeholder="UF" />
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
          <PaymentCheckbox
            icon={CreditCard}
            label="Cartão de Crédito"
            checked={checkedPaymentType === 'credit_card'}
            onClick={() => setCheckedPaymentType('credit_card')}
          />
          <PaymentCheckbox
            icon={Bank}
            label="Cartão de Débito"
            checked={checkedPaymentType === 'debit_card'}
            onClick={() => setCheckedPaymentType('debit_card')}
          />
          <PaymentCheckbox
            icon={Money}
            label="Dinheiro"
            checked={checkedPaymentType === 'cash'}
            onClick={() => setCheckedPaymentType('cash')}
          />
        </S.PaymentButtonsContainer>

        <S.ChangeForContainer>
          {checkedPaymentType === 'cash' && (
            <S.InputContainer className="change-for" size={4}>
              <Input placeholder="Troco" />
            </S.InputContainer>
          )}
        </S.ChangeForContainer>
      </S.PaymentCard>
    </S.CompleteOrderSection>
  )
}
