import { useEffect } from 'react'
import { CongratsCard, Layout } from '../../components'
import { fireworks } from '../../utils/fireworks'
import { useAuth } from '../../context/AuthContext'
import { Breadcrumbs } from './../../components/BreadCrumbs/BreadCrumbs'
import withAuth from '../../context/WithAuth'
import { useRouter } from 'next/router'

const ReCongratsCard: React.FC = () => {
  const { authState, setAuthState } = useAuth()
  const router = useRouter()
  const userStatus = {
    submissionNo: authState?.user?.submissionData?.submissionNo,
    currentStatus: authState?.user?.submissionData?.currentStatus,
  }
  useEffect(() => {
    if (authState?.user?.submissionData?.currentStatus !== 'under review') {
      router.push('/submission/checklist')
    }
  }, [])

  useEffect(() => {
    if (authState?.user?.submissionData?.currentStatus === 'under review') {
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
