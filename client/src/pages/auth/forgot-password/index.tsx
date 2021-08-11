import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react'
import * as yup from 'yup'
import { Form, Formik, Field, FormikHelpers } from 'formik'
import { sendForgotPasswordRequest } from '../../../services/axiosService'
import { useEffect, useState } from 'react'
import { SEO } from '../../../components/Layout/SEO'

const ForgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email address.')
    .required('Email is required.'),
})

interface ForgotPasswordValues {
  email: string
}

export default function ForgotPassword() {
  const toast = useToast()
  const [buttonDisabled, setButtonDisabled] = useState(false)

  async function handleSubmit(data: ForgotPasswordValues) {
    await sendForgotPasswordRequest(data)
      .then((res) => {
        if (res.status === 200) {
          setButtonDisabled(true)
          toast({
            title: 'An email has been sent to you.',
            description: 'Please check your inbox for a mail from neoG Camp.',
          })
        }
      })
      .catch((error) => {
        setButtonDisabled(false)
        toast({
          title: 'There was some problem sending email.',
          description: 'Please try again after some time.',
        })
      })
  }

  useEffect(() => {
    setTimeout(() => {
      setButtonDisabled(false)
    }, 300000)
  }, [buttonDisabled])

  return (
    <>
      <SEO
        title="Forgot your password | NeoG Camp"
        description="Enter the email you used for this account to reset your password."
      />
      <Box
        borderRadius="10px"
        maxW={['90%', '75%', '75%', '50%', '30%']}
        margin="0 auto"
        marginTop="3rem"
        bg={'gray.800'}
        boxShadow={'base'}
        border="1px solid"
        borderColor="gray.500"
      >
        <Box px="2rem" py="2rem">
          <Box>
            <Heading>Reset Password</Heading>
            <Text marginTop="1rem">
              Enter the email you used for this account. We will mail you a link
              to reset your password.
            </Text>
          </Box>

          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={ForgotPasswordSchema}
            onSubmit={(
              values: ForgotPasswordValues,
              { setSubmitting }: FormikHelpers<ForgotPasswordValues>
            ) => handleSubmit(values)}
          >
            <Form>
              <Field name="email">
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel htmlFor="email" mt={'4'}>
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

              <Button
                marginTop="1rem"
                width="100%"
                type="submit"
                loadingText="Submitting"
                colorscheme="blue"
                disabled={buttonDisabled}
              >
                Send Reset Link
              </Button>
            </Form>
          </Formik>
        </Box>
      </Box>
    </>
  )
}
