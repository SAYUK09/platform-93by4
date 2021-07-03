import { Layout } from '../components'
import { Text } from '@chakra-ui/react'
import { theme } from '../themes'

function IndexPage() {
  return (
    <Layout>
      <Text color={theme.colors.black['50']}>HI</Text>
    </Layout>
  )
}

export default IndexPage
