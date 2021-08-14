import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  useToast,
  Checkbox,
  InputGroup,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { sendPasswordResetRequest } from '../../../services/axiosService'
import * as yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { SEO } from '../../../components/Layout/SEO'
interface PasswordResetValues {
  password: string
  confirmPassword: string
}

export const PasswordResetSchema = yup.object().shape({
  password: yup
    .string()
    .required('Password is required.')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must contain 8 characters, mix of numbers and alphabets.'
    )
    .min(8, 'Password must be atleast 8 characters long.'),
  confirmPassword: yup
    .string()
    .required('Please confirm password before submitting.')
    .oneOf([yup.ref('password'), null], 'Passwords must match.'),
})

export default function PasswordResetForm() {
  const toast = useToast()
  const router = useRouter()
  const passwordResetToken = router.query.passwordResetToken as string

  const [token, setToken] = useState('')

  useEffect(() => {
    if (!passwordResetToken) {
      return
    } else {
      setToken(passwordResetToken)
    }
  }, [passwordResetToken])

  async function handleSubmit(data: {
    passwordResetToken?: string
    password: string
  }) {
    await sendPasswordResetRequest(token, data.password)
      .then((res) => {
        if (res.status === 200) {
          toast({
            title: 'Password has been reset !',
            description: 'Please proceed to login.',
            status: 'success',
          })
          router.push('/auth/login')
        }
      })
      .catch((error) => {
        toast({
          title: 'Password reset link has been expired.',
          description:
            'Please issue a new link by clicking forgot password button.',
          status: 'error',
        })
      })
  }

  return (
    <>
      <SEO
        title="Reset your password. | NeoG Camp"
        description="Please enter your new password."
      />
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
            <Heading>Set New Password</Heading>
          </Box>
          <br />
          <Formik
            initialValues={{
              password: '',
              confirmPassword: '',
              toggle: false,
            }}
            validationSchema={PasswordResetSchema}
            onSubmit={(values: PasswordResetValues) => handleSubmit(values)}
          >
            <Form>
              <Field name="password">
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <FormLabel htmlFor="password">New Password</FormLabel>
                    <InputGroup>
                      <Input
                        {...field}
                        id="password"
                        placeholder="Your password"
                        type={form.values.toggle ? 'text' : 'password'}
                      />
                    </InputGroup>
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <br />
              <Field name="confirmPassword">
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={
                      form.errors.confirmPassword &&
                      form.touched.confirmPassword
                    }
                  >
                    <FormLabel htmlFor="confirmPassword">
                      Confirm New Password
                    </FormLabel>
                    <InputGroup>
                      <Input
                        {...field}
                        id="confirmPassword"
                        placeholder="Re-enter your new password"
                        type={form.values.toggle ? 'text' : 'password'}
                      />
                    </InputGroup>
                    <FormErrorMessage>
                      {form.errors.confirmPassword}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Box mt={4}>
                <label>
                  <Field as={Checkbox} type="checkbox" name="toggle">
                    <span>Show Password</span>
                  </Field>
                </label>
              </Box>
              <Field>
                {({ form }: { form: any }) => {
                  return (
                    <Button
                      marginTop="1rem"
                      width="100%"
                      type="submit"
                      loadingText="Submitting"
                      colorscheme="blue"
                      disabled={!form.isValid || form.isDirty}
                    >
                      Submit
                    </Button>
                  )
                }}
              </Field>
            </Form>
          </Formik>
        </Box>
      </Box>
    </>
  )
}
