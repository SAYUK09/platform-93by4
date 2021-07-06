import { useEffect } from 'react'
import { CongratsCard, Layout } from '../../components'
import { fireworks } from '../../utils/fireworks'
import { useAuth } from '../../context/AuthContext'

const ReCongratsCard: React.FC = () => {
const {authState} = useAuth();
console.log(authState)
  const userStatus = {
    submissionNo: authState?.user?.submissionData?.submissionNo,
    currentStatus:authState?.user?.submissionData?.currentStatus ,
  }

  useEffect(() => {
    fireworks()
  }, [])
  return (
    <Layout>
      <CongratsCard {...userStatus} />
    </Layout>
  )
}

export default ReCongratsCard
