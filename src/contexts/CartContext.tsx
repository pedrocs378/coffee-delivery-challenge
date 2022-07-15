import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
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

type Cart = {
  items: CartItem[]
  totalItemsValue: number
  deliveryValue: number
  totalValue: number
}

type CartAction = {
  type: 'ADD_ITEM' | 'REMOVE_ITEM'
  payload: {
    item?: CartItem
    coffeeSlug?: string
  }
}

type CartContextData = {
  cart: Cart

  addNewItemToCart: (coffee: Coffee, amount: number) => void
  removeItemFromCart: (coffeeSlug: string) => void
}

type CartProviderProps = {
  children?: React.ReactNode
}

const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, dispatch] = useReducer(
    (state: Cart, action: CartAction) => {
      switch (action.type) {
        case 'ADD_ITEM': {
          if (!action.payload.item) return state

          const newCartItems = [...state.items, action.payload.item]

          const totalItemsValue = newCartItems.reduce((total, item) => {
            return total + item.coffee.price * item.amount
          }, 0)
          const deliveryValue = 3.5

          const newState: Cart = {
            items: newCartItems,
            deliveryValue,
            totalItemsValue,
            totalValue: totalItemsValue + deliveryValue,
          }

          return newState
        }
        case 'REMOVE_ITEM': {
          const coffeeSlug = action.payload.coffeeSlug

          if (!coffeeSlug) return state

          const newCartItems = state.items.filter((cartItem) => {
            return cartItem.coffee.slug !== coffeeSlug
          })

          const totalItemsValue = newCartItems.reduce((total, item) => {
            return total + item.coffee.price * item.amount
          }, 0)
          const deliveryValue = newCartItems.length ? 3.5 : 0

          const newState: Cart = {
            items: newCartItems,
            deliveryValue,
            totalItemsValue,
            totalValue: totalItemsValue + deliveryValue,
          }

          return newState
        }
        default:
          return state
      }
    },
    {
      items: [],
      deliveryValue: 0,
      totalItemsValue: 0,
      totalValue: 0,
    },
  )

  const addNewItemToCart = useCallback((coffee: Coffee, amount: number) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        item: {
          coffee,
          amount,
        },
      },
    })
  }, [])

  const removeItemFromCart = useCallback((coffeeSlug: string) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: {
        coffeeSlug,
      },
    })
  }, [])

  const valueMemo: CartContextData = useMemo(() => {
    return {
      cart,
      addNewItemToCart,
      removeItemFromCart,
    }
  }, [addNewItemToCart, removeItemFromCart, cart])

  return (
    <CartContext.Provider value={valueMemo}>{children}</CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
