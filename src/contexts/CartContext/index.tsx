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
  changePaymentTypeAction,
  removeItemAction,
} from '../../reducers/cart/actions'

import { cartReducer } from '../../reducers/cart/reducer'

import {
  CartItem,
  CartContextData,
  CartProviderProps,
  Coffee,
  PaymentType,
} from './types'

const CART_STORAGE_KEY = '@coffeeDelivery:cart-1.0.0'

const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, dispatch] = useReducer(
    cartReducer,
    {
      items: [] as CartItem[],
      paymentType: undefined,
      deliveryValue: 0,
      totalItemsValue: 0,
      totalValue: 0,
    },
    (arg) => {
      try {
        const storagedValue = localStorage.getItem(CART_STORAGE_KEY)

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

  const changePaymentType = useCallback((paymentType: PaymentType) => {
    dispatch(changePaymentTypeAction(paymentType))
  }, [])

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  const valueMemo: CartContextData = useMemo(() => {
    return {
      cart,
      addNewItemToCart,
      removeItemFromCart,
      changePaymentType,
      changeItemAmount,
    }
  }, [
    addNewItemToCart,
    removeItemFromCart,
    changePaymentType,
    changeItemAmount,
    cart,
  ])

  return (
    <CartContext.Provider value={valueMemo}>{children}</CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
