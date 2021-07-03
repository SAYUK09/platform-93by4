import { Layout } from '../../components'
import { Box, Button, Heading, Text, Link, Flex } from '@chakra-ui/react'
import link from 'next/link'

const CongratsCard: React.FC = () => {
  const user = {
    submission_no: 122,
    currentStatus: 'under review',
  }
  return (
    <Layout>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        colorScheme="black.200"
        m="10"
        p="10"
        background="black.800"
        border="none"
      >
        <Heading as="h1" size="lg" color="#00F0FF" fontFamily="Inter">
          Yay! Portfolio is successfully submitted! 🎉
        </Heading>
        <Text fontSize="14px" fontStyle="bold" pt="2" pb="2" color="white">
          Submission Number: #{user.submission_no}
        </Text>

        <Text fontSize="14px" fontStyle="bold" color="white">
          Current Status: {user.currentStatus}
        </Text>
        <Flex pt="5" justifyContent="space-between" alignItems="center">
          <Heading fontSize="md">
            <Link href="https://twitter.com" isExternal color="cyan">
              Tweet this out!
            </Link>
          </Heading>
          <Button colorScheme="brand" color="black">
            <a href="/">Go back to Dashboard</a>
          </Button>
        </Flex>
      </Box>
    </Layout>
  )
}

export default CongratsCard
