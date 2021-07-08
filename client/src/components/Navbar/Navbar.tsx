import {
  Flex,
  WrapItem,
  Avatar,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { theme } from '../../themes'
import Logo from '../../assests/svgs/neogcamp.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '../../context/AuthContext'

export function Navbar() {
  const { authState } = useAuth()
  return (
    <Flex
      background={theme.colors.black['700']}
      width={'100%'}
      maxHeight={'60px'}
      minHeight={'60px'}
      alignItems={'center'}
      justifyContent={'center'}
      position={'sticky'}
      top={'0'}
      left={'0'}
      zIndex={2}
    >
      <Flex
        width={'100%'}
        background={theme.colors.black['700']}
        height={'100%'}
        alignItems={'center'}
        maxWidth={'1100px'}
        padding={'0 1rem'}
        justifyContent={'space-between'}
      >
        <Link href="/" passHref>
          <ChakraLink>
            <Image src={Logo} alt="neog logo" />
          </ChakraLink>
        </Link>
        <Flex alignItems="center">
          <Avatar
            name="tanay pratap"
            src="https://steemitimages.com/p/3W72119s5BjWMGm4Xa2MvD5AT2bJsSA8F9WeC71v1s1fKfGkK9mMKuc3LcvF4KigbWg9UsrpEPFzhZmkPtP98r2tKda2NTNFs12GjanTh5hzXyKEtoWxYW?format=match&mode=fit&width=640"
            size="md"
          />
          <Text
            fontSize="md"
            pl="2"
            color={theme.colors.black['50']}
            fontWeight="600"
            textTransform="capitalize"
          >
            {authState?.user?.firstName || 'User'}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
