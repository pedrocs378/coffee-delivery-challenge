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
  totalItemsValue: number
  deliveryValue: number
  totalValue: number
}

export type CartContextData = {
  cart: Cart

  addNewItemToCart: (coffee: Coffee, amount: number) => void
  removeItemFromCart: (coffeeSlug: string) => void
  changeItemAmount: (
    coffeeSlug: string,
    operation: 'increase' | 'decrease',
  ) => void
}

export type CartProviderProps = {
  children?: React.ReactNode
}
