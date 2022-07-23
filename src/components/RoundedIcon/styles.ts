import styled from 'styled-components'

import { defaultTheme } from '../../styles/themes/default'

type RoundedIconContainerProps = {
  bgColor: keyof typeof defaultTheme.colors
}

export const RoundedIconContainer = styled.div<RoundedIconContainerProps>`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  color: ${({ theme }) => theme.colors.white};
`
