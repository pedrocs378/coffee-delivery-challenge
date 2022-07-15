import styled from 'styled-components'

export const CoffeeQuantityContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['gray-400']};
  border-radius: ${({ theme }) => theme.borderRadius.default};

  padding: 0.75rem 0.5rem;
  min-width: 4.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  span {
    color: ${({ theme }) => theme.colors['gray-900']};
    line-height: 1.3;
  }

  button {
    border: 0;
    font-size: 0;
    background-color: transparent;

    color: ${({ theme }) => theme.colors['purple-500']};
  }
`
