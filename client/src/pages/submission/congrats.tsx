import { useEffect } from 'react'
import { Layout } from '../../components'
import { CongratsCard } from '../../components'
import { fireworks } from '../../utils/fireworks'
import { useAuth } from '../../context/AuthContext'
import { Breadcrumbs } from './../../components/BreadCrumbs/BreadCrumbs'
import withAuth from '../../context/WithAuth'

const Congrats: React.FC = () => {
  const { authState } = useAuth()
  const userStatus = {
    submissionNo: authState?.user?.submissionData?.submissionNo,
    currentStatus: authState?.user?.submissionData?.currentStatus,
  }
  useEffect(() => {
    fireworks()
  }, [])

  const breadcrumbsLinks = [
    { breadcrumbName: 'Dashboard', breadcrumbLink: '/dashboard' },
    {
      breadcrumbName: 'Congrats ',
      breadcrumbLink: '/submission/congrats',
    },
  ]
  return (
    <Layout>
      <Breadcrumbs breadcrumbProp={breadcrumbsLinks} />
      <CongratsCard {...userStatus} />
    </Layout>
  )
}

export default withAuth(Congrats)
