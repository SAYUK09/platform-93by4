import {
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Progress,
} from '@chakra-ui/react'

export function EmailVerification() {
  return <div>Email Verification</div>
}

export default function EmailSent() {
  return (
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
        <AlertDescription maxWidth="sm">
          In order to continue using application, we need to verify your email.
          A verification link has been sent to you. Please click it verify your
          account. Haven't recieved email yet ? Click here to resend.
        </AlertDescription>
      </Alert>
    </Box>
  )
}
