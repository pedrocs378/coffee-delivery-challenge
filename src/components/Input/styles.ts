import styled, { css } from 'styled-components'

type InputContainerProps = {
  isErrored?: boolean
}

export const InputContainer = styled.input<InputContainerProps>`
  width: 100%;
  height: 2.625rem;
  padding: 0 0.75rem;

  border: 1px solid ${({ theme }) => theme.colors['gray-400']};
  border-radius: ${({ theme }) => theme.borderRadius.xs};

  background-color: ${({ theme }) => theme.colors['gray-300']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['gray-600']};
  }

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme.colors['yellow-700']};
  }

  ${({ theme, isErrored }) =>
    isErrored &&
    css`
      border-color: ${theme.colors['red-500']} !important;
    `}
`
