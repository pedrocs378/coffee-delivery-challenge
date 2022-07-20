import { Coffee } from '../../contexts/CartContext/types'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREASE_AMOUNT = 'INCREASE_AMOUNT',
  DECREASE_AMOUNT = 'DECREASE_AMOUNT',
}

export function addNewItemAction(coffee: Coffee, amount: number) {
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

export function removeItemAction(coffeeSlug: string) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      coffeeSlug,
    },
  }
}

export function changeItemAmountAction(
  coffeeSlug: string,
  operation: 'increase' | 'decrease',
) {
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
