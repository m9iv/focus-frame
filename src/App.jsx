// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import {
  Box,
  Container,
  Heading,
  Section,
  Flex,
  Tabs,
  Text,
  CheckboxCards,
  Badge,
  Card,
  Button,
} from "@radix-ui/themes";

import {
  RocketIcon,
  CalendarIcon,
  TransformIcon,
  PieChartIcon,
  PlusCircledIcon,
  ClockIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  TrashIcon,
} from "@radix-ui/react-icons";

const App = () => {
  return (
    <>
      <Header />
      <Plans />
      <LearningProgress />
    </>
  );
};

const Header = () => {
  return (
    <Box py="5">
      <Section size="2">
        <Container size="1">
          <Flex justify="center" gap="2">
            <TransformIcon width="32" height="32" color="gray" />
            <Flex direction="column">
              <Heading as="h1" size="7" weight="bold">
                FocusFrame
              </Heading>
              <Text color="gray" size="1">
                Dream, plan, learn and analize
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Section>
    </Box>
  );
};

const Plans = () => {
  return (
    <Flex gap="9" justify="center">
      <Box width="350px">
        <Heading size="4" as="h2" color="purple">
          <RocketIcon width="16" height="16" /> Focus
        </Heading>

        <Flex direction="column" gap="6" maxWidth="350px" pt="5">
          <Card variant="ghost">
            <Button variant="soft" size="1" color="green">
              Front-end
            </Button>
            <Card variant="surface" gap="3" className="focus-item">
              <Flex justify="between" align="center">
                <Text as="div" size="2">
                  JavaScript
                </Text>
                <ChevronRightIcon color="gray" />
              </Flex>
            </Card>

            <Card variant="surface" gap="3" className="focus-item">
              <Flex justify="between" align="center">
                <Text as="div" size="2">
                  CSS/HTML
                </Text>
                <ChevronRightIcon color="gray" />
              </Flex>
            </Card>

            <Card variant="ghost" gap="3" className="focus-item active">
              <Flex justify="between" align="center">
                <Text as="div" size="2">
                  React
                </Text>
                <ChevronLeftIcon color="gray" />
              </Flex>
            </Card>

            <Card variant="surface" gap="3" className="focus-item">
              <Flex justify="between" align="center">
                <Text as="div" size="2">
                  TypeScript
                </Text>
                <ChevronRightIcon color="gray" />
              </Flex>
            </Card>
          </Card>

          <Card variant="ghost">
            <Button variant="soft" size="1" color="orange">
              3D
            </Button>
            <Card variant="ghost" gap="3" className="focus-item active">
              <Flex justify="between" align="center">
                <Text as="div" size="2">
                  Modeling Ellie's player in Blender
                </Text>
                <ChevronLeftIcon color="gray" />
              </Flex>
            </Card>

            <Card variant="surface" gap="3" className="focus-item">
              <Flex justify="between" align="center">
                <Text as="div" size="2">
                  Learn FreeCAD
                </Text>
                <ChevronRightIcon color="gray" />
              </Flex>
            </Card>
          </Card>

          <Card variant="ghost">
            <Button variant="soft" size="1" color="sky">
              Reading Books
            </Button>
            <Card variant="ghost" gap="3" className="focus-item active">
              <Flex justify="between" align="center">
                <Text as="div" size="2">
                  Read "The Invincible"
                </Text>
                <ChevronLeftIcon color="gray" />
              </Flex>
            </Card>
          </Card>

          <Flex gap="2" justify="center" align="center">
            <Button variant="soft" width="100%">
              <PlusCircledIcon /> <Text size="2">Add a new category</Text>
            </Button>
          </Flex>
        </Flex>
      </Box>

      <Box width="450px">
        <Heading size="4" as="h2" color="purple">
          <CalendarIcon width="16" height="16" /> Everyday plans
        </Heading>

        <Tabs.Root defaultValue="sun">
          <Tabs.List>
            <Tabs.Trigger value="mon">Mon</Tabs.Trigger>
            <Tabs.Trigger value="tue">Tue</Tabs.Trigger>
            <Tabs.Trigger value="wed">Wed</Tabs.Trigger>
            <Tabs.Trigger value="thu">Thu</Tabs.Trigger>
            <Tabs.Trigger value="fri">Fri</Tabs.Trigger>
            <Tabs.Trigger value="sat">Sat</Tabs.Trigger>
            <Tabs.Trigger value="sun">Sun</Tabs.Trigger>
          </Tabs.List>

          <Box pt="3">
            <Tabs.Content value="mon">
              <Text size="2" color="gray">
                Select at least one task to learn today
              </Text>
            </Tabs.Content>

            <Tabs.Content value="tue">
              <Text size="2" color="gray">
                Select at least one task to learn today
              </Text>
            </Tabs.Content>

            <Tabs.Content value="wed">
              <Text size="2" color="gray">
                Select at least one task to learn today
              </Text>
            </Tabs.Content>

            <Tabs.Content value="thu">
              <Text size="2" color="gray">
                Select at least one task to learn today
              </Text>
            </Tabs.Content>

            <Tabs.Content value="fri">
              <Text size="2" color="gray">
                Select at least one task to learn today
              </Text>
            </Tabs.Content>

            <Tabs.Content value="sat">
              <Text size="2" color="gray">
                Select at least one task to learn today
              </Text>
            </Tabs.Content>

            <Tabs.Content value="sun">
              <Box maxWidth="450px" pt="3">
                <CheckboxCards.Root defaultValue={[""]} columns="1">
                  <CheckboxCards.Item value="1">
                    <Flex direction="column" width="100%">
                      <Text weight="bold" gap="5">
                        React <Badge color="green">Front-end</Badge>
                      </Text>
                      <Text size="1" color="gray">
                        <Flex gap="1">
                          <ClockIcon align="center" />
                          <span>10:00 - 14:00 (4h)</span>
                        </Flex>
                      </Text>
                    </Flex>
                  </CheckboxCards.Item>
                </CheckboxCards.Root>
              </Box>

              <Box maxWidth="450px" pt="3">
                <CheckboxCards.Root defaultValue={[""]} columns="1">
                  <CheckboxCards.Item value="1">
                    <Flex direction="column" width="100%">
                      <Text weight="bold" gap="5">
                        Modeling Ellie's player in Blender{" "}
                        <Badge color="orange">3D</Badge>
                      </Text>
                      <Text size="1" color="gray">
                        <Flex gap="1">
                          <ClockIcon align="center" />
                          <span>15:30 - 16:00 (30m)</span>
                        </Flex>
                      </Text>
                    </Flex>
                  </CheckboxCards.Item>
                </CheckboxCards.Root>
              </Box>

              <Box maxWidth="450px" pt="3">
                <CheckboxCards.Root defaultValue={[""]} columns="1">
                  <CheckboxCards.Item value="1">
                    <Flex direction="column" width="100%">
                      <Text weight="bold" gap="5">
                        Read "The Invincible"{" "}
                        <Badge color="sky">Reading Books</Badge>
                      </Text>
                      <Text size="1" color="gray">
                        <Flex gap="1">
                          <ClockIcon align="center" />
                          <span>21:00 - 22:00 (1h)</span>
                        </Flex>
                      </Text>
                    </Flex>
                  </CheckboxCards.Item>
                </CheckboxCards.Root>
              </Box>
            </Tabs.Content>
          </Box>
        </Tabs.Root>

        <Flex justify="end" pt="3">
          <Button variant="ghost" size="1" color="tomato">
            <TrashIcon /> Clear the list
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

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

export default App;
