import { Layout } from '../../components'
import { CongratsCard } from '../../components'

const Congrats: React.FC = () => {
  const userStatus = {
    submissionNo: 122,
    currentStatus: 'under review',
  }
  return (
    <Layout>
      <CongratsCard {...userStatus} />
    </Layout>
  )
}

export default Congrats
