/* eslint-disable react/prop-types */
import { useState } from "react";

import Category from "./Category";
import EditCategoryDialog from "./EditCategoryDialog";

import { Flex, Box, Heading, Button, Text, Dialog } from "@radix-ui/themes";
import { RocketIcon, PlusCircledIcon } from "@radix-ui/react-icons";

const FocusItems = ({ focusItems, onAddFocusItems }) => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryColor, setCategoryColor] = useState("indigo");
  const [tasks, setTasks] = useState([]);

  const initialTask = {
    name: "",
    isPlaned: false,
    id: crypto.randomUUID(),
  };

  const handleSetCategoryName = (newName) => {
    setCategoryName(newName);
  };

  const handleSetCategoryColor = (newColor) => {
    setCategoryColor(newColor);
  };

  const handleSetTasks = (updatedTask) => {
    setTasks(updatedTask);
  };

  const handleAddNewCategory = () => {
    tasks.length === 0 && setTasks([initialTask]);
  };

  return (
    <Box width="350px">
      <Heading size="4" as="h2" color="purple">
        <RocketIcon width="16" height="16" /> Focus
      </Heading>

      <Flex direction="column" gap="6" maxWidth="350px" pt="5">
        <Category focusItems={focusItems} />

        <Flex gap="2" justify="center" align="center">
          <Dialog.Root>
            <Dialog.Trigger>
              <Button
                onClick={handleAddNewCategory}
                variant="ghost"
                width="100%"
              >
                <PlusCircledIcon /> <Text size="1">Add new category</Text>
              </Button>
            </Dialog.Trigger>

            <EditCategoryDialog
              name={categoryName}
              color={categoryColor}
              tasks={tasks}
              onUpdateTasks={handleSetTasks}
              onUpdateName={handleSetCategoryName}
              onUpdateColor={handleSetCategoryColor}
              onSubmit={onAddFocusItems}
            />
          </Dialog.Root>
        </Flex>
      </Flex>
    </Box>
  );
};

export default FocusItems;
