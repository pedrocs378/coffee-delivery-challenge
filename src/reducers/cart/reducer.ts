import { Cart } from '../../contexts/CartContext/types'

import { ActionTypes, CartAction } from './actions'

export function cartReducer(state: Cart, action: CartAction) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM: {
      if (!action.payload?.item) return state

      const newCartItems = [...state.items, action.payload?.item]

      const totalItemsValue = newCartItems.reduce((total, item) => {
        return total + item.coffee.price * item.amount
      }, 0)
      const deliveryValue = 3.5

      const newState: Cart = {
        ...state,
        items: newCartItems,
        deliveryValue,
        totalItemsValue,
        totalValue: totalItemsValue + deliveryValue,
      }

      return newState
    }
    case ActionTypes.REMOVE_ITEM: {
      const coffeeSlug = action.payload?.coffeeSlug

      if (!coffeeSlug) return state

      const newCartItems = state.items.filter((cartItem) => {
        return cartItem.coffee.slug !== coffeeSlug
      })

      const totalItemsValue = newCartItems.reduce((total, item) => {
        return total + item.coffee.price * item.amount
      }, 0)
      const deliveryValue = newCartItems.length ? 3.5 : 0

      const newState: Cart = {
        ...state,
        items: newCartItems,
        deliveryValue,
        totalItemsValue,
        totalValue: totalItemsValue + deliveryValue,
      }

      return newState
    }
    case ActionTypes.CLEAR_ITEMS: {
      const newState: Cart = {
        ...state,
        items: [],
        deliveryValue: 0,
        totalItemsValue: 0,
        totalValue: 0,
      }

      return newState
    }
    case ActionTypes.INCREASE_AMOUNT: {
      const coffeeSlug = action.payload?.coffeeSlug

      if (!coffeeSlug) return state

      const updatedCartItems = state.items.map((cartItem) => {
        if (cartItem.coffee.slug === coffeeSlug) {
          return {
            coffee: cartItem.coffee,
            amount: cartItem.amount + 1,
          }
        }

        return cartItem
      })

      const totalItemsValue = updatedCartItems.reduce((total, item) => {
        return total + item.coffee.price * item.amount
      }, 0)
      const deliveryValue = updatedCartItems.length ? 3.5 : 0

      const newState: Cart = {
        ...state,
        items: updatedCartItems,
        deliveryValue,
        totalItemsValue,
        totalValue: totalItemsValue + deliveryValue,
      }

      return newState
    }
    case ActionTypes.DECREASE_AMOUNT: {
      const coffeeSlug = action.payload?.coffeeSlug

      if (!coffeeSlug) return state

      const updatedCartItems = state.items.map((cartItem) => {
        if (cartItem.coffee.slug === coffeeSlug) {
          return {
            coffee: cartItem.coffee,
            amount: cartItem.amount > 1 ? cartItem.amount - 1 : cartItem.amount,
          }
        }

        return cartItem
      })

      const totalItemsValue = updatedCartItems.reduce((total, item) => {
        return total + item.coffee.price * item.amount
      }, 0)
      const deliveryValue = updatedCartItems.length ? 3.5 : 0

      const newState: Cart = {
        ...state,
        items: updatedCartItems,
        deliveryValue,
        totalItemsValue,
        totalValue: totalItemsValue + deliveryValue,
      }

      return newState
    }
    case ActionTypes.CHANGE_PAYMENT_TYPE: {
      const paymentType = action.payload?.paymentType

      if (!paymentType) return state

      return {
        ...state,
        paymentType,
      }
    }
    case ActionTypes.ADD_ADDRESS_AND_PAYMENT: {
      const deliveryAddress = action.payload?.deliveryAddress
      const paymentType = action.payload?.paymentType

      if (!deliveryAddress && !paymentType) return state

      return {
        ...state,
        deliveryAddress,
        paymentType,
        changeFor: action.payload?.changeFor,
      }
    }
    default:
      return state
  }
}
