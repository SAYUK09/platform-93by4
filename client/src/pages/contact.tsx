import { Box, Button, Heading, Text, Flex, Image } from '@chakra-ui/react'
import { Layout } from '../components'
import NextLink from 'next/link'
import { ContactString } from '../data/strings/contact'
import { SEO } from '../components/Layout/SEO'

export default function Contact() {
  const { heading, email, contact, paragraph, buttonText } = ContactString
  return (
    <>
      <SEO
        title="Contact| NeoG Camp"
        description="Start your journey into NeoG Camp."
      />
      <Layout>
        <Flex mt={1} flexDir={['column-reverse', 'column-reverse', 'row']}>
          <Flex flexDir="column" justifyContent="space-between">
            <Box p={[4, 5, 6]} pt={[8, 8, 32]} pb={8}>
              <Heading
                as="h1"
                size="2xl"
                color={'white'}
                letterSpacing="tighter"
              >
                {heading}
              </Heading>
            </Box>
            <Flex flexDir="column" p={[4, 5, 6]}>
              <Text color={'white'} fontSize="md" fontWeight="medium">
                {contact}
              </Text>
              <Heading
                fontSize={['xl', '2xl', '4xl']}
                py={[4, 2, 0]}
                color={'brand.500'}
                letterSpacing="tighter"
                as="u"
              >
                <a target="_blank" href={`mailto:${email}`}>
                  {email}
                </a>
              </Heading>
              <Text fontSize="lg" color={'gray.500'} mt={8} as="em">
                {paragraph}
              </Text>
            </Flex>
            <Box p={[4, 5, 6]}>
              <NextLink href="/dashboard">
                <Button
                  size="lg"
                  bg="black.900"
                  color="brand.500"
                  _hover={{ bg: 'black.800' }}
                  height="14"
                  px="8"
                  shadow="base"
                  border="2px"
                  borderColor="brand.500"
                >
                  {buttonText}
                </Button>
              </NextLink>
            </Box>
          </Flex>
          <Flex justifyContent="center" mx={['4rem', ' 4rem', '3rem']}>
            {/* TODO: Use ContactIllustration over here */}
            <Image
              src={'/svgs/Illustration-contact.svg'}
              layout="responsive"
              alt="Your learning journey starts here. Photo of a computer with curly brackets."
            />
          </Flex>
        </Flex>
      </Layout>
    </>
  )
}
