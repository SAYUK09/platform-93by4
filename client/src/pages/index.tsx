import { useState } from 'react'
import { Text, Flex, Button } from '@chakra-ui/react'
import { Layout, StatusCard, StepCard } from '../components'
import {
  data,
  StatusType,
  steps,
  StepType,
  submissionSting,
} from '../data/staticData/admissionStages'
import { theme } from '../themes'

export default function Home() {
  const [currentStatus, setCurrentStatus] = useState('portfolio_not_submitted')
  const status = data.find((e) => e.status == currentStatus)
  console.log(status)
  return (
    <Layout>
      <Flex as="section" flexDir="column">
        <Text>Marketing page</Text>
      </Flex>
    </Layout>
  )
}
