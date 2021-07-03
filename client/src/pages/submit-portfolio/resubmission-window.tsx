import { Flex, Input, Button, Box, Heading, Text } from '@chakra-ui/react'
import { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import { Layout } from '../../components'
import { useRouter } from 'next/router'

const ReSubmissionWindow: React.FC = () => {
  const [disableButton, setDisabledButton] = useState<boolean>(true)
  const inputRef = useRef<any>()
  const [output, setOutput] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  function isUrlValid(portfolioUrl: string): boolean {
    // eslint-disable-next-line no-useless-escape
    const urlRegex =
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    const res = portfolioUrl.match(urlRegex)
    return res !== null
  }

  function checkPortfolioUrl() {
    if (isUrlValid(inputRef.current.value)) {
      setDisabledButton(false)
    } else {
      setDisabledButton(true)
    }
  }

  const submitPortfolioUrl = async () => {
    console.log('cool')
    router.push("./recongrats-card")
  }
  return (
    <>
      <Layout>
        <Flex flexDirection="column" width="auto">
          <Heading as="h1" size="xl" color="#00F0FF" fontFamily="Inter">
            Kudos! Are you ready to re-submit?
          </Heading>
          <Text color="white" fontSize="16px" noOfLines={4}>
            Please check the feedback provided by the reviwer and re-submit your
            complete portfolio. We would encourage you to go through the
            <span style={{ color: '#00F0FF' }}> mark15 guide</span> once more
            too.
          </Text>
        </Flex>
        <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          colorScheme="black.200"
          m="10"
          p="5"
          background="black.800"
          border="none"
        >
          <Flex flexDirection="column">
            <Flex>
              <Heading as="h2" size="md" color="#00F0FF" fontFamily="Inter">
                You did a great job, but missed a few things.
              </Heading>
            </Flex>
            <Heading as="h3" size="sm" color="white" fontFamily="Inter" pt="2">
              Your portfolio needs revision and resubmission. Here are a few
              pointers and feedback:
            </Heading>
            <Text color="white" fontSize="16px" pt="3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, deleniti consequatur! Officiis consequuntur quia
              molestias quibusdam architecto! Recusandae beatae.
            </Text>
            <Flex justifyContent="center" alignItems="center" p="5">
              <Input
                placeholder="https://adarshbalika.netlify.app"
                onChange={checkPortfolioUrl}
                ref={inputRef}
                border="none"
                background="black.600"
                width="auto"
                color="black.100"
              />
              <Button
                ml="10"
                colorScheme="brand"
                isDisabled={disableButton}
                onClick={submitPortfolioUrl}
                color="#151515"
              >
                ReSubmit
              </Button>
            </Flex>
            <Text color="red" alignSelf="center">
              {output}
            </Text>
          </Flex>
        </Box>
      </Layout>
    </>
  )
}

export default ReSubmissionWindow
