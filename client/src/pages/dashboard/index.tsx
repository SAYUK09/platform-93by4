import { Layout, IntroCard, Card } from '../../components';
import { addmissionStagesData } from '../../data/staticData/admissionStages';

export default function Dashboard() {
  return (
    <Layout>
      <IntroCard />
      {addmissionStagesData.map((stage, index) => {
        return <Card key={stage.id} lockIcon={true} {...stage} index={index} />;
      })}
    </Layout>
  );
}
