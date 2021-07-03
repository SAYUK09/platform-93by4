import { Flex, WrapItem  , Menu , MenuButton , MenuList , MenuGroup , MenuItem} from "@chakra-ui/react";
import { colors } from "../../styles/themeVars/themeVars";
import Logo from '../../images/logo.png'
import Image from 'next/image'
import { FaUserCircle } from 'react-icons/fa';
export function Navbar() {
  return (
    <Flex
      background={colors.darkGrey}
      width={"100vw"}
      maxHeight={"60px"}
      minHeight={"60px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Flex
        background={colors.darkGrey}
        width={"100vw"}
        height={"100%"}
        alignItems={"center"}
        maxWidth={"1100px"}
        justifyContent={"space-between"}
      >
        <Image src={Logo} />
        <WrapItem>
          
          <Menu>
  <MenuButton >
  <FaUserCircle style={{width:"2rem" , height : "2rem" , strokeWidth:"20px" , fill: "none"}}/>
  </MenuButton>
  <MenuList background={colors.darkGrey}>
    <MenuGroup>
      <MenuItem>Logout </MenuItem>
    </MenuGroup>
    
  </MenuList>
</Menu>
        </WrapItem>
      </Flex>
    </Flex>
  );
}
