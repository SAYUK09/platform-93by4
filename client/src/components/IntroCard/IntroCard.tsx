import { Flex, Heading, Text, Image } from '@chakra-ui/react'
import { theme } from '../../themes'

export function IntroCard() {
  return (
    <Flex
      width={'100%'}
      marginTop={'2rem'}
      background={theme.colors.black['800']}
      borderRadius={'8px'}
      padding={['1rem', '2rem']}
      flexDirection={['column-reverse', 'row']}
    >
      <Flex
        flex={'1'}
        justifyContent={'center'}
        alignItems={['center', 'flex-start']}
        flexDirection={'column'}
        marginTop={['2rem', '']}
        textAlign={['center', 'left']}
      >
        <Heading color={theme.colors.brand['500']}>Hi {'Tanay'}! 👋</Heading>
        <Text
          fontWeight={'500'}
          margin={'1rem 0'}
          color={theme.colors.black['50']}
          maxWidth={'450px'}
        >
          Thank you for trusting us to start your programming journey. We are
          sure you are going to love it.
        </Text>
      </Flex>
      <Flex
        position={'relative'}
        flex={'1'}
        minHeight={['200px', '300px']}
        maxWidth={['100%', '350px']}
        alignItems={'center'}
        padding={'2rem'}
      >
        <Image src={'/svgs/hello.svg'} layout={'fill'} />
      </Flex>
    </Flex>
  )
}
