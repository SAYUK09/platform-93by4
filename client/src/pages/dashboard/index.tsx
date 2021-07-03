import { Text, Flex, } from "@chakra-ui/react";
import { Layout, StatusCard} from '../../components';
import { statusData , steps} from '../../data/staticData/admissionStages';
import StepCard from "../../components/StepCard/stepCard";
import { colors } from "../../styles/themeVars/themeVars";
export default function Dashboard() {
  return (
    <Layout>
     
     
        <Flex as="section" flexDir="column">
        <StatusCard status={statusData} bgColor='black.800' />
        <Text m={8} fontWeight="bold" fontSize={["md", "md", "xl"]}>
          Submission in Neog camp is a 3 step process :{" "}
        </Text>

        <Flex flexDir="column">
          {steps.map((step) => {
            return (
              <StepCard
                bgColor='black.800'
                step={step}
                status={statusData}
              />
            );
          })}
        </Flex>
      </Flex>
    </Layout>
  );
}
