import styled, { keyframes } from 'styled-components'

const chageForKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`

type FormGroupContainerProps = {
  size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  isOptional?: boolean
}

export const FormGroupContainer = styled.div<FormGroupContainerProps>`
  flex: 0 0 auto;
  padding: 0 0.375rem;
  width: calc((${({ size }) => size} * 100%) / 12);

  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  &.change-for {
    animation: ${chageForKeyframes} 500ms ease-out;
  }

  position: relative;

  &::after {
    content: 'Opcional';
    position: absolute;
    display: ${({ isOptional }) => (isOptional ? 'block' : 'none')};
    right: calc(0.75rem + 0.375rem);
    top: calc(2.625rem / 2);
    transform: translateY(-50%);

    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors['gray-600']};
    font-style: italic;
  }

  > small {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors['red-500']};
  }
`
