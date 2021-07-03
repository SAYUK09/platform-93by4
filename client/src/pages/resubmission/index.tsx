import { Flex, Input, Button, Box, Heading, Text } from '@chakra-ui/react'
import { useRef, useState, useEffect } from 'react'
import { Layout } from '../../components'
import { useRouter } from 'next/router'
import { theme } from '../../themes';
import { isUrlValid } from '../../utils/utils';

const ReSubmissionWindow: React.FC = () => {
  const [disableButton, setDisabledButton] = useState<boolean>(true)
  const inputRef = useRef<any>()
  const [output, setOutput] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

const checkPortfolioUrl = ():void => {
    if (isUrlValid(inputRef.current.value)) {
      setDisabledButton(false)
    } else {
      setDisabledButton(true)
    }
  }

  const submitPortfolioUrl = async ():Promise<void> => {
    console.log('cool')
    router.push('./resubmission/recongrats-card')
  }
  return (
    <>
      <Layout>
        <Flex flexDirection="column" width="auto">
          <Heading
            as="h1"
            size="xl"
            color={theme.colors.brand['500']}
            fontFamily="Inter"
          >
            Kudos! Are you ready to re-submit?
          </Heading>
          <Text color={theme.colors.black['50']} fontSize="16px" noOfLines={4}>
            Please check the feedback provided by the reviwer and re-submit your
            complete portfolio. We would encourage you to go through the
            <Text color={theme.colors.brand['500']} d="inline">
              {' '}
              mark15 guide
            </Text>{' '}
            once more too.
          </Text>
        </Flex>
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
                color={theme.colors.brand['500']}
                fontFamily="Inter"
              >
                You did a great job, but missed a few things.
              </Heading>
            </Flex>
            <Heading
              as="h3"
              size="sm"
              color={theme.colors.black['50']}
              fontFamily="Inter"
              pt="2"
            >
              Your portfolio needs revision and resubmission. Here are a few
              pointers and feedback:
            </Heading>
            <Text color={theme.colors.black['50']} fontSize="16px" pt="3">
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
                background={theme.colors.black['600']}
                width="auto"
                color={theme.colors.black['50']}
              />
              <Button
                ml="10"
                background={theme.colors.brand['500']}
                isDisabled={disableButton}
                onClick={submitPortfolioUrl}
                color={theme.colors.black['900']}
              >
                Resubmit
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

export default ReSubmissionWindow
