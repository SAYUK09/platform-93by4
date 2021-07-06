import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import {
  sendForgotPasswordRequest,
  sendPasswordResetRequest,
} from '../../../services/axiosService'
import * as yup from 'yup'
import { Formik, Form, Field } from 'formik'

interface PasswordResetValues {
  password: string
  confirmPassword: string
}

export const PasswordResetSchema = yup.object().shape({
  password: yup
    .string()
    .required('Password is required.')
    .min(8, 'Password must be atleast 8 characters long.'),
  newPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match.'),
})

export default function PasswordResetForm() {
  const router = useRouter()
  const { passwordResetToken } = router.query

  useEffect(() => {
    if (!passwordResetToken) {
      return
    }
    async function submitToken() {
      console.log(passwordResetToken)
      await sendForgotPasswordRequest({
        passwordResetToken: passwordResetToken as string | undefined,
      })
        .then((res) => {
          // todo -> render different UI according to response.
          console.log(res)
        })
        .catch((error) => console.log({ error }))
    }
    submitToken()
  }, [passwordResetToken])

  async function handleSubmit(data: {
    passwordResetToken: string
    password: string
  }) {
    await sendPasswordResetRequest(data.passwordResetToken, data.password)
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
  }

  return (
    <Box
      rounded="10px"
      maxW={['90%', '75%', '75%', '50%', '30%']}
      mx="auto"
      mt="3rem"
      bg={'gray.800'}
      shadow={'none'}
      border="1px solid"
      borderColor="gray.500"
    >
      <Box p={8}>
        <Box>
          <Heading>Set New Password.</Heading>
          <Text mt="1rem">Please enter your new password.</Text>
        </Box>
        <Formik
          initialValues={{
            password: '',
            confirmPassword: '',
          }}
          validationSchema={PasswordResetSchema}
          onSubmit={(values: PasswordResetValues) => handleSubmit(values)}
        >
          <Form>
            <Field name="password">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.password && form.touched.password}
                >
                  <FormLabel htmlFor="password">New Password</FormLabel>
                  <Input
                    {...field}
                    id="password"
                    placeholder="Your password"
                    type="password"
                  />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="confirmPassword">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.confirmPassword && form.touched.confirmPassword
                  }
                >
                  <FormLabel htmlFor="confirmPassword">
                    Confirm New Password
                  </FormLabel>
                  <Input
                    {...field}
                    id="confirmPassword"
                    placeholder="Your confirmPassword"
                    type="password"
                  />
                  <FormErrorMessage>
                    {form.errors.confirmPassword}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Button
              marginTop="1rem"
              width="100%"
              type="submit"
              loadingText="Submitting"
              colorscheme="blue"
            >
              Submit
            </Button>
          </Form>
        </Formik>
      </Box>
    </Box>
  )
}
