import {
  chakra,
  Flex,
  Heading,
  Text,
  useMediaQuery,
  Image,
} from '@chakra-ui/react'
import { AdminIntroString } from './../../data/strings/adminIntro'
import { theme } from '../../themes'

export function DashboardIntroCard() {
  // const [isSmallerThan800] = useMediaQuery('(max-width: 800px)')
  // const [isSmallerThan400] = useMediaQuery('(max-width: 400px)')
  return (
    <Flex
      width={'100%'}
      min-height={'35vh'}
      background={theme.colors.black['800']}
      borderRadius={'8px'}
      padding={['1rem', '0.5rem']}
      flexDirection={['column-reverse', 'column-reverse', 'row']}
    >
      <Flex
        flex={'1'}
        justifyContent={'flex-start'}
        px={'2rem'}
        py={'2rem'}
        alignItems={['center', 'flex-start']}
        flexDirection={'column'}
        textAlign={['center', 'left']}
        width={['100%', '100%', '60%']}
      >
        <Heading color={'brand.300'}>
          {AdminIntroString.heading}{' '}
          <chakra.span color={'white'}>{'14'}</chakra.span>
        </Heading>
        <Text
          fontWeight={'500'}
          // margin={'1rem 0'}
          color={'white'}
          maxWidth={'450px'}
        >
          {AdminIntroString.caption}
        </Text>
      </Flex>
      <Flex
        height="100%"
        flex={'1'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Image height="100%" src={'/svgs/adminIntro.svg'} />
      </Flex>
    </Flex>
  )
}
