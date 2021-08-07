import { useEffect, useState } from 'react'
import { CongratsCard, Layout } from '../../components'
import { fireworks } from '../../utils/fireworks'
import { useAuth } from '../../context/AuthContext'
import { Breadcrumbs } from './../../components/BreadCrumbs/BreadCrumbs'
import withAuth from '../../context/WithAuth'
import { useRouter } from 'next/router'

const ReCongratsCard: React.FC = () => {
  const { authState, setAuthState } = useAuth()
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
      breadcrumbName: 'Congrats ',
      breadcrumbLink: '/resubmission/congrats',
    },
  ]
  return (
    <Layout>
      <Breadcrumbs breadcrumbProp={breadcrumbsLinks} />
      <CongratsCard {...userStatus} />
    </Layout>
  )
}

export default withAuth(ReCongratsCard)
