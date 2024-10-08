import { Flex, Text, TextField, Button } from "@radix-ui/themes";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

const FieldInputLine = ({
  task,
  idx,
  isButtonDisabled,
  onUpdate,
  onAddField,
  onRemoveField,
}) => {
  return (
    <Flex justify="between">
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          {idx === 0 && "Task(s)"}
        </Text>

        <TextField.Root
          defaultValue={task.name}
          onChange={(e) => onUpdate(task.id, e.target.value)}
          placeholder="Enter task"
          style={{ width: "300px" }}
        />
      </label>

      <div>
        <Text as="div" size="2" mb="1" weight="bold" style={{ width: "90px" }}>
          {idx === 0 && "Add/Remove"}
        </Text>

        <Flex justify="between">
          <Button
            type="button"
            onClick={() => onAddField()}
            variant="soft"
            color="cyan"
          >
            <PlusIcon />
          </Button>

          <Button
            type="button"
            onClick={() => onRemoveField(task.id)}
            variant="soft"
            color="crimson"
            disabled={isButtonDisabled}
          >
            <MinusIcon />
          </Button>
        </Flex>
      </div>
    </Flex>
  );
};

export default FieldInputLine;
