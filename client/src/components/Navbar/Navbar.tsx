import {
  Flex,
  Heading,
  WrapItem,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
} from '@chakra-ui/react'
import { theme } from '../../themes'
import { FaUserCircle } from 'react-icons/fa'

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
          <Menu>
            <MenuButton>
              <FaUserCircle
                style={{
                  width: '2rem',
                  height: '2rem',
                  strokeWidth: '20px',
                  fill: 'none',
                  color: theme.colors.black['100'],
                }}
              />
            </MenuButton>
            <MenuList background={theme.colors.black['700']}>
              <MenuGroup>
                <MenuItem>Logout </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </WrapItem>
      </Flex>
    </Flex>
  )
}
