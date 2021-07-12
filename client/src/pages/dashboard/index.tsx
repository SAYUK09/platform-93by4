import { useState, useEffect } from 'react'
import { Text, Flex } from '@chakra-ui/react'
import { Layout, StatusCard, StepCard } from '../../components'
import {
  data,
  StatusType,
  steps,
  StepType,
  submissionSting,
} from '../../data/staticData/admissionStages'
import { theme } from '../../themes'
import { getDashboard } from '../../services/axiosService'

import withAuth from '../../context/WithAuth'

function Dashboard() {
  const [currentStatus, setCurrentStatus] = useState('portfolio_not_submitted')
  const [submissionNo, setSubmissionNo] = useState(null)
  useEffect(() => {
    async function fetch() {
      await getDashboard().then((user) => {
        console.log(user)
        const portfolio = user.foundPortfolio.portfolioUrl
        portfolio !== undefined &&
          (setCurrentStatus(portfolio.status),
          setSubmissionNo(portfolio.submissionNo))
      })
    }
    fetch()
  }, [])

  const status = data.find((e) => e.status == currentStatus)
  console.log(status)
  return (
    <Layout>
      <Flex as="section" flexDir="column">
        <StatusCard
          status={status}
          bgColor={theme.colors.black['800']}
          submissionNo={submissionNo}
        />
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

export default withAuth(Dashboard)
