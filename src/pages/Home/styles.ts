import styled from 'styled-components'

import { defaultTheme } from '../../styles/themes/default'

export const HomeContainer = styled.main``

const BaseSection = styled.section`
  min-height: 34rem;
`

export const CoffeeDetailsContainer = styled(BaseSection)`
  display: flex;
  align-items: center;
  gap: 3.5rem;

  > div {
    flex: 1;

    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 3rem;
      font-weight: ${({ theme }) => theme.fontWeights.extraBold};
      line-height: 1.3;
      color: ${({ theme }) => theme.colors['gray-900']};
    }

    h2 {
      font-size: 1.25rem;
      font-weight: ${({ theme }) => theme.fontWeights.regular};
      line-height: 1.3;
      color: ${({ theme }) => theme.colors['gray-800']};

      margin-top: 1rem;
    }
  }

  img {
    height: 360px;
  }
`

export const DeliveryInfoGrid = styled.div`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: 231px 1fr;
  gap: 1.25rem 2.5rem;
`

export const DeliveryInfoLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

type DeliveryInfoIconProps = {
  backgroundColor: keyof typeof defaultTheme.colors
}

export const DeliveryInfoIcon = styled.div<DeliveryInfoIconProps>`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]};
  color: ${({ theme }) => theme.colors.white};
`

export const OurCoffeesContainer = styled(BaseSection)`
  padding: 2rem 0;

  > strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  }
`
