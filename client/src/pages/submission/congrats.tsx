import { useEffect } from 'react'
import { Layout } from '../../components'
import { CongratsCard } from '../../components'
import { fireworks } from '../../utils/fireworks'

const Congrats: React.FC = () => {
  const userStatus = {
    submissionNo: 122,
    currentStatus: 'under review',
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
