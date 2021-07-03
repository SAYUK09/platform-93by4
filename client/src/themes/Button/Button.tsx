export const Button = {
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: 'base',
  },
  sizes: {},
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'brand.500',
      color: 'brand.500',
      _hover: { color: 'white', borderColor: 'white', bg: 'black' },
    },
    solid: {
      bg: 'brand.500',
      color: 'black',
      _hover: { bg: 'white' },
    },
  },
  defaultProps: {
    size: 'sm',
    variant: 'solid',
  },
}
