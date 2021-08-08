import { Box, Button, Heading, Text, Link, Flex } from '@chakra-ui/react'
import NextLink from 'next/link'

type userStatusProps = {
  submissionNo?: string
  status?: string
}
export function CongratsCard({
  submissionNo,
  status,
}: userStatusProps): JSX.Element {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      colorscheme="black.200"
      m="10"
      p="10"
      background="black.800"
      border="none"
    >
      <Heading as="h1" size="lg" color="#00F0FF" fontFamily="Inter">
        Yay! Portfolio is successfully{' '}
        {status !== 'needs revision' ? 'submitted' : 'resubmission'}! 🎉
      </Heading>
      <Text fontSize="14px" fontStyle="bold" pt="2" pb="2" color="white">
        Submission Number: #{submissionNo}
      </Text>

      <Text fontSize="14px" fontStyle="bold" color="white">
        Current Status: {status!.split("_").map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
      </Text>
      <Flex
        pt="5"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Heading fontSize="md" p={{ base: '3', md: '0' }}>
          <Link
            href="https://twitter.com/intent/tweet?text=I%20am%20super%20excited%20to%20announce%20that%20I%20have%20completed%20levelZero%20of%20%40neogcamp%20and%20have%20successfully%20submitted%20my%20mark15%20portfolio.%0AIt%20was%20a%20great%20learning%20journey%20with%20%40tanaypratap.%0A%23neogcamp%20%23webdevlopment."
            isExternal
            color="cyan"
          >
            Tweet this out!
          </Link>
        </Heading>
        <NextLink href="/dashboard">
          <Button colorscheme="brand" color="black">
            Go back to Dashboard
          </Button>
        </NextLink>
      </Flex>
    </Box>
  )
}
