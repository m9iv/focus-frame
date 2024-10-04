/* eslint-disable react/prop-types */
import { useState } from "react";

import SectionHeader from "../common/SectionHeader";
import Category from "./Category";
import EditCategoryDialog from "./EditCategoryDialog";
import DialogTrigger from "./EditCategoryDialog/DialogTrigger";

import { Flex, Box, Dialog } from "@radix-ui/themes";
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
      <SectionHeader title="Focus" icon={<RocketIcon />} />

      <Flex direction="column" gap="6" maxWidth="350px" pt="5">
        <Category focusItems={focusItems} />

        <Flex gap="2" justify="center" align="center">
          <Dialog.Root>
            <DialogTrigger
              title="Add new category"
              icon={<PlusCircledIcon />}
              onClick={handleAddNewCategory}
            />

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
