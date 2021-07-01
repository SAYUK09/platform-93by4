import { ChakraProvider, theme } from '@chakra-ui/react'
import { addDecorator } from "@storybook/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withChakra = (StoryFn) => {

  return (
    <ChakraProvider theme={theme}>
      <StoryFn />
    </ChakraProvider>
  )
}

export const decorators = [withChakra]