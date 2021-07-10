import { Layout, Card } from '../../components'
import withAuth from '../../context/WithAuth'
import { QuestionData } from '../../data/strings/questions'

export function QuestionsBeforeSubmission() {
  return (
    <Layout>
      {QuestionData.map((question) => {
        return <Card key={question.id} {...question} />
      })}
    </Layout>
  )
}

export default withAuth(QuestionsBeforeSubmission)
