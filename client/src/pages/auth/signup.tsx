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
  InputRightElement,
  InputGroup,
  Skeleton,
} from '@chakra-ui/react'

import { AuthLayout, Navbar } from '../../components'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Formik, Form, Field, FormikHelpers } from 'formik'
import * as yup from 'yup'
import { register } from '../../services/axiosService'
import { useAuth } from '../../context/AuthContext'
import { useState } from 'react'
import { theme } from '../../themes'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

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
    .matches(/^[A-Za-z ]*$/, 'Please use only alphabets.')
    .trim(),
  lastName: yup
    .string()
    .required('Last name is required.')
    .matches(/^[A-Za-z ]*$/, 'Please use only alphabets.')
    .trim(),
  email: yup
    .string()
    .email('Email must be a valid email address.')
    .required('Email address is required.'),
  password: yup
    .string()
    .required('Password is required.')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, mix of numbers and alphabets.'
    )
    .min(8, 'Password must be atleast 8 characters long.'),
  acceptTerms: yup
    .bool()
    .oneOf([true], 'Please accept Terms and Privacy Policy.'),
  // todo -> add regex for matching alpabets, symbols etc
})

export default function SignUp() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { authState, setState } = useAuth()
  const router = useRouter()
  const toast = useToast()
  const [showPassword, setShowpassword] = useState<boolean>(false)
  const [imgLoaded, setImgLoaded] = useState<boolean>(false)

  async function handleSubmit(data: SignUpValues) {
    setIsLoading(true)
    await register(data)
      // use dispatch actions here
      .then((res) => {
        if (res.status === 200) {
          const { email, firstName, lastName, userId } = res.data.user
          setState({
            isAuthenticated: true,
            user: {
              email,
              firstName,
              lastName,
              userId,
            },
          })
          console.log({ authState, data: res.data })
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
          title: 'Email already exists.',
          description: error.response.data.msg,
          isClosable: true,
          status: 'error',
        })
        console.log({ error: error })
      })
  }

  function handleImageLoad() {
    setImgLoaded(true)
  }

  return (
    <>
      <Navbar />
      <AuthLayout>
        <Flex flex={1} d={{ base: 'none', md: 'flex' }}>
          {!imgLoaded && <Skeleton height="100%" width="100%" />}
          <Image
            height={!imgLoaded ? '' : '100%'}
            alt={'Login Image'}
            objectFit={'cover'}
            src="/auth.jpg"
            width="100%"
            d={!imgLoaded ? 'none' : 'inherit'}
            onLoad={handleImageLoad}
          />
        </Flex>

        <Flex
          p={['2rem', '2rem 3rem']}
          flex={1}
          align={'center'}
          justify={'center'}
        >
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={'4xl'} color={theme.colors.brand['500']}>
              Create your account
            </Heading>

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
                    {({ field, form }: { field: any; form: any }) => (
                      <FormControl
                        isInvalid={
                          form.errors.firstName && form.touched.firstName
                        }
                      >
                        <FormLabel
                          htmlFor="email"
                          color={theme.colors.black['50']}
                        >
                          First Name
                        </FormLabel>
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
                    {({ field, form }: { field: any; form: any }) => (
                      <FormControl
                        isInvalid={
                          form.errors.lastName && form.touched.lastName
                        }
                      >
                        <FormLabel
                          htmlFor="email"
                          color={theme.colors.black['50']}
                        >
                          Last Name
                        </FormLabel>
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
                          type="email"
                          placeholder="you@example.com"
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
                        <InputGroup>
                          <Input
                            {...field}
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
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

                  <Stack spacing={5}>
                    <Stack
                      direction={{ base: 'column', sm: 'row' }}
                      align={'start'}
                      justify={'space-between'}
                    >
                      <Text
                        fontSize={'xs'}
                        fontStyle="italic"
                        color={theme.colors.black['100']}
                      >
                        Use 8 or more characters with a mix of numbers.
                      </Text>
                    </Stack>

                    <Stack direction={'row'} align={'center'}>
                      <Field name="acceptTerms">
                        {({ field, form }: { field: any; form: any }) => (
                          <FormControl
                            isInvalid={
                              form.errors.acceptTerms &&
                              form.touched.acceptTerms
                            }
                          >
                            <Flex mt={-4}>
                              <Checkbox
                                {...field}
                                type="checkbox"
                                mr={2}
                                id="acceptTerms"
                              />
                              <FormLabel
                                htmlFor="acceptTerms"
                                pt={4}
                                color={theme.colors.black['100']}
                              >
                                By creating an account you agree to the &nbsp;
                                <Link
                                  href="https://handbook.neog.camp/qualifier/tnc"
                                  target="_blank noreferrer noopener"
                                  color={theme.colors.brand['500']}
                                >
                                  Terms
                                </Link>
                                &nbsp; and{' '}
                                <Link
                                  color={theme.colors.brand['500']}
                                  href="https://handbook.neog.camp/qualifier/privacy"
                                  target="_blank noreferrer noopener"
                                >
                                  Privacy Policy
                                </Link>
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
                      <NextLink passHref href="/auth/login">
                        <Link color={theme.colors.brand['500']}>
                          Log in instead
                        </Link>
                      </NextLink>
                      <Field>
                        {({ form }) => {
                          return (
                            <Button
                              isLoading={isLoading}
                              type="submit"
                              colorscheme={'blue'}
                              variant={'solid'}
                              disabled={!form.isValid}
                            >
                              Create Account
                            </Button>
                          )
                        }}
                      </Field>
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
