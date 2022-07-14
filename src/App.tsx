import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'

import { Router } from './Router'

import { client } from './lib/apollo'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ApolloProvider client={client}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Router />

            <GlobalStyle />
          </BrowserRouter>

          <ReactQueryDevtools />
        </QueryClientProvider>
      </ApolloProvider>
    </ThemeProvider>
  )
}

export { App }
