import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react'
import * as yup from 'yup'
import { Form, Formik, Field, FormikHelpers } from 'formik'
import { sendForgotPasswordRequest } from '../../../services/axiosService'

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
  async function handleSubmit(data: ForgotPasswordValues) {
    await sendForgotPasswordRequest(data)
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
  }

  return (
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
          <Heading>Reset Password.</Heading>
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
              {({ field, form }) => (
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

            {/* disble this button for 2 mins  */}
            <Button
              marginTop="1rem"
              width="100%"
              type="submit"
              loadingText="Submitting"
              colorScheme="blue"
            >
              Send Reset Link
            </Button>
          </Form>
        </Formik>
      </Box>
    </Box>
  )
}
