/* eslint-disable react/prop-types */
import { Flex, Card, Text } from "@radix-ui/themes";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

const CardTask = ({ task }) => {
  return (
    <Card
      variant="surface"
      gap="3"
      className={`focus-item ${task.isPlaned ? "active" : ""}`}
      key={task.id}
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
  );
};

export default CardTask;
