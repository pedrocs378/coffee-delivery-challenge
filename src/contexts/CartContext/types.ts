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

export type Cart = {
  items: CartItem[]
  paymentType: PaymentType | undefined
  totalItemsValue: number
  deliveryValue: number
  totalValue: number
}

export type CartContextData = {
  cart: Cart

  addNewItemToCart: (coffee: Coffee, amount: number) => void
  removeItemFromCart: (coffeeSlug: string) => void
  changePaymentType: (paymentType: PaymentType) => void
  changeItemAmount: (
    coffeeSlug: string,
    operation: 'increase' | 'decrease',
  ) => void
}

export type CartProviderProps = {
  children?: React.ReactNode
}
