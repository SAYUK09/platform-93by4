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
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React, { useState } from 'react'
import { Formik, Form, Field, FormikHelpers } from 'formik'
import * as yup from 'yup'
import { Navbar, AuthLayout } from '../../components'
import { login } from '../../services/axiosService'
import { useAuth } from '../../context/AuthContext'
import { useRouter } from 'next/router'
import { theme } from '../../themes'

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
          router.push('/')
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
                    {/* These have no typedefinitions from formik itself. */}
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
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
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
                        <Text color={theme.colors.brand['500']}>
                          Forgot Password?
                        </Text>
                      </Link>
                    </Stack>
                    <Flex justify="space-between" align="center">
                      <Link
                        as={NextLink}
                        href="/auth/signup"
                        style={{ fontWeight: 600 }}
                      >
                        <Text as="u" color={theme.colors.brand['500']}>
                          Create Account
                        </Text>
                      </Link>
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
      </AuthLayout>
    </>
  )
}
