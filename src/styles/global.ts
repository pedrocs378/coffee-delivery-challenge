import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors['gray-100']};
    color: ${({ theme }) => theme.colors['gray-700']};
    -webkit-font-smoothing: antialiased;
    padding: 0 0.5rem;
  }

  body, button, input, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes.md};
  }

  button {
    cursor: pointer;
  }
`
