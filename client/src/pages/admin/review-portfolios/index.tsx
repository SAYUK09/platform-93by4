import {
  Container,
  Flex,
  Heading,
  Box,
  Text,
  Textarea,
  Button,
} from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/react'
import { Breadcrumbs, Navbar } from '../../../components'
import { useState } from 'react'
import Head from 'next/head'
// import Breadcrumbs from '../../../components/BreadCrumbs/BreadCrumbs'

export type Data = {
  applicationNo: string | number
  name: string
  portfolioLink: string
}

export const data: Data = {
  applicationNo: '420',
  name: 'Tanay Pratap',
  portfolioLink: 'https://tanay.netlify.app/',
}

export default function ReviewPortfolios(): JSX.Element {
  const [disableButton, setDisableButton] = useState<boolean>(true)
  const size = useBreakpointValue({
    base: '100%',
    md: '60',
    sm: '90%',
  })

  function addReviewComment(e: { target: { value: string | number } }): void {
    if (e.target.value) {
      setDisableButton(false)
    } else {
      setDisableButton(true)
    }
  }

  return (
    <Flex
      backgroundColor="black.900"
      align="center"
      justify={{ base: 'center' }}
      direction={{ base: 'column', md: 'column', sm: 'column' }}
      minH="100%"
    >
      <Head>
        <title>Review Portfolio | neoG.Camp</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />

      <div style={{ minHeight: 'calc(100vh - 60px)' }}>
        <Flex
          align="center"
          justify={{ base: 'center' }}
          direction={{ base: 'column', md: 'column', sm: 'column' }}
          minH="100%"
        >
          <Container maxW="container.xl" width="90%">
            <Box my="4" color="black.400" justifyContent="flex-start">
              <Breadcrumbs
                breadcrumbProp={[
                  { breadcrumbName: 'Dashboard', breadcrumbLink: '/dashboard' },
                  {
                    breadcrumbName: 'Review Portfolio',
                    breadcrumbLink: '/admin/review-portfolios',
                  },
                ]}
              />
            </Box>

            <Box>
              <Heading color="brand.300" as="h3" size="xl">
                Review Portfolio
              </Heading>
              <Box marginTop="4" color="white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                nisi iure suscipit officiis. Neque consectetur perspiciatis
                labore voluptatibus fugiat cumque, tenetur ipsa reiciendis,
                itaque obcaecati corporis sequi corrupti, veritatis placeat?
              </Box>

              <Box px="8" paddingY="4" my="12" borderRadius="md" bg="black.800">
                <Text
                  paddingY="2"
                  fontWeight="bold"
                  color="brand.300"
                  fontSize="sm"
                >
                  Application Number : #{data.applicationNo}
                </Text>
                <Text fontWeight="bold" color="white" fontSize="lg">
                  Name :{' '}
                  <span style={{ fontWeight: 'normal' }}>{data.name}</span>
                </Text>

                <Text fontWeight="bold" color="white" fontSize="lg">
                  Portfolio Link :{' '}
                  <span style={{ fontWeight: 'normal' }}>
                    {data.portfolioLink}
                  </span>
                </Text>

                <Box paddingY="6" paddingX="2">
                  <Textarea
                    onChange={addReviewComment}
                    border="black.800"
                    color="white"
                    bg="black.700"
                    focusBorderColor="brand.300"
                    placeholder="Please State Revisions Here"
                  />
                </Box>

                <Flex
                  align={{
                    base: 'flex-start',
                    md: 'center',
                    xl: 'center',
                  }}
                  justify={{
                    base: 'center',
                    md: 'space-between',
                    xl: 'space-between',
                  }}
                  direction={{ base: 'column-reverse', md: 'row' }}
                >
                  <Button
                    w={size}
                    my="2"
                    isDisabled={disableButton}
                    variant="outline"
                    borderColor="brand.300"
                    _hover={{ bg: 'brand.300', color: 'black' }}
                    color="brand.300"
                  >
                    Needs Revision
                  </Button>

                  <Button w={size} my="2" variant="solid" bg="brand.300">
                    Ready For Mark15
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Container>
        </Flex>
      </div>
    </Flex>
  )
}
