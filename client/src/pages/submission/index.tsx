import { Flex, Input, Button, Heading } from '@chakra-ui/react'
import { useRef, useState, useEffect } from 'react'
import { Layout } from '../../components'
import { theme } from '../../themes'

export default function SubmissionPage() {
  const [disableButton, setDisabledButton] = useState(true)
  const inputRef = useRef(null)

  function isUrlValid(portfolioUrl) {
    const res = portfolioUrl.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/g
    )
    return res !== null
  }

  const checkPortfolioUrl = () => {
    if (isUrlValid(inputRef.current.value)) {
      setDisabledButton(false)
      console.log('correct')
    } else {
      setDisabledButton(true)
      console.log('please enter the correct URL')
    }
  }
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const submitPortfolioUrl = () => {
    console.log('noice :))')
  }
  return (
    <Layout>
      <Flex
        flexDirection={'column'}
        justifyContent="center"
        alignItems="center"
        pt="10"
      >
        <Heading color={theme.colors.brand['500']}>
          Congrats your Portfolio is ready to submit!
        </Heading>
        <Flex
          justifyContent="center"
          alignItems="center"
          width={'100%'}
          marginTop={'3rem'}
        >
          <Input
            colorScheme="blackAlpha"
            maxWidth="30%"
            placeholder="https://adarshbalika.netlify.app"
            onChange={() => checkPortfolioUrl()}
            ref={inputRef}
            color={theme.colors.black['50']}
            background={theme.colors.black['700']}
            borderColor={theme.colors.black['600']}
            _hover={{ borderColor: theme.colors.brand['600'] }}
          />
          <Button
            ml="10"
            colorScheme="teal"
            isDisabled={disableButton}
            onClick={submitPortfolioUrl}
          >
            Submit
          </Button>
        </Flex>
      </Flex>
    </Layout>
  )
}
