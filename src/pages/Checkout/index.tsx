import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { CompleteOrder } from './components/CompleteOrder'
import { SelectedCoffees } from './components/SelectedCoffees'
import { ConfirmedOrder } from './components/ConfirmedOrder'

import { OrderForm } from './types'

import * as S from './styles'

const orderFormSchema = yup.object({
  cep: yup
    .string()
    .required('CEP é obrigatório')
    .max(9, 'Máximo de 9 caracteres'),
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
})

export function Checkout() {
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
    },
  })

  const { handleSubmit } = cartForm

  function handleConfirmOrderCart(data: OrderForm) {
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
