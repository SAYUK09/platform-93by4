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
  Checkbox,
} from '@chakra-ui/react'
import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import { Navbar, AuthLayout } from '../../../components'
import { login } from '../../../services/axiosService'
import Head from 'next/head'
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
  const router = useRouter()
  const [checkboxToggle, setCheckboxToggle] = React.useState({
    guideCheck: false,
    responsibitiesCheck: false,
  })
  async function handleSubmit(data: LoginValues) {
    await login(data)
      .catch((error) => console.log(error.response.data))
  }

  return (
    <>
      <Head>
        <title>Reviewer Login | neoG.Camp</title>
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
              Reviewer Login
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
                        <FormLabel htmlFor="email" color="white">
                          Email Address
                        </FormLabel>
                        <Input
                          {...field}
                          id="email"
                          placeholder="you@example.com"
                          type="email"
                          color="white"
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
                        <FormLabel htmlFor="password" color="white">
                          Password
                        </FormLabel>
                        <Input
                          {...field}
                          id="password"
                          placeholder="Your password"
                          type="password"
                          color="white"
                        />
                        <FormErrorMessage>
                          {form.errors.password}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Stack spacing={4}>
                    <Stack
                      direction={{ base: 'column', sm: 'row' }}
                      align={'start'}
                      justify={'space-between'}
                    >
                      <Link
                        href="/auth/forgot-password/"
                        fontStyle="italic"
                        fontSize="sm"
                        color="black.200"
                      >
                        Forgot password?
                      </Link>
                    </Stack>
                    <Stack>
                      <Checkbox
                        color="white"
                        colorScheme="brand"
                        onChange={() => {
                          setCheckboxToggle({
                            ...checkboxToggle,
                            guideCheck: !checkboxToggle.guideCheck,
                          })
                        }}
                      >
                        I have read the guide & ready to review.
                      </Checkbox>
                      <Checkbox
                        color="white"
                        colorScheme="brand"
                        onChange={() => {
                          setCheckboxToggle({
                            ...checkboxToggle,
                            responsibitiesCheck:
                              !checkboxToggle.responsibitiesCheck,
                          })
                        }}
                      >
                        I accept the role & responsibilities.
                      </Checkbox>
                    </Stack>
                    <Flex justify="space-between" align="center">
                      <Button
                        variant="link"
                        color="white"
                        onClick={() => router.push('/auth/admin/apply')}
                      >
                        Apply to be a Reviewer
                      </Button>
                      <Button
                        type="submit"
                        colorScheme={'brand'}
                        variant={'solid'}
                        textColor={'black.800'}
                        disabled={
                          checkboxToggle.guideCheck === true &&
                          checkboxToggle.responsibitiesCheck === true
                            ? false
                            : true
                        }
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
