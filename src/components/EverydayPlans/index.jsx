import {
  Flex,
  Box,
  Heading,
  Button,
  Text,
  Tabs,
  CheckboxCards,
  Badge,
} from "@radix-ui/themes";

import { CalendarIcon, TrashIcon, ClockIcon } from "@radix-ui/react-icons";

const EverydayPlans = () => {
  return (
    <Box width="450px">
      <Heading size="4" as="h2" color="purple">
        <CalendarIcon width="16" height="16" /> Everyday plans
      </Heading>

      <Tabs.Root defaultValue="tue">
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
  );
};

export default EverydayPlans;
