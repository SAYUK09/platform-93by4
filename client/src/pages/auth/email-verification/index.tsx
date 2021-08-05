import {
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Progress,
  Button,
  VStack,
  useToast,
  Text,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { SEO } from '../../../components/Layout/SEO'
import { useAuth } from '../../../context/AuthContext'
import { resendLink } from '../../../services/axiosService'

export default function EmailSent() {
  const { authState } = useAuth()
  const toast = useToast()

  console.log(authState?.user)

  const router = useRouter()

  async function handleResend() {
    console.log(authState)
    await resendLink(authState?.user?.email)
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          toast({
            title: 'Your email address has already been verified.',
            status: 'info',
          })
          router.push('/')
        }
        if (res.status === 201) {
          toast({
            title: 'Link has been resent to your email address.',
            status: 'info',
          })
        }
      })
      .catch((error) => {
        console.log({ error })
        toast({
          title: "Couldn't resend email.",
          description: 'Please try later.',
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
        <Progress size="xs" isIndeterminate />

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
          <AlertDescription
            maxWidth="sm"
            d={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
          >
            <VStack spacing={6}>
              <Text>
                In order to continue using application, we need to verify your
                email. A verification link has been sent to you. Please click it
                verify your account. Haven't recieved email yet ?
              </Text>
              <Button onClick={handleResend}>Click here to resend.</Button>
            </VStack>
          </AlertDescription>
        </Alert>
      </Box>
    </>
  )
}
