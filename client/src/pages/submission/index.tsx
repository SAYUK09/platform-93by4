import { Flex, Input, Button, Box, Heading, useToast } from '@chakra-ui/react'
import { useRef, useState, useEffect, MutableRefObject } from 'react'
import axios from 'axios'
import { Layout } from '../../components'
import { useRouter } from 'next/router'
import { isUrlValid } from '../../utils/utils'
import { theme } from '../../themes'
import { SubmissionData } from '../../data/strings/submission'
import withAuth from '../../context/WithAuth'

const SubmissionWindow: React.FC = () => {
  const [disableButton, setDisabledButton] = useState<boolean>(true)
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>
  const [output, setOutput] = useState<string>('')
  const router = useRouter()
  const toast = useToast()

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const checkPortfolioUrl = (): void => {
    if (isUrlValid(inputRef.current.value)) {
      setDisabledButton(false)
    } else {
      setDisabledButton(true)
    }
  }

  const submitPortfolioUrl = async (): Promise<void> => {
    try {
      const response = await axios.post('http://localhost:3001/', {
        portfolioUrl: inputRef.current.value,
      })
      console.log(response)

      if (response.status === 202) {
        toast({
          title: 'Successfully Submitted!!!',
          description: 'Your portfolio is submitted successfully',
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        router.push('./submission/congrats')
      } else {
        setOutput('Portfolio URL already exists, try again with your own URL')
        toast({
          title: 'Portfolio URL Exists',
          description:
            'The link you have submitted already exists, please try again with different link!',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
      console.log(response.data)
      return response.data
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <>
      <Layout>
        <Heading
          as="h1"
          size="xl"
          color={theme.colors.brand['500']}
          fontFamily="Inter"
          textAlign="center"
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
          <Flex flexDirection="column">
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
              <Button
                background={theme.colors.brand['500']}
                isDisabled={disableButton}
                onClick={submitPortfolioUrl}
                color={theme.colors.black['900']}
                mt={['1rem', '0']}
                ml={['0', '1rem']}
              >
                Submit
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Layout>
    </>
  )
}

export default withAuth(SubmissionWindow)
