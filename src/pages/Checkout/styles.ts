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

export const CartDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

type CartDefailtRowProps = {
  isTotal?: boolean
}

export const CartDefailtRow = styled.div<CartDefailtRowProps>`
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
