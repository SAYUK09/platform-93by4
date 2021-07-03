import { useEffect } from 'react'
import { CongratsCard, Layout } from '../../components'
import { fireworks } from '../../utils/fireworks'

const ReCongratsCard: React.FC = () => {
  const userStatus = {
    submissionNo: 122,
    currentStatus: 'needs revision',
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
