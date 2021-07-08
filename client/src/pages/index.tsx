import { useState, useEffect } from 'react'
import axios from 'axios'
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
import { getDashboard } from '../services/axiosService'

export default function Dashboard() {
  useEffect(() => {
    async function fetch() {
      await getDashboard().then((user) => {
        console.log(user)
      })
    }
    fetch()
  }, [])
  const [currentStatus, setCurrentStatus] = useState('portfolio_not_submitted')
  const status = data.find((e) => e.status == currentStatus)
  console.log(status)
  return (
    <Layout>
      <Flex as="section" flexDir="column">
        <StatusCard status={status} bgColor={theme.colors.black['800']} />
        <Text
          my={8}
          color={theme.colors.gray['100']}
          fontWeight="bold"
          fontSize={['md', 'md', 'xl']}
        >
          {submissionSting}
        </Text>

        <Flex flexDir="column">
          {steps.map((step: StepType, index: number) => {
            return (
              <StepCard
                bgColor={theme.colors.black['800']}
                step={step}
                status={status as StatusType}
                key={index.toString()}
                index={index}
              />
            )
          })}
        </Flex>
      </Flex>
    </Layout>
  )
}
