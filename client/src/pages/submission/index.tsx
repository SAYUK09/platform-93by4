import {
  Flex,
  Input,
  Center,
  Box,
  Heading,
  useToast,
  Text,
  Spinner,
} from '@chakra-ui/react'
import { useRef, useState, useEffect, MutableRefObject } from 'react'
import { Layout, Breadcrumbs, Alert } from '../../components'
import { useRouter } from 'next/router'
import { isUrlValid } from '../../utils/utils'
import { submissionLink } from '../../services/axiosService'
import { theme } from '../../themes'
import { SubmissionData } from '../../data/strings/submission'
import withAuth from '../../context/WithAuth'
import { useAuth } from '../../context/AuthContext'
import { CheckListData } from '../../data/staticData/mark15'

export interface submissionValues {
  status: string
  portfolioUrl: string
  submissionNo: number
}

const SubmissionWindow: React.FC = () => {
  const [disableButton, setDisabledButton] = useState<boolean>(true)
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>
  const router = useRouter()
  const toast = useToast()
  const [checkInput, setCheckInput] = useState<string>('')
  const { authState, setAuthState } = useAuth()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if (localStorage) {
      const localCheckData = localStorage.getItem('mark15')
      let localParsedCheckData: any = undefined
      if (localCheckData) {
        localParsedCheckData = JSON.parse(localCheckData)
      }
      if (
        !(
          localParsedCheckData &&
          CheckListData.length === Object.keys(localParsedCheckData).length
        )
      ) {
        setIsLoading(true)

        router.push('/dashboard')
        setTimeout(() => {
          setIsLoading(false)
        }, 2000)
      } else if (
        localParsedCheckData &&
        CheckListData.length === Object.keys(localParsedCheckData).length
      ) {
        const checkForAllChecks = CheckListData.every((checkItem, index) => {
          return (
            localParsedCheckData &&
            checkItem.checks?.length ===
              localParsedCheckData[checkItem.id]?.length
          )
        })
        if (!checkForAllChecks) {
          setIsLoading(true)
          router.push('/dashboard')
          toast({
            title: 'Mark15 Checks!!!',
            description: 'Please complete all the checks to proceed further',
            status: 'warning',
            duration: 2000,
            isClosable: true,
          })

          setTimeout(() => {
            setIsLoading(false)
          }, 2000)
        }
      }
    } else if (
      authState?.user?.submissionData?.status === 'portfolio_under_review'
    ) {
      setIsLoading(true)

      router.push('/submission/congrats')
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    }
  }, [])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const checkPortfolioUrl = (): void => {
    if (isUrlValid(inputRef.current.value)) {
      setCheckInput('')
      setDisabledButton(false)
    } else {
      setCheckInput('Please enter a valid URL')
      setDisabledButton(true)
    }
  }

  const submitPortfolioUrl = async (): Promise<void> => {
    try {
      const response = await submissionLink({
        status: 'portfolio_under_review',
        portfolioUrl: inputRef.current.value,
        submissionNo: 0,
      })
      if (response.status === 200) {
        toast({
          title: 'Successfully Submitted!',
          description: 'Your portfolio is submitted successfully',
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        const submissionData = localStorage.setItem(
          'neogSubmission',
          JSON.stringify({
            submissionNo: response.data.submissionNo,
            status: response.data.status,
          })
        )
        setAuthState((prev) => ({
          ...prev,
          user: {
            ...prev.user,
            submissionData: {
              submissionNo: response.data.submissionNo,
              status: response.data.status,
            },
          },
        }))
        // for removing localStorage mark15 data.
        localStorage.removeItem('mark15')
        router.push('./submission/congrats')
      }
    } catch (err) {
      if (err.response?.status === 302) {
        toast({
          title: 'Your portfolio is already submitted!',
          description: 'Your portfolio is already submitted successfully',
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      } else if (err.response?.status === 409) {
        toast({
          title: 'Portfolio URL Exists',
          description:
            'The link you have submitted already exists, please try again with your own link!',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      } else {
        toast({
          title: 'Something went wrong',
          description: 'Check your internet connection',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
    }
  }
  const breadcrumbsLinks = [
    { breadcrumbName: 'Dashboard', breadcrumbLink: '/dashboard' },
    {
      breadcrumbName: 'Submit Portfolio ',
      breadcrumbLink: '/submission/questions',
    },
    {
      breadcrumbName: 'mark15 Checklist',
      breadcrumbLink: '/submission/checklist',
    },
    { breadcrumbName: 'Submission Window', breadcrumbLink: '/submission' },
  ]

  return isLoading ? (
    <Center minH="100vh">
      <Spinner />
    </Center>
  ) : (
    <Layout>
      <Breadcrumbs breadcrumbProp={breadcrumbsLinks} />
      <Heading
        as="h1"
        size="xl"
        color={theme.colors.brand['500']}
        fontFamily="Inter"
        pt="4"
      >
        {SubmissionData.heading}
      </Heading>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        m="10"
        p="5"
        background={theme.colors.black['700']}
        border="none"
      >
        <Flex flexDirection="column" justifyContent="center">
          <Flex>
            <Heading
              as="h2"
              size="md"
              p="2"
              ml="2"
              color={theme.colors.black['50']}
            >
              {SubmissionData.text}
            </Heading>
          </Flex>
          <Flex
            justifyContent={['stretch', 'center']}
            alignItems="baseline"
            p="5"
            flexDirection={['column', 'row']}
            gap="1rem"
          >
            <Input
              placeholder="https://adarshbalika.netlify.app"
              onChange={checkPortfolioUrl}
              ref={inputRef}
              border="none"
              isInvalid={disableButton}
              errorBorderColor={theme.colors.red['500']}
              background={theme.colors.black['600']}
              width="100%"
              color={theme.colors.black['50']}
              maxWidth="300px"
            />
            <Alert isDisabled={disableButton} onClick={submitPortfolioUrl} />
          </Flex>
          <Flex
            justifyContent={['stretch', 'center']}
            alignItems="center"
            w="100%"
            flexDirection={['column', 'row']}
          >
            <Text
              color={theme.colors.red['500']}
              textAlign="left"
              w="85%"
              maxW="380px"
            >
              {checkInput}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  )
}

export default withAuth(SubmissionWindow)
function setAuthState(arg0: (prev: any) => any) {
  throw new Error('Function not implemented.')
}
