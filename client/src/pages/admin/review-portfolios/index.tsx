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

export default function ReviewPortfolios(): JSX.Element {
  return (
    <div>
      <Navbar />

      <Flex
        backgroundColor="black.900"
        align="center"
        justify={{ base: 'center' }}
        direction={{ base: 'column', md: 'column', sm: 'column' }}
        minH="100vh"
      >
        <Container maxW="container.xl" width="90%">
          <Box my="4" color="white" justifyContent="flex-start">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nisi
              iure suscipit officiis. Neque consectetur perspiciatis labore
              voluptatibus fugiat cumque, tenetur ipsa reiciendis, itaque
              obcaecati corporis sequi corrupti, veritatis placeat?
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
                  color="white"
                  bg="black.600"
                  placeholder="Please State Revisions Here"
                />
              </Box>

              <Box padding="2" d="flex" mt="2" justifyContent="space-between">
                <Button
                  variant="outline"
                  borderColor="brand.300"
                  _hover={{ bg: 'brand.300', color: 'black' }}
                  color="brand.300"
                  size="md"
                >
                  Button
                </Button>
                <Button variant="solid" bg="brand.300" size="md">
                  Button
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Flex>
    </div>
  )
}
