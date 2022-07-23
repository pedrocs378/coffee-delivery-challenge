import { useCallback, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { cepApi } from '../../../services/cepApi'

import { Input } from '../../../components/Input'
import { PaymentCheckbox } from '../../../components/PaymentCheckbox'
import { FormGroup } from '../../../components/FormGroup'

import { defaultTheme } from '../../../styles/themes/default'

import { CepData, PaymentType, OrderForm } from '../types'

import * as S from '../styles'

export function CompleteOrder() {
  const [checkedPaymentType, setCheckedPaymentType] = useState<PaymentType>()

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<OrderForm>()

  const cep = watch('cep')

  const handleSearchCep = useCallback(async () => {
    if (cep.trim()) {
      try {
        const response = await cepApi.get<CepData>(`${cep}/json`)

        const hasNeihborhood = !!response.data.bairro?.trim()
        const hasStreet = !!response.data.logradouro?.trim()

        setValue('city', response.data.localidade)
        setValue('uf', response.data.uf)

        if (hasNeihborhood) {
          setValue('neighborhood', response.data.bairro)
        }
        if (hasStreet) {
          setValue('street', response.data.logradouro)
        }
      } catch (err: any) {
        console.log(err.response)
      }
    }
  }, [cep, setValue])

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
          <FormGroup size={4} error={errors.cep?.message}>
            <Input
              {...register('cep')}
              placeholder="CEP"
              onBlur={handleSearchCep}
              isErrored={!!errors.cep}
            />
          </FormGroup>
          <FormGroup error={errors.street?.message}>
            <Input {...register('street')} placeholder="Rua" />
          </FormGroup>
          <FormGroup size={4} error={errors.number?.message}>
            <Input
              {...register('number', { valueAsNumber: true })}
              type="number"
              placeholder="Número"
              isErrored={!!errors.number}
              min={0}
            />
          </FormGroup>
          <FormGroup size={8} error={errors.complement?.message} isOptional>
            <Input
              {...register('complement')}
              placeholder="Complemento"
              isErrored={!!errors.complement}
            />
          </FormGroup>
          <FormGroup size={4} error={errors.neighborhood?.message}>
            <Input
              {...register('neighborhood')}
              placeholder="Bairro"
              isErrored={!!errors.neighborhood}
            />
          </FormGroup>
          <FormGroup size={6} error={errors.city?.message}>
            <Input
              {...register('city')}
              placeholder="Cidade"
              isErrored={!!errors.city}
            />
          </FormGroup>
          <FormGroup size={2} error={errors.uf?.message}>
            <Input
              {...register('uf')}
              placeholder="UF"
              max={2}
              isErrored={!!errors.uf}
            />
          </FormGroup>
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
            <FormGroup className="change-for" size={4}>
              <Input placeholder="Troco" />
            </FormGroup>
          )}
        </S.ChangeForContainer>
      </S.PaymentCard>
    </S.CompleteOrderSection>
  )
}
