import {
  Box,
  Progress,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { SEO } from '../../../components/Layout/SEO'
import { sendVerificationToken } from '../../../services/axiosService'

export default function EmailVerificationToken() {
  const router = useRouter()
  const { verificationToken } = router.query

  useEffect(() => {
    if (!verificationToken) {
      return
    }
    async function submitToken() {
      // console.log(verificationToken)
      await sendVerificationToken({
        verificationToken: verificationToken as string | undefined,
      })
        .then((res) => {
          if (res.status === 200) {
            router.push('/dashboard')
          }
        })
        .catch((error) => console.log({ error }))
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
