import { Center, Spinner } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Layout } from '../../components'
import { CongratsCard } from '../../components'
import { fireworks } from '../../utils/fireworks'
import { useAuth } from '../../context/AuthContext'
import { Breadcrumbs } from './../../components/BreadCrumbs/BreadCrumbs'
import withAuth from '../../context/WithAuth'
import { useRouter } from 'next/router'

const Congrats: React.FC = () => {
  const { authState } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const userStatus = {
    submissionNo: authState?.user?.submissionData?.submissionNo,
    status: authState?.user?.submissionData?.status,
  }

  useEffect(() => {
    if (authState?.user?.submissionData?.status !== 'portfolio_under_review') {
      router.push('/submission/checklist')
    }
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])
  useEffect(() => {
    if (authState?.user?.submissionData?.status === 'portfolio_under_review') {
      fireworks()
    }
  }, [])

  const breadcrumbsLinks = [
    { breadcrumbName: 'Dashboard', breadcrumbLink: '/dashboard' },
    {
      breadcrumbName: 'Congratulations ',
      breadcrumbLink: '/submission/congrats',
    },
  ]
  return isLoading ? (
    <Center minH="100vh">
      <Spinner />
    </Center>
  ) : (
    <Layout>
      <Breadcrumbs breadcrumbProp={breadcrumbsLinks} />
      <CongratsCard {...userStatus} />
    </Layout>
  )
}

export default withAuth(Congrats)
