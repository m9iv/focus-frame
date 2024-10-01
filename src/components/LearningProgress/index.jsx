import { Box, Section, Container, Heading, Tabs, Text } from "@radix-ui/themes";
import { PieChartIcon } from "@radix-ui/react-icons";

const LearningProgress = () => {
  return (
    <Box py="5">
      <Section size="0">
        <Container size="1">
          <Heading size="4" as="h2" color="purple">
            <PieChartIcon width="16" height="16" /> Learning progress
          </Heading>

          <Tabs.Root defaultValue="week">
            <Tabs.List>
              <Tabs.Trigger value="week">Week</Tabs.Trigger>
              <Tabs.Trigger value="month">Month</Tabs.Trigger>
            </Tabs.List>

            <Box pt="3">
              <Tabs.Content value="week">
                <Text size="2" color="gray">
                  Finish your learning at least one thing to see your WEEK
                  progression
                </Text>
              </Tabs.Content>

              <Tabs.Content value="month">
                <Text size="2" color="gray">
                  Finish your learning at least one thing to see your MONTH
                  progression
                </Text>
              </Tabs.Content>
            </Box>
          </Tabs.Root>
        </Container>
      </Section>
    </Box>
  );
};

export default LearningProgress;
