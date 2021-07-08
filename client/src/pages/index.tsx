import { Text, Flex } from '@chakra-ui/react'

import { Layout, StatusCard, StepCard } from '../components'
import withAuth from '../context/WithAuth'
import {
  statusData,
  steps,
  submissionSting,
} from '../data/staticData/admissionStages'
import { theme } from '../themes'

function Dashboard() {
  return (
    <Layout>
      <Stack
        direction={{ base: 'column-reverse', lg: 'row' }}
        spacing={{ base: '3rem', lg: '4rem' }}
        align={{ lg: 'center' }}
        justify="space-between"
      >
        <Box flex="1" maxW={{ lg: '520px' }}>
          <Heading
            as="h1"
            size="3xl"
            color={'white'}
            fontWeight="extrabold"
            letterSpacing="tighter"
          >
            Your learning journey starts here.
          </Heading>
          <Text color={'gray.400'} mt="4" fontSize="lg" fontWeight="medium">
            Signup to start your admission process for neoG Camp (levelOne)
          </Text>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing="4"
            mt={{ base: '12', md: '8' }}
          >
            <Button
              size="lg"
              minW="210px"
              colorScheme="brand.500"
              height="14"
              px="8"
              color="black.900"
            >
              Signup
            </Button>
            <Button
              size="lg"
              bg="black.900"
              color="brand.500"
              _hover={{ bg: 'black.800' }}
              height="14"
              px="8"
              shadow="base"
              border="2px"
              borderColor="brand.500"
            >
              Login
            </Button>
          </Stack>
          <Button
            variant="link"
            color="gray.400"
            rightIcon={<FiExternalLink fontSize="xl" />}
            size="md"
            mt={{ base: '12', md: '8' }}
          >
            Know more about the camp
          </Button>
          <Footer />
        </Box>
        <Box
          pos="relative"
          w={{ base: 'full', lg: '500px' }}
          h={{ base: 'auto', lg: '500px' }}
          px={4}
        >
          <Image src={illustration} layout="responsive" />
        </Box>
      </Stack>
    </Layout>
  )
}

export default withAuth(Dashboard)
