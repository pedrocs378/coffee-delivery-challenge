import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useCart } from '../../contexts/CartContext'
import { PaymentType } from '../../contexts/CartContext/types'

import { CompleteOrder } from './components/CompleteOrder'
import { SelectedCoffees } from './components/SelectedCoffees'
import { ConfirmedOrder } from './components/ConfirmedOrder'

import { removeCurrencyMask } from '../../helpers/masks'

import { OrderForm } from './types'

import * as S from './styles'

const orderFormSchema = yup.object({
  cep: yup.string().required('CEP é obrigatório').length(9, 'CEP inválido'),
  street: yup.string().required('Rua é obrigatória'),
  number: yup
    .number()
    .required('Número é obrigatório')
    .min(0, 'Número inválido')
    .nullable(true)
    .transform((_, val) => (val === Number(val) ? val : null)),
  complement: yup.string(),
  neighborhood: yup.string().required('Bairro é obrigatório'),
  city: yup.string().required('Cidade é obrigatória'),
  uf: yup.string().required('Campo vazio').length(2, 'Inválido'),
  paymentType: yup.string().required('Forma de pagamento requerido'),
  changeFor: yup.string().when('paymentType', {
    is: (val: PaymentType | undefined) => val === 'cash',
    then: yup.string().required('Troco é requerido'),
    otherwise: yup.string(),
  }),
})

export function Checkout() {
  const [isLoading, setIsLoading] = useState(false)
  const [showConfirmedSuccess, setShowConfirmedSuccess] = useState(false)

  const { cart, addDeliveryAddressAndPayment, clearCartItems } = useCart()

  const cartForm = useForm<OrderForm>({
    resolver: yupResolver(orderFormSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: null,
      complement: undefined,
      neighborhood: '',
      city: '',
      uf: '',
      paymentType: undefined,
      changeFor: undefined,
    },
  })

  const { handleSubmit, setError } = cartForm

  async function handleConfirmOrderCart(data: OrderForm) {
    if (data.paymentType === 'cash') {
      const changeFor = removeCurrencyMask(data?.changeFor ?? '')

      if (changeFor < cart.totalValue) {
        setError('changeFor', { message: 'Troco inválido' })
        return
      }
    }

    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    const { cep, street, neighborhood, number, complement, city, uf } = data

    const changeFor =
      data.paymentType === 'cash'
        ? removeCurrencyMask(data?.changeFor ?? '')
        : undefined

    addDeliveryAddressAndPayment({
      paymentType: data.paymentType ?? 'cash',
      changeFor,
      deliveryAddress: {
        cep,
        street,
        neighborhood,
        number: number ?? 0,
        complement,
        city,
        uf,
      },
    })

    clearCartItems()

    setIsLoading(false)
    setShowConfirmedSuccess(true)
  }

  return (
    <S.CheckoutContainer>
      {showConfirmedSuccess ? (
        <ConfirmedOrder />
      ) : (
        <S.CartForm onSubmit={handleSubmit(handleConfirmOrderCart)}>
          <FormProvider {...cartForm}>
            <CompleteOrder />

            <SelectedCoffees isLoading={isLoading} />
          </FormProvider>
        </S.CartForm>
      )}
    </S.CheckoutContainer>
  )
}
