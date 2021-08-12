import {
  Flex,
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
  FormErrorMessage,
  useToast,
  InputRightElement,
  InputGroup,
  Box,
  Text,
} from '@chakra-ui/react'
import { SEO } from '../../components/Layout/SEO'
import NextLink from 'next/link'
import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, FormikHelpers } from 'formik'
import * as yup from 'yup'
import { Navbar, AuthLayout } from '../../components'
import { login } from '../../services/axiosService'
import { useAuth } from '../../context/AuthContext'
import { useRouter } from 'next/router'
import { theme } from '../../themes'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { BgPattern } from '../../components/BgPattern/BgPattern'
export interface LoginValues {
  email: string
  password: string
}

const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email address.')
    .required('Email is required.')
    .lowercase(),
  password: yup.string().required('Password is required.'),
})

export default function Login() {
  const { setState, authState } = useAuth()
  const router = useRouter()
  const toast = useToast()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showPassword, setShowpassword] = useState<boolean>(false)

  useEffect(() => {
    if (authState?.isAuthenticated) {
      router.push('/dashboard')
    }
  }, [authState?.isAuthenticated])

  async function handleSubmit(data: LoginValues) {
    setIsLoading(true)
    let submissionParseData: {
      submissionNo: string
      status: string
    } | null = null
    const submissionData =
      localStorage && localStorage.getItem('neogSubmission')
    if (submissionData) {
      submissionParseData = JSON.parse(submissionData)
    }
    await login(data)
      .then((res) => {
        if (res.status === 200) {
          setState({
            isAuthenticated: true,
            user: {
              email: res.data.email,
              firstName: res.data.firstName,
              lastName: res.data.lastName,
              userId: res.data.userId,
              submissionData: submissionParseData,
            },
            isLoading: false,
          })
          localStorage.setItem('x-auth-token', res.data.token)
          setIsLoading(false)
          toast({
            title: 'Login Successful!',
            isClosable: true,
            status: 'success',
          })
          router.push('/dashboard')
        }
      })
      .catch((error) => {
        setIsLoading(false)
        setState({
          isAuthenticated: false,
          user: null,
          isLoading: false,
        })
        if (error.response.data.code === 'EMAIL_NOT_VERIFIED') {
          return toast({
            title: 'Failed to log you in.',
            description: error.response.data.msg,
            status: 'error',
            isClosable: true,
            duration: 9000,
            render: () => (
              <Box color="white" rounded="md" p={3} bg="blue.500">
                <Text>
                  Your Email address needs verification. Please click on the
                  link sent to you.
                </Text>
                <Flex justifyContent="space-between" alignItems="center">
                  <Text>Did not recieve link ?</Text>
                  <Link href="/auth/email-verification/resend-link">
                    <Button>Click here to resend</Button>
                  </Link>
                </Flex>
              </Box>
            ),
          })
        } else {
          toast({
            title: 'Failed to log you in.',
            description: error.response.data.msg,
            status: 'error',
            isClosable: true,
          })
        }
      })
  }

  return (
    <>
      <SEO
        title="Login | NeoG Camp"
        description="Start your journey into NeoG Camp."
      />
      <Navbar />
      <AuthLayout>
        <Flex w="100vw" maxW="1000px">
          <Flex flex={1.2} d={{ base: 'none', md: 'flex' }}>
            <BgPattern />
          </Flex>

          <Flex
            p={['2rem', '2rem 3rem']}
            flex={1}
            align={'center'}
            justify={'center'}
          >
            <Stack spacing={8} w={'full'} maxW={'lg'}>
              <Heading fontSize={'4xl'} color={theme.colors.brand['500']}>
                Log In
              </Heading>
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                validationSchema={SignInSchema}
                onSubmit={(values: LoginValues) => handleSubmit(values)}
              >
                <Form>
                  <Stack spacing={8}>
                    <Field name="email">
                      {({ field, form }: { field: any; form: any }) => (
                        <FormControl
                          isInvalid={form.errors.email && form.touched.email}
                        >
                          <FormLabel
                            htmlFor="email"
                            color={theme.colors.black['50']}
                          >
                            Email Address
                          </FormLabel>
                          <Input
                            {...field}
                            id="email"
                            placeholder="you@example.com"
                            type="email"
                          />

                          <FormErrorMessage>
                            {form.errors.email}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="password">
                      {({ field, form }: { field: any; form: any }) => (
                        <FormControl
                          isInvalid={
                            form.errors.password && form.touched.password
                          }
                        >
                          <FormLabel
                            htmlFor="password"
                            color={theme.colors.black['50']}
                          >
                            Password
                          </FormLabel>
                          <InputGroup>
                            <Input
                              {...field}
                              id="password"
                              placeholder="Your password"
                              type={showPassword ? 'text' : 'password'}
                            />
                            <InputRightElement mr="4">
                              <Button
                                h="1.75rem"
                                size="sm"
                                onClick={() => setShowpassword(!showPassword)}
                              >
                                {showPassword ? (
                                  <AiOutlineEyeInvisible />
                                ) : (
                                  <AiOutlineEye />
                                )}
                              </Button>
                            </InputRightElement>
                          </InputGroup>
                          <FormErrorMessage>
                            {form.errors.password}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Stack spacing={6}>
                      <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}
                      >
                        <NextLink href="/auth/forgot-password/" passHref>
                          <Link
                            color={theme.colors.brand['500']}
                            fontStyle="italic"
                            fontSize="sm"
                          >
                            Forgot Password?
                          </Link>
                        </NextLink>
                      </Stack>
                      <Flex justify="space-between" align="center">
                        <NextLink href="/auth/signup" passHref>
                          <Link color={theme.colors.brand['500']}>
                            Create an account
                          </Link>
                        </NextLink>
                        <Button
                          type="submit"
                          colorscheme={'blue'}
                          variant={'solid'}
                          isLoading={isLoading}
                          loadingText="Signing you in"
                        >
                          Login
                        </Button>
                      </Flex>
                    </Stack>
                  </Stack>
                </Form>
              </Formik>
            </Stack>
          </Flex>
        </Flex>
      </AuthLayout>
    </>
  )
}
