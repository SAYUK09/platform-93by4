<<<<<<< HEAD
import { Flex, Text, Heading, WrapItem, Avatar } from '@chakra-ui/react';
import { colors } from '../../styles/themeVars/themeVars';
=======
import { Flex, Text, Heading, WrapItem, Avatar } from '@chakra-ui/react'
import { colors } from '../../styles/themeVars/themeVars'
>>>>>>> 4e33e15b90eb8a862ae643e6bebe2721d5f03277

export function Navbar() {
  return (
    <Flex
      background={colors.darkGrey}
<<<<<<< HEAD
      width={'100vw'}
=======
      width={'100%'}
>>>>>>> 4e33e15b90eb8a862ae643e6bebe2721d5f03277
      maxHeight={'60px'}
      minHeight={'60px'}
      alignItems={'center'}
      justifyContent={'center'}
      position={'sticky'}
      top={'0'}
      left={'0'}
<<<<<<< HEAD
      zIndex={'2'}
=======
>>>>>>> 4e33e15b90eb8a862ae643e6bebe2721d5f03277
    >
      <Flex
        background={colors.darkGrey}
        width={'100vw'}
        height={'100%'}
        alignItems={'center'}
        maxWidth={'1100px'}
        padding={'0 1rem'}
        justifyContent={'space-between'}
      >
        <Heading
          fontSize={'1.8rem'}
          backgroundImage={colors.blueGradient}
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
