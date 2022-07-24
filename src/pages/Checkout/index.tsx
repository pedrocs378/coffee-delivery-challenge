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
  const { cart } = useCart()

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

  function handleConfirmOrderCart(data: OrderForm) {
    if (cart.paymentType === 'cash') {
      const changeFor = removeCurrencyMask(data?.changeFor ?? '')

      if (changeFor < cart.totalValue) {
        setError('changeFor', { message: 'Troco inválido' })
        console.log('Erro troco', data.changeFor)
        return
      }
    }

    console.log(data)
  }

  return (
    <S.CheckoutContainer>
      {/* <ConfirmedOrder /> */}

      <S.CartForm onSubmit={handleSubmit(handleConfirmOrderCart)}>
        <FormProvider {...cartForm}>
          <CompleteOrder />

          <SelectedCoffees />
        </FormProvider>
      </S.CartForm>
    </S.CheckoutContainer>
  )
}
