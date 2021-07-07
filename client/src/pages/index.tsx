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

export default function Dashboard() {
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
          <Button
            onClick={() => setCurrentStatus('portfolio_under_review')}
          ></Button>
          <Button
            onClick={() =>
              setCurrentStatus('portfolio_passed_interview_to_be_scheduled')
            }
          ></Button>
          <Button
            onClick={() => setCurrentStatus('portfolio_needs_revision')}
          ></Button>

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
