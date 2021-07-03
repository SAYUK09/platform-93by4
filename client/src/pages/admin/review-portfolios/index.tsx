import {
  Container,
  Flex,
  Heading,
  Box,
  Text,
  Textarea,
  Button,
} from '@chakra-ui/react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Navbar } from '../../../components'
import { useState } from 'react'

export default function ReviewPortfolios(): JSX.Element {
  const [disableButton, setDisableButton] = useState<boolean>(true)

  function handleInputChange(e: { target: { value: string | number } }) {
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
              <Breadcrumb
                spacing="8px"
                separator={<ChevronRightIcon color="gray.500" />}
              >
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink href="/admin/review-portfolios">
                    Review Portfolio
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
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
                  Application Number : #420
                </Text>
                <Text fontWeight="bold" color="white" fontSize="lg">
                  Name :{' '}
                  <span style={{ fontWeight: 'normal' }}>Tanay Pratap</span>
                </Text>

                <Text fontWeight="bold" color="white" fontSize="lg">
                  Portfolio Link :{' '}
                  <span style={{ fontWeight: 'normal' }}>
                    https://tanay.netlify.app/
                  </span>
                </Text>

                <Box paddingY="6" paddingX="2">
                  <Textarea
                    onChange={handleInputChange}
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
                    md: 'space-around',
                    xl: 'space-between',
                  }}
                  direction={{ base: 'column-reverse', md: 'row' }}
                  wrap="wrap"
                >
                  <Button
                    my="2"
                    isDisabled={disableButton}
                    variant="outline"
                    borderColor="brand.300"
                    _hover={{ bg: 'brand.300', color: 'black' }}
                    color="brand.300"
                    size="md"
                  >
                    Needs Revision
                  </Button>
                  <Button my="2" variant="solid" bg="brand.300" size="md">
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
