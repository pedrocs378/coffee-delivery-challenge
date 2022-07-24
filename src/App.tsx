import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'

import { Router } from './Router'

import { client } from './lib/apollo'

import { CartProvider } from './contexts/CartContext'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Toaster />

      <ApolloProvider client={client}>
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <BrowserRouter>
              <Router />

              <GlobalStyle />
            </BrowserRouter>
          </CartProvider>

          <ReactQueryDevtools />
        </QueryClientProvider>
      </ApolloProvider>
    </ThemeProvider>
  )
}

export { App }
