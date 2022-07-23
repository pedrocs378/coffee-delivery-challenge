import styled from 'styled-components'

type PaymentCheckboxContainerProps = {
  isChecked?: boolean
}

export const PaymentCheckboxContainer = styled.button<PaymentCheckboxContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  height: 3.1875rem;
  padding: 0 1rem;

  border: 1px solid
    ${({ isChecked, theme }) =>
      isChecked ? theme.colors['purple-500'] : 'transparent'};
  border-radius: ${({ theme }) => theme.borderRadius.default};

  background-color: ${({ isChecked, theme }) =>
    isChecked ? theme.colors['purple-300'] : theme.colors['gray-400']};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-transform: uppercase;

  transition: all 0.2s;

  &:hover {
    background-color: ${({ isChecked, theme }) =>
      !isChecked && theme.colors['gray-500']};
  }

  svg {
    color: ${({ theme }) => theme.colors['purple-500']};
  }
`
