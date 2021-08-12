import { useState, useEffect } from 'react'
import { Text, Flex, useToast } from '@chakra-ui/react'
import Link from 'next/link'
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
  const toast = useToast()
  useEffect(() => {
    async function fetch() {
      await getDashboard()
        .then((user) => {
          const portfolio = user.foundPortfolio.portfolioUrl
          portfolio !== undefined &&
            (setCurrentStatus(portfolio.status),
            setSubmissionNo(portfolio.submissionNo))
        })
        .catch((err) =>
          toast({
            title: 'Something went wrong.',
            description: 'Please try again.',
          })
        )
    }
    fetch()
  }, [])

  const status = data.find((e) => e.status == currentStatus)
  const [cardLink, setCardLink] = useState<string | undefined>(undefined)

  useEffect(() => {
    switch (status?.status) {
      case 'portfolio_not_submitted':
        setCardLink('/submission/questions')
        break
      case 'portfolio_under_review':
        setCardLink(undefined)
        break
      case 'portfolio_needs_revision':
        setCardLink('/resubmission')
        break
      case 'portfolio_passed_interview_to_be_scheduled':
        setCardLink('/interview')
        break
      default:
        setCardLink(undefined)
    }
  }, [status])
  return (
    <Layout>
      <Flex as="section" flexDir="column">
        {cardLink == undefined ? (
          <StatusCard
            status={status}
            bgColor={theme.colors.black['800']}
            submissionNo={submissionNo}
          />
        ) : (
          <Link href={cardLink}>
            <StatusCard
              status={status}
              bgColor={theme.colors.black['800']}
              submissionNo={submissionNo}
            />
          </Link>
        )}
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
