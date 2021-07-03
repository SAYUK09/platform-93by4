import { CongratsCard, Layout } from '../../components'

const ReCongratsCard: React.FC = () => {
  const userStatus = {
    submissionNo: 122,
    currentStatus: 'needs revision',
  }
  return (
    <Layout>
      <CongratsCard {...userStatus} />
    </Layout>
  )
}

export default ReCongratsCard
