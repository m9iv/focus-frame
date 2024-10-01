/* eslint-disable react/prop-types */
import { Flex, Box, Heading, Card, Button, Text } from "@radix-ui/themes";

import {
  RocketIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";

const FocusItems = ({ items }) => {
  console.log(items);

  return (
    <Box width="350px">
      <Heading size="4" as="h2" color="purple">
        <RocketIcon width="16" height="16" /> Focus
      </Heading>

      <Flex direction="column" gap="6" maxWidth="350px" pt="5">
        {items.length === 0 && (
          <Text size="2" color="gray">
            Create a category with at least one task on what you want to focus.
          </Text>
        )}

        {items.map((item, i) => (
          <Card variant="ghost" key={item.category.name + "_" + i}>
            <Button variant="soft" size="1" color={item.category.color}>
              {item.category.name}
            </Button>

            {item.tasks.map((task, i) => (
              <Card
                variant="surface"
                gap="3"
                className={`focus-item ${task.isPlaned ? "active" : ""}`}
                key={task.name + "_" + i}
              >
                <Flex justify="between" align="center">
                  <Text as="div" size="2">
                    {task.name}
                  </Text>
                  {task.isPlaned ? (
                    <ChevronLeftIcon color="gray" />
                  ) : (
                    <ChevronRightIcon color="gray" />
                  )}
                </Flex>
              </Card>
            ))}
          </Card>
        ))}

        <Flex gap="2" justify="center" align="center">
          <Button variant="ghost" width="100%">
            <PlusCircledIcon /> <Text size="1">Add a new category</Text>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default FocusItems;
