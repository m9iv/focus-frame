/* eslint-disable react/prop-types */
import { colors } from "../../../_data";

import {
  Dialog,
  Flex,
  Text,
  TextField,
  Select,
  Button,
} from "@radix-ui/themes";

import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

const EditCategoryDialog = ({
  name,
  color,
  tasks,
  onUpdateTasks,
  onUpdateName,
  onUpdateColor,
  onSubmit,
}) => {
  const initialTask = {
    name: "",
    isPlaned: false,
    id: crypto.randomUUID(),
  };

  const handleUpdateTask = (curId, newValue) => {
    const curTaskIdx = tasks.findIndex((task) => task.id === curId);

    if (curTaskIdx === -1) {
      return;
    }

    const newTasks = [...tasks];

    newTasks[curTaskIdx] = {
      ...newTasks[curTaskIdx],
      name: newValue,
    };

    onUpdateTasks(newTasks);
  };

  const handleAddTaskField = () => {
    const newTasks = [...tasks];

    newTasks.push(initialTask);
    onUpdateTasks(newTasks);
  };

  const handleRemoveTaskField = (id) => {
    const newTasks = [...tasks];
    const filteredTasks = newTasks.filter((item) => item.id !== id);

    onUpdateTasks(filteredTasks);
  };

  const handleSubmitNewCategory = (e) => {
    e.preventDefault();

    if (!name || tasks.length === 0) return;

    const newCategory = {
      category: {
        name: name,
        color: color,
        id: crypto.randomUUID(),
      },
      tasks: tasks,
    };

    onSubmit(newCategory);

    // Reset fields after submit
    onUpdateName("");
    onUpdateColor("indigo");
    onUpdateTasks([]);
  };

  return (
    <Dialog.Content maxWidth="450px">
      <Dialog.Title>Edit category</Dialog.Title>

      <Dialog.Description size="2" mb="4" color="gray">
        Add at least one task in this category
      </Dialog.Description>

      <form onSubmit={handleSubmitNewCategory}>
        <Flex direction="column" gap="3">
          <Flex justify="between">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Category Name
              </Text>

              <TextField.Root
                defaultValue={name}
                onChange={(e) => onUpdateName(e.target.value)}
                placeholder="Enter category"
                style={{ width: "300px" }}
              />
            </label>

            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Color
              </Text>
              <Select.Root defaultValue={color} onValueChange={onUpdateColor}>
                <Select.Trigger color={color} variant="soft" />
                <Select.Content color={color}>
                  {colors.map((color, i) => (
                    <Select.Item value={color} key={i}>
                      {color}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </label>
          </Flex>

          {tasks.map((task, i) => (
            <div key={task.id}>
              <Flex justify="between">
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    {i === 0 && "Task(s)"}
                  </Text>

                  <TextField.Root
                    defaultValue={task.name}
                    onChange={(e) => handleUpdateTask(task.id, e.target.value)}
                    placeholder="Enter task"
                    style={{ width: "300px" }}
                  />
                </label>

                <div>
                  <Text
                    as="div"
                    size="2"
                    mb="1"
                    weight="bold"
                    style={{ width: "90px" }}
                  >
                    {i === 0 && "Add/Remove"}
                  </Text>

                  <Flex justify="between">
                    <Button
                      type="button"
                      onClick={() => handleAddTaskField()}
                      variant="soft"
                      color="cyan"
                    >
                      <PlusIcon />
                    </Button>

                    <Button
                      type="button"
                      onClick={() => handleRemoveTaskField(task.id)}
                      variant="soft"
                      color="crimson"
                      disabled={tasks.length === 1}
                    >
                      <MinusIcon />
                    </Button>
                  </Flex>
                </div>
              </Flex>
            </div>
          ))}
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>

          <Dialog.Close>
            <Button type="submit">Save</Button>
          </Dialog.Close>
        </Flex>
      </form>
    </Dialog.Content>
  );
};

export default EditCategoryDialog;
