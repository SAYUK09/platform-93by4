import { Layout, DashboardIntroCard, DashboardCard } from '../../../components';
import { addmissionStagesData } from '../../../data/staticData/admissionStages';
import {adminDashboardActions} from "../../../data/staticData/adminDashboardActions"

export default function Dashboard() {
  return (
    <Layout>
      <DashboardIntroCard />
      {adminDashboardActions.map((action, index) => {
        return <DashboardCard key={action.id} lockIcon={true} {...action} index={index} />;
      })}
    </Layout>
  );
}
