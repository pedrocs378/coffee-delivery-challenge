import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 100%;
  max-width: 16rem;

  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors['gray-200']};
  border-radius: ${({ theme }) =>
    `${theme.borderRadius.default} ${theme.borderRadius.lg}`};

  > img {
    width: 7.5rem;
    height: 7.5rem;
    margin-bottom: 0.75rem;
    margin-top: -2.5rem;
  }

  > strong {
    display: block;
    margin-top: 1rem;

    line-height: 1.3;
    font-family: 'Baloo 2', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  > p {
    margin-top: 0.5rem;
    text-align: center;

    line-height: 1.3;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors['gray-600']};
  }
`

export const CoffeeTypesList = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

export const TypeBadge = styled.span`
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  border-radius: 100px;

  background-color: ${({ theme }) => theme.colors['yellow-300']};
  color: ${({ theme }) => theme.colors['yellow-700']};

  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.3;
`

export const CardFooter = styled.footer`
  margin-top: 2rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const CoffeePrice = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.3;

  span {
    font-family: 'Roboto', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }
`

export const AddCartButton = styled.button`
  height: 2.375rem;
  width: 2.375rem;
  font-size: 0;
  border: 0;

  border-radius: ${({ theme }) => theme.borderRadius.default};

  background-color: ${({ theme }) => theme.colors['purple-700']};
  color: ${({ theme }) => theme.colors.white};

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors['purple-500']};
  }
`
