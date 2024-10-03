/* eslint-disable react/prop-types */
import { useState } from "react";
import { colors } from "../../_data";

import {
  Flex,
  Box,
  Heading,
  Card,
  Button,
  Text,
  TextField,
  Dialog,
  Select,
} from "@radix-ui/themes";

import {
  RocketIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  PlusCircledIcon,
  PlusIcon,
  MinusIcon,
} from "@radix-ui/react-icons";

const FocusItems = ({ focusItems, onAddFocusItems }) => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryColor, setCategoryColor] = useState("indigo");
  const [tasks, setTasks] = useState([]);

  const initialTask = { name: "", isPlaned: false, id: crypto.randomUUID() };

  const handleSetTasks = (curId, newValue) => {
    const curTaskIdx = tasks.findIndex((task) => task.id === curId);

    if (curTaskIdx === -1) {
      return;
    }

    const newTasks = [...tasks];

    newTasks[curTaskIdx] = {
      ...newTasks[curTaskIdx],
      name: newValue,
    };

    setTasks(newTasks);
  };

  const handleAddNewCategory = () => {
    tasks.length === 0 && setTasks([initialTask]);
  };

  const handleSubmitNewCategory = (e) => {
    e.preventDefault();

    if (!categoryName || tasks.length === 0) return;

    const newCategory = {
      category: {
        name: categoryName,
        color: categoryColor,
        id: crypto.randomUUID(),
      },
      tasks: tasks,
    };

    onAddFocusItems(newCategory);

    // Reset fields after submit
    setCategoryName("");
    setCategoryColor("indigo");
    setTasks([]);
  };

  const handleAddTaskField = () => {
    const newTasks = [...tasks];

    newTasks.push(initialTask);
    setTasks(newTasks);
  };

  const handleRemoveTaskField = (id) => {
    const newTasks = [...tasks];
    const filteredTasks = newTasks.filter((item) => item.id !== id);

    setTasks(filteredTasks);
  };

  return (
    <Box width="350px">
      <Heading size="4" as="h2" color="purple">
        <RocketIcon width="16" height="16" /> Focus
      </Heading>

      <Flex direction="column" gap="6" maxWidth="350px" pt="5">
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
                        defaultValue={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        placeholder="Enter category"
                        style={{ width: "300px" }}
                      />
                    </label>

                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Color
                      </Text>
                      <Select.Root
                        defaultValue={categoryColor}
                        onValueChange={setCategoryColor}
                      >
                        <Select.Trigger color={categoryColor} variant="soft" />
                        <Select.Content color={categoryColor}>
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
                            onChange={(e) =>
                              handleSetTasks(task.id, e.target.value)
                            }
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
          </Dialog.Root>
        </Flex>
      </Flex>
    </Box>
  );
};

export default FocusItems;
