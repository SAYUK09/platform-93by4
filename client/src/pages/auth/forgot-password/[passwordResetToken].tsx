import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  useToast,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { sendPasswordResetRequest } from '../../../services/axiosService'
import * as yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
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
      'Must Contain 8 Characters, mix of numbers and alphabets.'
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

  const [showPassword, setShowPassword] = useState<boolean>(false)

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
        // console.log('here', res)
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
        console.log({ error })
      })
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
                      type={showPassword ? 'text' : 'password'}
                    />
                    <InputRightElement mr="4">
                      <Button
                        h="1.75rem"
                        size="sm"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <AiOutlineEyeInvisible />
                        ) : (
                          <AiOutlineEye />
                        )}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="confirmPassword">
              {({ field, form }: any) => (
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
                    placeholder="Re-enter your new password"
                    type="password"
                  />
                  <FormErrorMessage>
                    {form.errors.confirmPassword}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
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
  )
}
