import { Text, Flex } from '@chakra-ui/react'
import { Layout, StatusCard } from '../../components'
import {
  statusData,
  steps,
  submissionSting,
} from '../../data/staticData/admissionStages'
import StepCard from '../../components/StepCard/StepCard'
import { theme } from '../../themes'

export default function Dashboard() {
  return (
    <Layout>
      <Flex as="section" flexDir="column">
        <StatusCard status={statusData} bgColor={theme.colors.black['700']} />
        <Text
          m={8}
          color={theme.colors.gray['100']}
          fontWeight="bold"
          fontSize={['md', 'md', 'xl']}
        >
          {submissionSting}
        </Text>

        <Flex flexDir="column">
          {steps.map((step) => {
            return (
              <StepCard
                bgColor={theme.colors.black['700']}
                step={step}
                status={statusData}
              />
            )
          })}
        </Flex>
      </Flex>
    </Layout>
  )
}
