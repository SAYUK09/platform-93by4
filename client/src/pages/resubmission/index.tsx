import {
  Flex,
  Input,
  Button,
  Box,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/react'
import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import { Layout, Breadcrumbs, Alert } from '../../components'
import { useRouter } from 'next/router'
import { theme } from '../../themes'
import { isUrlValid } from '../../utils/utils'
import { ResubmissionData } from '../../data/strings/submission'
import { useAuth } from '../../context/AuthContext'
import withAuth from '../../context/WithAuth'
import { reSubmissionLink } from '../../services/axiosService'

export interface reSubmissionValues {
  submissionNo: number
  status: string
  portfolioUrl: string
}
const ReSubmissionWindow: React.FC = () => {
  const [disableButton, setDisabledButton] = useState<boolean>(true)
  const inputRef = useRef<any>()
  const router = useRouter()
  const toast = useToast()
  const [checkInput, setCheckInput] = useState<string>('')
  const { authState, setAuthState } = useAuth()

  useEffect(() => {
    if (authState?.user?.submissionData?.status !== 'needs revision') {
      router.push('/dashboard')
    }
  }, [])
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const checkPortfolioUrl = (): void => {
    if (isUrlValid(inputRef.current.value)) {
      setCheckInput('')
      setDisabledButton(false)
    } else {
      setCheckInput("That's not a URL")
      setDisabledButton(true)
    }
  }

  const submitPortfolioUrl = async (): Promise<void> => {
    try {
      const response = await reSubmissionLink({
        submissionNo: 0,
        status: 'portfolio_under_review',
        portfolioUrl: inputRef.current.value,
      })

      if (response.status === 200) {
        toast({
          title: 'Successfully resubmitted!!!',
          description: 'Your portfolio is resubmitted successfully',
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

        router.push('./resubmission/congrats')
      }
      console.log(response.data)
      return response.data
    } catch (err) {
      console.log('err', err.response)
      if (err.response?.status === 409) {
        toast({
          title: 'Portfolio URL Exists',
          description:
            'The link you have submitted already exists, please try again with different link!',
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
      breadcrumbName: 'Submit Portfolio',
      breadcrumbLink: '/submission/questions',
    },
    { breadcrumbName: 'ReSubmission', breadcrumbLink: '/resubmission' },
  ]
  return (
    <>
      <Layout>
        <Breadcrumbs breadcrumbProp={breadcrumbsLinks} />
        <Flex flexDirection="column" width="auto" pt="2">
          <Heading
            as="h1"
            size="xl"
            color={theme.colors.brand['500']}
            fontFamily="Inter"
            pb="1rem"
          >
            {ResubmissionData.heading}
          </Heading>
          <Text
            color={theme.colors.black['50']}
            fontSize="16px"
            noOfLines={5}
            pb="1rem"
          >
            {ResubmissionData.discription}
          </Text>
        </Flex>
        <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          m={['2rem 0', '2rem']}
          p="2rem"
          background={theme.colors.black['700']}
          border="none"
        >
          <Flex flexDirection="column">
            <Flex>
              <Heading
                as="h2"
                size="md"
                color={theme.colors.brand['500']}
                fontFamily="Inter"
                pb="1rem"
              >
                {ResubmissionData.title}
              </Heading>
            </Flex>
            <Heading
              as="h3"
              size="sm"
              color={theme.colors.black['50']}
              fontFamily="Inter"
              pb="1rem"
            >
              {ResubmissionData.subTitle}
            </Heading>
            <Text color={theme.colors.black['50']} fontSize="16px" pb="1rem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, deleniti consequatur! Officiis consequuntur quia
              molestias quibusdam architecto! Recusandae beatae.
            </Text>
            <Flex
              justifyContent="center"
              alignItems="center"
              p="5"
              flexDirection={['column', 'row']}
              gap="1rem"
            >
              <Input
                placeholder="https://adarshbalika.netlify.app"
                onChange={checkPortfolioUrl}
                ref={inputRef}
                border="none"
                background={theme.colors.black['600']}
                width="100%"
                color={theme.colors.black['50']}
                maxWidth="300px"
              />
              <Alert isDisabled={disableButton} onClick={submitPortfolioUrl} />
            </Flex>
            <Text color={theme.colors.red['500']} textAlign="center">
              {checkInput}
            </Text>
          </Flex>
        </Box>
      </Layout>
    </>
  )
}

export default withAuth(ReSubmissionWindow)
