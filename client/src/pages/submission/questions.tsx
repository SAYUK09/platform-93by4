import { Layout, Card } from '../../components'
import { QuestionData } from '../../data/strings/questions'
import { Breadcrumbs } from './../../components/BreadCrumbs/BreadCrumbs'

export function QuestionsBeforeSubmission() {
  const breadcrumbsLinks = [
    { breadcrumbName: 'Dashboard', breadcrumbLink: '/dashboard' },
    {
      breadcrumbName: 'Submit Portfolio ',
      breadcrumbLink: '/submission/questions',
    },
  ]
  return (
    <Layout>
      <Breadcrumbs breadcrumbProp={breadcrumbsLinks} />
      {QuestionData.map((question) => {
        return <Card key={question.id} {...question} />
      })}
    </Layout>
  )
}

export default QuestionsBeforeSubmission
