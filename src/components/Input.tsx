import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  height: 2.625rem;
  padding: 0 0.75rem;

  border: 1px solid ${({ theme }) => theme.colors['gray-400']};
  border-radius: ${({ theme }) => theme.borderRadius.xs};

  background-color: ${({ theme }) => theme.colors['gray-300']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['gray-600']};
  }
`
