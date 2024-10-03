import { useState } from "react";
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

const EditCategoryDialog = ({ onSubmit }) => {
  <Dialog.Content maxWidth="450px">
    <Dialog.Title>Edit category</Dialog.Title>

    <Dialog.Description size="2" mb="4" color="gray">
      Add at least one task in this category
    </Dialog.Description>

    <form onSubmit={onSubmit}>
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
                  onChange={(e) => handleSetTasks(task.id, e.target.value)}
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
  </Dialog.Content>;
};

export default EditCategoryDialog;
