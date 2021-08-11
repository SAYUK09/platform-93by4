import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  Image,
  Center,
  Spinner,
} from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'
import { Layout } from '../components'
import { Footer } from '../components/Footer/Footer'
import NextLink from 'next/link'
import { useAuth } from '../context/AuthContext'
import router from 'next/router'

export default function Home() {
  const { authState } = useAuth()

  if (authState?.isAuthenticated) {
    router.push('/dashboard')
    return (
      <Center minH="100vh">
        <Spinner />
      </Center>
    )
  }

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
            <NextLink href="/auth/signup">
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
            </NextLink>
            <NextLink href="/auth/login">
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
            </NextLink>
          </Stack>
          <a
            href="https://neog.camp/level-one"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="link"
              color="gray.400"
              rightIcon={<FiExternalLink fontSize="xl" />}
              size="md"
              mt={{ base: '12', md: '8' }}
            >
              Know more about the camp
            </Button>
          </a>
          <Footer />
        </Box>
        <Box
          pos="relative"
          w={{ base: 'full', lg: '500px' }}
          h={{ base: 'auto', lg: '500px' }}
          px={4}
        >
          <Image
            src={'/svgs/landingPage.svg'}
            layout="responsive"
            alt="Your learning journey starts here. Photo of a computer with curly brackets."
          />
        </Box>
      </Stack>
    </Layout>
  )
}
