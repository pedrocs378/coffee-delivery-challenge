export type PaymentType = 'credit_card' | 'debit_card' | 'cash'

export type Coffee = {
  slug: string
  name: string
  imageUrl?: string
  price: number
}

export type CartItem = {
  coffee: Coffee
  amount: number
}

export type DeliveryAddress = {
  cep: string
  street: string
  number: number
  complement?: string
  neighborhood: string
  city: string
  uf: string
}

export type Cart = {
  items: CartItem[]
  deliveryAddress: DeliveryAddress | undefined
  paymentType: PaymentType | undefined
  changeFor?: number
  totalItemsValue: number
  deliveryValue: number
  totalValue: number
}

export type AddDeliveryAddressAndPaymentProps = {
  deliveryAddress: DeliveryAddress
  paymentType: PaymentType
  changeFor?: number
}

export type CartContextData = {
  cart: Cart

  addNewItemToCart: (coffee: Coffee, amount: number) => void
  removeItemFromCart: (coffeeSlug: string) => void
  clearCartItems: () => void
  changePaymentType: (paymentType: PaymentType) => void
  addDeliveryAddressAndPayment: (
    data: AddDeliveryAddressAndPaymentProps,
  ) => void
  changeItemAmount: (
    coffeeSlug: string,
    operation: 'increase' | 'decrease',
  ) => void
}

export type CartProviderProps = {
  children?: React.ReactNode
}
