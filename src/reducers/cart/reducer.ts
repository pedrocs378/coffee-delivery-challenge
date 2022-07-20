import { Cart, CartItem } from '../../contexts/CartContext.types'

import { ActionTypes } from './actions'

type CartAction = {
  type: keyof typeof ActionTypes
  payload: {
    item?: CartItem
    coffeeSlug?: string
  }
}

export function cartReducer(state: Cart, action: CartAction) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM: {
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
    case ActionTypes.REMOVE_ITEM: {
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
    case ActionTypes.INCREASE_AMOUNT: {
      const coffeeSlug = action.payload.coffeeSlug

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
        items: updatedCartItems,
        deliveryValue,
        totalItemsValue,
        totalValue: totalItemsValue + deliveryValue,
      }

      return newState
    }
    case ActionTypes.DECREASE_AMOUNT: {
      const coffeeSlug = action.payload.coffeeSlug

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
        items: updatedCartItems,
        deliveryValue,
        totalItemsValue,
        totalValue: totalItemsValue + deliveryValue,
      }

      return newState
    }
    default:
      return state
  }
}