import { Flex, Input, Button, Box, Heading, Text } from '@chakra-ui/react'
import { useRef, useState, useEffect } from 'react'
import { Layout } from '../../components'
import { useRouter } from 'next/router'
import { theme } from '../../themes'
import { isUrlValid } from '../../utils/utils'
import { ResubmissionData } from '../../data/strings/submission'

const ReSubmissionWindow: React.FC = () => {
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
    console.log('cool')
    router.push('./resubmission/congrats')
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
              <Button
                background={theme.colors.brand['500']}
                isDisabled={disableButton}
                onClick={submitPortfolioUrl}
                color={theme.colors.black['900']}
                mt={['1rem', '0']}
                ml={['0', '1rem']}
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
