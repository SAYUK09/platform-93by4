import { chakra, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import { colors } from "../../styles/themeVars/themeVars";
import {AdminIntroString} from "./../../data/strings/adminIntro"
export function DashboardIntroCard() {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");
  const [isSmallerThan400] = useMediaQuery("(max-width: 400px)");
  return (
    <Flex
      width={"100%"}
      marginTop={"2rem"}
      background={colors.darkGrey}
      borderRadius={"8px"}
      padding={isSmallerThan400 ? "1rem" : "2rem"}
      flexDirection={isSmallerThan800 ? "column-reverse" : "row"}
    >
      <Flex
        flex={"1"}
        justifyContent={"center"}
        alignItems={isSmallerThan800 ? "center" : "flex-start"}
        flexDirection={"column"}
        marginTop={isSmallerThan800 ? "2rem" : ""}
        textAlign={isSmallerThan800 ? "center" : "left"}
      >
        <Heading color={colors.lightBlue}>{AdminIntroString.heading} <chakra.span color={colors.textColor}>{"14"}</chakra.span></Heading>
        <Text
          fontWeight={"500"}
          margin={"1rem 0"}
          color={colors.textColor}
          maxWidth={"450px"}
        >
         {AdminIntroString.caption}
        </Text>
      </Flex>
      <Flex
        position={"relative"}
        flex={"1"}
        minHeight={isSmallerThan800 ? "200px" : "300px"}
        maxWidth={isSmallerThan800 ? "100%" : "350px"}
        alignItems={"center"}
        padding={"2rem"}
      >
        <Image src={"/svgs/adminIntro.svg"} layout={"fill"} />
      </Flex>
    </Flex>
  );
}
