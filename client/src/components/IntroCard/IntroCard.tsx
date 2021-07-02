import React from "react";
import { Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import DashboardImage from "../../images/dashboard-girl.png";
export function IntroCard({ status, bgColor } : any) {
  return (
    <Flex
      className="welcome-section"
      bgColor={bgColor}
      p={8}
      borderRadius={5}
      flexDir={["column", "column", "row"]}
    >
      <Flex
        flexDir="column"
        justifyContent="center"
        width={["100%", "100%", "60%"]}
      >
        <Heading fontSize={["xl", "2xl", "3xl"]}>
          {" "}
          Current Status : {status.statusText}
        </Heading>
        <Text fontWeight="500" color="blue.200" py={2}>
          {status.statusDescription}
        </Text>
      </Flex>
      <Spacer />
      <Flex justifyContent="center" margin={["2rem", " 1rem", "0rem"]}>
        <Image src={DashboardImage} />
      </Flex>
    </Flex>
  );
}
