import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  margin-top: 2.5rem;
`

const BaseSection = styled.section`
  > strong {
    display: block;
    margin-bottom: 1rem;
  }
`

const BaseCard = styled.div`
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.colors['gray-200']};
`

export const CompleteOrderSection = styled(BaseSection)`
  flex: 1;
`

export const SelectedCoffeesSection = styled(BaseSection)`
  width: 100%;
  max-width: 28rem;

  > div {
    border-radius: ${({ theme }) =>
      `${theme.borderRadius.default} ${theme.borderRadius.xl}`};
  }
`

export const DeliveryAddressCard = styled(BaseCard)``

export const PaymentCard = styled(BaseCard)`
  margin-top: 0.75rem;
`

export const SelectedCoffeesCard = styled(BaseCard)`
  display: flex;
  flex-direction: column;
`

export const CardHeader = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  span {
    line-height: 1.3;
    color: ${({ theme }) => theme.colors['gray-800']};
  }

  p {
    line-height: 1.3;
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const CartItem = styled.div`
  padding: 0.5rem 0.25rem;

  display: flex;
  justify-content: space-between;

  > span {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`

export const CartItemDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  > img {
    height: 4rem;
    width: 4rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const RemoveButton = styled.button`
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 0 0.5rem;
  height: 2rem;

  background-color: ${({ theme }) => theme.colors['gray-400']};
  color: ${({ theme }) => theme.colors['gray-700']};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.xs};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  transition: all 0.2s;

  svg {
    color: ${({ theme }) => theme.colors['purple-500']};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['gray-500']};
    color: ${({ theme }) => theme.colors['gray-800']};

    svg {
      color: ${({ theme }) => theme.colors['purple-700']};
    }
  }
`

export const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors['gray-400']};
`

export const CartTotalValues = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-top: 1.5rem;
`

type CartDefailtRowProps = {
  isTotal?: boolean
}

export const CartValueRow = styled.div<CartDefailtRowProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    line-height: 1.3;
    font-size: ${({ theme, isTotal }) => isTotal && theme.fontSizes.xl};
    font-weight: ${({ theme, isTotal }) => isTotal && theme.fontWeights.bold};
    color: ${({ theme, isTotal }) => isTotal && theme.colors['gray-800']};

    &:first-child {
      font-size: ${({ theme, isTotal }) => !isTotal && theme.fontSizes.sm};
    }
  }
`

export const ConfirmOrderButton = styled.button`
  border: 0;

  margin-top: 1.5rem;
  padding: 0.75rem 0;
  text-transform: uppercase;
  border-radius: ${({ theme }) => theme.borderRadius.default};

  background-color: ${({ theme }) => theme.colors['yellow-500']};
  color: ${({ theme }) => theme.colors.white};

  line-height: 1.6;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow-700']};
  }
`
