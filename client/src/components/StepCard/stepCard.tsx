import React from "react";
import { Flex, Box, Heading } from "@chakra-ui/react";
import { UnlockIcon, LockIcon, ExternalLinkIcon } from "@chakra-ui/icons";
export default function StepCard({ bgColor, step, status }: any) {
  return (
    <Flex
      flexDir={["column", "column", "row"]}
      alignItems="center"
      justifyContent="space-between"
      bgColor={bgColor}
      borderRadius={5}
      px={8}
      py={4}
      mb={3}
    >
      <Box m={2}>
        {status.level >= step.level ? (
          <UnlockIcon boxSize="30px" color="blue.400" />
        ) : (
          <LockIcon boxSize="30px" />
        )}
      </Box>
      <Heading as="h3" size="md" flex="auto">
        {step.content}
      </Heading>

      {status.level == step.level ? (
        <a href={step.link}>
          <ExternalLinkIcon boxSize="30px" m={2} />
        </a>
      ) : (
        <ExternalLinkIcon boxSize="30px" m={2} color="gray.600" />
      )}
    </Flex>
  );
}
