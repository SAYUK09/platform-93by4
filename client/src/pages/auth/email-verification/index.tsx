import { useEffect, useState } from 'react'
import {
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  useToast,
  Text,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { SEO } from '../../../components/Layout/SEO'
import { resendLink } from '../../../services/axiosService'

export default function EmailSent() {
  const [email, setEmail] = useState('')
  const toast = useToast()
  const router = useRouter()

  useEffect(() => {
    setEmail(decodeURIComponent(router.query.email as string))
  }, [router.query.email])

  async function handleResend() {
    await resendLink(email)
      .then((res) => {
        if (res.status === 200) {
          toast({
            title: 'Your email address has already been verified.',
            description: 'Please log in instead.',
            status: 'info',
          })
          router.push('/')
        }
        if (res.status === 201) {
          toast({
            title: 'Link has been resent to your email address.',
            description: 'Please check your inbox for a mail from neoG Camp.',
            status: 'info',
          })
        }
      })
      .catch((error) => {
        toast({
          title: "Couldn't resend email.",
          description: 'Please try again later.',
        })
      })
  }

  return (
    <>
      <SEO
        title="Please verify your email. | NeoG Camp"
        description="In order to continue using application, please confirm your email address."
      />
      <Box
        rounded="10px"
        maxW={['90%', '75%', '75%', '50%', '30%']}
        mx="auto"
        mt="3rem"
        bg={'gray.800'}
        shadow={'base'}
        overflow="hidden"
      >
        <Alert
          status="info"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="280px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Verification Email Sent!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            <Text>
              In order to continue using application, we need to verify your
              email. A verification link has been sent to you. Please click it
              verify your account.
            </Text>
            <Text>Click this link if you haven't recieved email.</Text>
            <Button my={4} w={'100%'} onClick={handleResend}>
              Click here to resend.
            </Button>
          </AlertDescription>
        </Alert>
      </Box>
    </>
  )
}
