import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ThemeProvider } from 'styled-components'

import { Router } from './Router'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router />

          <GlobalStyle />
        </BrowserRouter>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export { App }
