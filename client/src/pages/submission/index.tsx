import { Flex, Input, Button, Box, Heading, Text } from '@chakra-ui/react'
import { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import { Layout } from '../../components'
import { useRouter } from 'next/router'
import { isUrlValid } from '../../utils/utils'
import { theme } from '../../themes'
import { SubmissionData } from '../../data/strings/submission'

const SubmissionWindow: React.FC = () => {
  const [disableButton, setDisabledButton] = useState<boolean>(true)
  const inputRef = useRef<any>()
  const [output, setOutput] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    inputRef.current.focus()
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
        router.push('./submission/congrats-card')
      } else {
        setOutput('Portfolio URL already exists, try again with your own URL')
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
            <Flex justifyContent="center" alignItems="center" p="5">
              <Input
                placeholder="https://adarshbalika.netlify.app"
                onChange={checkPortfolioUrl}
                ref={inputRef}
                border="none"
                background={theme.colors.black['600']}
                width="auto"
                color={theme.colors.black['100']}
              />
              <Button
                ml="10"
                background={theme.colors.brand['500']}
                isDisabled={disableButton}
                onClick={submitPortfolioUrl}
                color={theme.colors.black['900']}
              >
                Submit
              </Button>
            </Flex>
            <Text color={theme.colors.red['500']} alignSelf="center">
              {output}
            </Text>
          </Flex>
        </Box>
      </Layout>
    </>
  )
}

export default SubmissionWindow
