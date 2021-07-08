import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Router, { useRouter } from 'next/router'
import { FiExternalLink } from 'react-icons/Fi'
import { Layout } from '../components'
import { Footer } from '../components/Footer/Footer'
import illustration from '../../public/svgs/landingPage.svg'

export default function Home() {
  const router = useRouter()
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
              onClick={() => router.push('/auth/signup')}
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
              onClick={() => router.push('/auth/login')}
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
            onClick={() => router.push('https://neog.camp/level-one')}
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
