import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { theme } from './../themes/index'
import store from './../feature/store'
import { AuthProvider } from '../context/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AuthProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
