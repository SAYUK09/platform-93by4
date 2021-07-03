import {
  Flex,
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Image,
  Button,
  Link,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React, { useState } from 'react'
import { Formik, Form, Field, FormikHelpers } from 'formik'
import * as yup from 'yup'
import { Navbar, AuthLayout } from '../../components'
import { login } from '../../services/axiosService'
import { useAuth } from '../../context/AuthContext'
import { useRouter } from 'next/router'

export interface LoginValues {
  email: string
  password: string
}
// @TODO - move this to seperate file
const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email address.')
    .required('Email is required.'),
  password: yup.string().required('Password is required.'),
})

export default function Login() {
  const { setState } = useAuth()
  const router = useRouter()
  const toast = useToast()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function handleSubmit(data: LoginValues) {
    setIsLoading(true)
    await login(data)
      .then((res) => {
        console.log(res.data)
        if (res.status === 200) {
          setState({
            isAuthenticated: true,
            user: {
              email: res.data.email,
              firstName: res.data.firstName,
              lastName: res.data.lastName,
              userId: res.data.userId,
            },
          })
          setIsLoading(false)
          toast({
            title: 'Logged in..!',
            isClosable: true,
            status: 'success',
          })
          router.push('/dashboard')
        }
      })
      .catch((error) => {
        console.log(error.response.data)
        setIsLoading(false)
        setState({
          isAuthenticated: false,
          user: null,
        })
        toast({
          title: 'Failed to log you in.',
          description: error.response.data.msg,
          status: 'error',
          isClosable: true,
        })
      })
  }

  return (
    <>
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
            <Heading fontSize={'4xl'}>Log In</Heading>
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
                    {/* These have no typedefinitions from formik itself. */}
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <FormLabel htmlFor="email">Email Address</FormLabel>
                        <Input
                          {...field}
                          id="email"
                          placeholder="you@example.com"
                          type="email"
                        />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="password">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.password && form.touched.password
                        }
                      >
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                          {...field}
                          id="password"
                          placeholder="Your password"
                          type="password"
                        />
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
                      <Link
                        href="/auth/forgot-password/"
                        fontStyle="italic"
                        fontSize="sm"
                      >
                        Forgot password?
                      </Link>
                    </Stack>
                    <Flex justify="space-between" align="center">
                      <Link
                        as={NextLink}
                        href="/auth/signup"
                        style={{ fontWeight: 600 }}
                      >
                        Create Account
                      </Link>
                      <Button
                        type="submit"
                        colorScheme={'blue'}
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
      </AuthLayout>
    </>
  )
}
