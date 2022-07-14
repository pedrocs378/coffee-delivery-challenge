import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  height: 6.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    gap: 1.25rem;
  }
`

export const LocationBadge = styled.div`
  background-color: ${({ theme }) => theme.colors['purple-300']};
  color: ${({ theme }) => theme.colors['purple-700']};

  height: 2.375rem;
  padding: 0 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.default};

  display: flex;
  align-items: center;
  gap: 0.25rem;

  font-size: ${({ theme }) => theme.fontSizes.sm};

  svg {
    color: ${({ theme }) => theme.colors['purple-500']};
  }
`

export const CartLink = styled(Link)`
  height: 2.375rem;
  width: 2.375rem;

  border-radius: ${({ theme }) => theme.borderRadius.default};
  font-size: 0;
  background-color: ${({ theme }) => theme.colors['yellow-300']};
  color: ${({ theme }) => theme.colors['yellow-700']};

  display: flex;
  align-items: center;
  justify-content: center;
`
