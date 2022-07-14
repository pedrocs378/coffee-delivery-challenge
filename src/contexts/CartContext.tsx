import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

type Coffee = {
  slug: string
  name: string
  imageUrl?: string
  price: number
}

type CartItem = {
  coffee: Coffee
  amount: number
}

type CartContextData = {
  cartItems: CartItem[]

  addNewItemToCart: (coffee: Coffee, amount: number) => void
}

type CartProviderProps = {
  children?: React.ReactNode
}

const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addNewItemToCart = useCallback((coffee: Coffee, amount: number) => {
    setCartItems((state) => [
      ...state,
      {
        coffee,
        amount,
      },
    ])
  }, [])

  const valueMemo: CartContextData = useMemo(() => {
    return {
      cartItems,
      addNewItemToCart,
    }
  }, [addNewItemToCart, cartItems])

  return (
    <CartContext.Provider value={valueMemo}>{children}</CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
