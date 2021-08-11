import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast,
} from '@chakra-ui/react'
import { FormikValues, useFormik } from 'formik'
import { useRouter } from 'next/router'

import { SEO } from '../../../components/Layout/SEO'
import { resendEmailVerificationLink } from '../../../services/axiosService'

const response = {
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  ALREADY_VERIFIED: 'ALREADY_VERIFIED',
  LINK_SENT: 'LINK_SENT',
}

export default function ResendLink() {
  const toast = useToast()
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => handleSubmit(values),
  })

  async function handleSubmit(values: FormikValues) {
    const result = await resendEmailVerificationLink(values.email)

    switch (result.data.code) {
      case response.ALREADY_VERIFIED:
        toast({
          title: 'Your email address has already been verified.',
        })
        router.push('/dashboard')
        break
      case response.LINK_SENT:
        toast({
          title: 'Link has been sent !',
          description:
            'An email containing verification link has been sent to your email address.',
        })
        break
      case response.USER_NOT_FOUND:
        toast({
          title: 'Failed to send verification email.',
          description:
            'No account with given email was found. Please sign up instead.',
        })
        router.push('/auth/signup')
        break
      default:
        toast({
          title: 'Something went wrong.',
          description: 'Please try again later.',
        })
        break
    }
  }

  return (
    <>
      <SEO
        title="Resend email verification link"
        description="Issue a new email verification link."
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
            <Heading>Resend Email Verification Link</Heading>
            <Text marginTop="1rem">
              Enter the email you used for this account. We will mail you a link
              to verify your email address.
            </Text>
            <form onSubmit={formik.handleSubmit}>
              <FormControl mt={4} id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </FormControl>
              <Button
                marginTop="1rem"
                width="100%"
                type="submit"
                colorscheme="blue"
              >
                Send Verification Link
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  )
}
