import { useEffect } from 'react'
import { Layout } from '../../components'
import { CongratsCard } from '../../components'
import { fireworks } from '../../utils/fireworks'
import { useAuth } from '../../context/AuthContext'

const Congrats: React.FC = () => {
  const { authState } = useAuth()
  console.log(authState)
  const userStatus = {
    submissionNo: authState?.user?.submissionData?.submissionNo,
    currentStatus: authState?.user?.submissionData?.currentStatus,
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

export default Congrats
