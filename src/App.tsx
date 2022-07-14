import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'

import { Router } from './Router'

import { client } from './lib/apollo'

import { CartProvider } from './contexts/CartContext'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Toaster } from 'react-hot-toast'

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
