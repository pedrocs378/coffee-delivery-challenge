import styled from 'styled-components'

export const ConfirmedOrderContainer = styled.div`
  margin-top: 2.5rem;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 6.375rem;
`

export const ConfirmedOrder = styled.div`
  > strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    font-weight: ${({ theme }) => theme.fontWeights.extraBold};
    color: ${({ theme }) => theme.colors['yellow-700']};
    line-height: 1.3;
  }

  > p {
    margin-top: 0.25rem;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    line-height: 1.3;
    color: ${({ theme }) => theme.colors['gray-800']};
  }
`

export const OrderDetails = styled.div`
  padding: 2.5rem;
  margin-top: 2.5rem;

  border: 1px solid ${({ theme }) => theme.colors['yellow-700']};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const OrderDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > div p {
    line-height: 1.3;
  }
`
