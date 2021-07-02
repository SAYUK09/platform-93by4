import { Text, Flex, } from "@chakra-ui/react";
import { Layout, IntroCard} from '../../components';
import { statusData , steps} from '../../data/staticData/admissionStages';
import StepCard from "../../components/StepCard/stepCard";
import { colors } from "../../styles/themeVars/themeVars";
export default function Dashboard() {
  return (
    <Layout>
     
     
        <Flex as="section" flexDir="column">
        <IntroCard status={statusData} bgColor={colors.darkGrey} />
        <Text m={8} fontWeight="bold" fontSize={["md", "md", "xl"]}>
          Submission in Neog camp is a 3 step process :{" "}
        </Text>

        <Flex flexDir="column">
          {steps.map((step) => {
            return (
              <StepCard
                bgColor={colors.darkGrey}
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
