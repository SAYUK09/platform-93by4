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
  Text,
  Checkbox,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react'

import { AuthLayout, Navbar } from '../../components'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Formik, Form, Field, FormikHelpers } from 'formik'
import * as yup from 'yup'
import { register } from '../../services/axiosService'
import { useAuth } from '../../context/AuthContext'
import { useState } from 'react'

export interface SignUpValues {
  firstName: string
  lastName: string
  email: string
  password: string
  acceptTerms: boolean
}
// todo -> move this to utils maybe
const SignUpSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First Name is required.')
    .min(2, 'First name must be atleast 2 characters long.')
    .trim(),
  lastName: yup.string().required('Last name is required.'),
  email: yup
    .string()
    .email('Email must be a valid email address.')
    .required('Email address is required.'),
  password: yup
    .string()
    .required('Password is required.')
    .min(8, 'Password must be atleast 8 characters long.'),
  acceptTerms: yup
    .bool()
    .oneOf([true], 'Please accept Terms and Privacy Policy.'),
  // todo -> add regex for matching alpabets, symbols etc
})

export default function SignUp() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { setState } = useAuth()
  const router = useRouter()
  const toast = useToast()

  async function handleSubmit(data: SignUpValues) {
    setIsLoading(true)
    await register(data)
      // use dispatch actions here
      .then((res) => {
        console.log(res)
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
          router.push('/auth/email-verification')
        }
      })
      .catch((error) => {
        setIsLoading(false)
        setState({
          isAuthenticated: false,
          user: null,
        })
        toast({
          title: 'Failed to register account.',
          description: error.response.data.msg,
          isClosable: true,
          status: 'error',
        })
        console.log({ error: error })
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
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={'4xl'}>Create your account</Heading>

            <Formik
              initialValues={{
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                acceptTerms: false,
              }}
              validationSchema={SignUpSchema}
              onSubmit={(values: SignUpValues) => handleSubmit(values)}
            >
              <Form>
                <Stack spacing={4}>
                  <Field name="firstName">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.firstName && form.touched.firstName
                        }
                      >
                        <FormLabel htmlFor="email">First Name</FormLabel>
                        <Input
                          {...field}
                          id="firstName"
                          placeholder="First Name"
                          type="text"
                        />
                        <FormErrorMessage>
                          {form.errors.firstName}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="lastName">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.lastName && form.touched.lastName
                        }
                      >
                        <FormLabel htmlFor="email">Last Name</FormLabel>
                        <Input
                          {...field}
                          id="lastName"
                          type="text"
                          placeholder="Last Name"
                        />
                        <FormErrorMessage>
                          {form.errors.lastName}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <FormLabel htmlFor="email">Email Address</FormLabel>
                        <Input
                          {...field}
                          id="email"
                          type="email"
                          placeholder="you@example.com"
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
                          type="password"
                          placeholder="Password"
                        />
                        <FormErrorMessage>
                          {form.errors.password}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Stack spacing={5}>
                    <Stack
                      direction={{ base: 'column', sm: 'row' }}
                      align={'start'}
                      justify={'space-between'}
                    >
                      <Text fontSize={'xs'} fontStyle="italic">
                        Use 8 or more characters with a mix of numbers.
                      </Text>
                    </Stack>

                    <Stack direction={'row'} align={'center'}>
                      <Field name="acceptTerms">
                        {({ form, field }) => (
                          <FormControl
                            isInvalid={
                              form.errors.acceptTerms &&
                              form.touched.acceptTerms
                            }
                          >
                            <Flex align="center" mt={-4}>
                              <Checkbox
                                {...field}
                                type="checkbox"
                                mr={2}
                                id="acceptTerms"
                              />
                              <FormLabel htmlFor="acceptTerms" pt={4}>
                                By creating an account you agree to the &nbsp;
                                <a
                                  style={{ textDecoration: 'underline' }}
                                  href="https://handbook.neog.camp/qualifier/tnc"
                                  target="_blank noreferrer noopener"
                                >
                                  Terms
                                </a>
                                &nbsp; and{' '}
                                <a
                                  style={{ textDecoration: 'underline' }}
                                  href="https://handbook.neog.camp/qualifier/privacy"
                                  target="_blank noreferrer noopener"
                                >
                                  Privacy Policy
                                </a>
                              </FormLabel>
                            </Flex>
                            <FormErrorMessage>
                              {form.errors.acceptTerms}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Stack>

                    <Flex justify="space-between" align="center">
                      <Link
                        as={NextLink}
                        href="/auth/login"
                        style={{ fontWeight: 600 }}
                      >
                        Log in instead
                      </Link>

                      <Button
                        type="submit"
                        colorScheme={'blue'}
                        variant={'solid'}
                      >
                        Create Account
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
