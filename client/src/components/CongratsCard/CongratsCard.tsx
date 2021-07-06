import { Box, Button, Heading, Text, Link, Flex } from '@chakra-ui/react'

type userStatusProps = {
  submissionNo: number
  currentStatus: string
}
export function CongratsCard({
  submissionNo,
  currentStatus,
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
        {currentStatus !== 'needs revision' ? 'submitted' : 'resubmission'}! 🎉
      </Heading>
      <Text fontSize="14px" fontStyle="bold" pt="2" pb="2" color="white">
        Submission Number: #{submissionNo}
      </Text>

      <Text fontSize="14px" fontStyle="bold" color="white">
        Current Status: {currentStatus}
      </Text>
      <Flex
        pt="5"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Heading fontSize="md" p={{ base: '3', md: '0' }}>
          <Link
            href="https://twitter.com/intent/tweet?text=I%20have%20successfully%20submitted%20my%20application.%20Thanks%20to%20%40tanaypratap%20%40neogcamp%20for%20such%20a%20great%20experience."
            isExternal
            color="cyan"
          >
            Tweet this out!
          </Link>
        </Heading>
        <Button colorscheme="brand" color="black">
          <a href="/">Go back to Dashboard</a>
        </Button>
      </Flex>
    </Box>
  )
}
