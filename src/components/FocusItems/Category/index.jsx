/* eslint-disable react/prop-types */
import { Flex, Button, Card, Text } from "@radix-ui/themes";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

const Category = ({ focusItems }) => {
  return (
    <>
      {focusItems.length === 0 && (
        <Text size="2" color="gray">
          Create a category with at least one task on what you want to focus.
        </Text>
      )}

      {focusItems.map((item) => (
        <Card variant="ghost" key={item.category.id}>
          <Button variant="soft" size="1" color={item.category.color}>
            {item.category.name}
          </Button>

          {item.tasks.map((task) => (
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
          ))}
        </Card>
      ))}
    </>
  );
};

export default Category;
