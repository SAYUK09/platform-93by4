import { Flex, WrapItem, Avatar } from '@chakra-ui/react'
import { colors } from '../../styles/themeVars/themeVars'
import Logo from '../../assets/neogcamp.svg'
import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
  return (
    <Flex
      background={colors.darkGrey}
      width={'100vw'}
      maxHeight={'60px'}
      minHeight={'60px'}
      alignItems={'center'}
      justifyContent={'center'}
      position={'sticky'}
      top={'0'}
      left={'0'}
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
        <Link href="/">
          <Image src={Logo} alt="neog logo" />
        </Link>
        <WrapItem>
          <Avatar
            name="tanay pratap"
            src="https://steemitimages.com/p/3W72119s5BjWMGm4Xa2MvD5AT2bJsSA8F9WeC71v1s1fKfGkK9mMKuc3LcvF4KigbWg9UsrpEPFzhZmkPtP98r2tKda2NTNFs12GjanTh5hzXyKEtoWxYW?format=match&mode=fit&width=640"
            size="md"
          />
        </WrapItem>
      </Flex>
    </Flex>
  )
}
