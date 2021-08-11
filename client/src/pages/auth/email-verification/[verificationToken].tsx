import {
  Box,
  Progress,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useToast,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { SEO } from '../../../components/Layout/SEO'
import { sendVerificationToken } from '../../../services/axiosService'

const response = {
  NO_TOKEN_FOUND: 'NO_TOKEN_FOUND',
  ALREADY_VERIFIED: 'ALREADY_VERIFIED',
  VERIFICATION_TOKEN_EXPIRED: 'VERIFICATION_TOKEN_EXPIRED',
  VERIFICATION_SUCCESS: 'VERIFICATION_SUCCESS',
}

export default function EmailVerificationToken() {
  const router = useRouter()
  const toast = useToast()
  const { verificationToken } = router.query

  async function submitToken() {
    const result = await sendVerificationToken({
      verificationToken: verificationToken as string | undefined,
    })

    switch (result.data.code) {
      case response.NO_TOKEN_FOUND:
        toast({
          title: 'This verification link is invalid.',
          description: 'Please issue a new link if you wish to verify.',
          status: 'info',
        })
        router.push('/auth/email-verification/resend-link')
        break
      case response.ALREADY_VERIFIED:
        toast({
          title: 'Your email address has already been verified.',
          status: 'info',
        })
        router.push('/dashboard')
        break
      case response.VERIFICATION_TOKEN_EXPIRED:
        toast({
          title: 'Verification link has been expired or is invalid.',
          status: 'info',
        })
        router.push('/auth/email-verification/resend-link')
        break
      case response.VERIFICATION_SUCCESS:
        toast({
          title: 'Your email address has been verified.',
          description: 'You may now proceed to use the application.',
          status: 'success',
        })
        router.push('/dashboard')
        break
      default:
        toast({
          title: 'There was an error while processing your request.',
          status: 'error',
        })
        router.push('/')
        break
    }
  }

  useEffect(() => {
    if (!verificationToken) {
      return
    }
    submitToken()
  }, [verificationToken])

  return (
    <>
      <SEO
        title="Verifying your email address | NeoG Camp"
        description="Please wait while your email is being verified."
      />
      <Box>
        <Box
          rounded="10px"
          maxW={['90%', '75%', '75%', '50%', '30%']}
          mx="auto"
          mt="3rem"
          shadow="base"
        >
          <Progress size="xs" isIndeterminate />
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Please wait your email is being verified.
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              It will take a few seconds.
            </AlertDescription>
          </Alert>
        </Box>
      </Box>
    </>
  )
}
