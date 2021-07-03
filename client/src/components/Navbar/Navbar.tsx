import { Flex, Heading, WrapItem, Avatar } from '@chakra-ui/react'
import { theme } from '../../themes'

export function Navbar() {
  return (
    <Flex
      background={theme.colors.black['700']}
      width={'100vw'}
      maxHeight={'60px'}
      minHeight={'60px'}
      alignItems={'center'}
      justifyContent={'center'}
      position={'sticky'}
      top={'0'}
      left={'0'}
      zIndex={'2'}
    >
      <Flex
        background={theme.colors.black['700']}
        width={'100vw'}
        height={'100%'}
        alignItems={'center'}
        maxWidth={'1100px'}
        padding={'0 1rem'}
        justifyContent={'space-between'}
      >
        <Heading
          fontSize={'1.8rem'}
          backgroundImage={`linear-gradient(${theme.colors.brand['500']}, ${theme.colors.brand['600']})`}
          backgroundClip={'text'}
        >
          neoG.camp
        </Heading>
        <WrapItem>
          <Avatar name="tanay pratap" />
        </WrapItem>
      </Flex>
    </Flex>
  )
}
