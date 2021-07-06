import { extendTheme } from '@chakra-ui/react'
import { Button } from './Button/Button'
import { Input } from './Input/Input'


export const theme = extendTheme({
  components: {
    Button,
    Input,
  },
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Inter, system-ui, sans-serif',
  },
  colors: {
    brand: {
      50: '#d6ffff',
      100: '#aafcff',
      200: '#7af9ff',
      300: '#47f4ff',
      400: '#1af2ff',
      500: '#00F0FF',
      600: '#00a8b4',
      700: '#007981',
      800: '#00494f',
      900: '#001a1e',
    },
    black: {
      50: '#f2f2f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#383838',
      800: '#2B2B2B',
      900: '#000000',
    },
  },
})
