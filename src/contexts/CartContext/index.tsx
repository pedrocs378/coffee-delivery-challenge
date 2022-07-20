import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react'
import {
  addNewItemAction,
  changeItemAmountAction,
  removeItemAction,
} from '../../reducers/cart/actions'

import { cartReducer } from '../../reducers/cart/reducer'

import { CartItem, CartContextData, CartProviderProps, Coffee } from './types'

const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, dispatch] = useReducer(
    cartReducer,
    {
      items: [] as CartItem[],
      deliveryValue: 0,
      totalItemsValue: 0,
      totalValue: 0,
    },
    (arg) => {
      try {
        const storagedValue = localStorage.getItem('@coffeeDelivery:cart')

        if (storagedValue) {
          return JSON.parse(storagedValue)
        }

        return arg
      } catch {
        return arg
      }
    },
  )

  const addNewItemToCart = useCallback((coffee: Coffee, amount: number) => {
    dispatch(addNewItemAction(coffee, amount))
  }, [])

  const removeItemFromCart = useCallback((coffeeSlug: string) => {
    dispatch(removeItemAction(coffeeSlug))
  }, [])

  const changeItemAmount = useCallback(
    (coffeeSlug: string, operation: 'increase' | 'decrease') => {
      dispatch(changeItemAmountAction(coffeeSlug, operation))
    },
    [],
  )

  useEffect(() => {
    localStorage.setItem('@coffeeDelivery:cart', JSON.stringify(cart))
  }, [cart])

  const valueMemo: CartContextData = useMemo(() => {
    return {
      cart,
      addNewItemToCart,
      removeItemFromCart,
      changeItemAmount,
    }
  }, [addNewItemToCart, removeItemFromCart, changeItemAmount, cart])

  return (
    <CartContext.Provider value={valueMemo}>{children}</CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
