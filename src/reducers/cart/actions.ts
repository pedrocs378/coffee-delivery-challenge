import {
  CartItem,
  Coffee,
  DeliveryAddress,
  PaymentType,
} from '../../contexts/CartContext/types'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CLEAR_ITEMS = 'CLEAR_ITEMS',
  INCREASE_AMOUNT = 'INCREASE_AMOUNT',
  DECREASE_AMOUNT = 'DECREASE_AMOUNT',
  CHANGE_PAYMENT_TYPE = 'CHANGE_PAYMENT_TYPE',
  ADD_ADDRESS_AND_PAYMENT = 'ADD_ADDRESS_AND_PAYMENT',
}

export type CartAction = {
  type: keyof typeof ActionTypes
  payload?: {
    item?: CartItem
    coffeeSlug?: string
    paymentType?: PaymentType
    deliveryAddress?: DeliveryAddress
    changeFor?: number
  }
}

export function addNewItemAction(coffee: Coffee, amount: number): CartAction {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item: {
        coffee,
        amount,
      },
    },
  }
}

export function removeItemAction(coffeeSlug: string): CartAction {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      coffeeSlug,
    },
  }
}

export function clearCartItemsAction(): CartAction {
  return {
    type: ActionTypes.CLEAR_ITEMS,
  }
}

export function changeItemAmountAction(
  coffeeSlug: string,
  operation: 'increase' | 'decrease',
): CartAction {
  const actionType =
    operation === 'increase'
      ? ActionTypes.INCREASE_AMOUNT
      : ActionTypes.DECREASE_AMOUNT

  return {
    type: actionType,
    payload: {
      coffeeSlug,
    },
  }
}

export function changePaymentTypeAction(paymentType: PaymentType): CartAction {
  return {
    type: ActionTypes.CHANGE_PAYMENT_TYPE,
    payload: {
      paymentType,
    },
  }
}

export function addDeliveryAddressAndPaymentAction(
  deliveryAddress: DeliveryAddress,
  paymentType: PaymentType,
  changeFor?: number,
): CartAction {
  return {
    type: ActionTypes.ADD_ADDRESS_AND_PAYMENT,
    payload: {
      deliveryAddress,
      paymentType,
      changeFor,
    },
  }
}
