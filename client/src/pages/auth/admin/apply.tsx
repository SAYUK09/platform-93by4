import {
  Flex,
  Stack,
  Heading,
  Image,
  Button,
  Text,
  Checkbox,
} from '@chakra-ui/react'
import React from 'react'
import { Navbar, AuthLayout } from '../../../components'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Login() {
  const router = useRouter()
  const [checkboxToggle, setCheckboxToggle] = React.useState(false)

  return (
    <>
      <Head>
        <title>Apply to be a Reviewer | neoG.Camp</title>
      </Head>
      <Navbar />
      <AuthLayout>
        <Flex flex={1} d={{ base: 'none', md: 'flex' }}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src="https://unsplash.com/photos/SmkZz4aR-Ng/download?force=true"
            width="100%"
          />
        </Flex>

        <Flex
          p={['2rem', '2rem 3rem']}
          flex={1}
          align={'center'}
          justify={'center'}
        >
          <Stack spacing={8} w={'full'} maxW={'lg'}>
            <Heading fontSize={'4xl'} color="brand.500">
              Apply for Reviewer
            </Heading>

            <Stack spacing={8}>
              <Stack spacing={6}>
                <Text color="white" fontWeight="light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
                <Text color="white" fontWeight="light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
                <Checkbox
                  colorScheme="brand"
                  textColor="white"
                  onChange={() => {
                    setCheckboxToggle(!checkboxToggle)
                  }}
                >
                  I agree to the Terms and Privacy Policy
                </Checkbox>
                <Flex justify="space-between" align="center">
                  <Button
                    variant="link"
                    color="white"
                    onClick={() => router.push('/auth/admin/login')}
                  >
                    Login Instead
                  </Button>
                  <Button
                    colorScheme={'brand'}
                    variant={'solid'}
                    textColor={'black.800'}
                    disabled={!checkboxToggle}
                  >
                    Open Form
                  </Button>
                </Flex>
              </Stack>
            </Stack>
          </Stack>
        </Flex>
      </AuthLayout>
    </>
  )
}
