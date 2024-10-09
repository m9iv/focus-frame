import { Dialog, Flex } from "@radix-ui/themes";

import DialogHeader from "./components/DialogHeader";
import FieldInput from "./components/FieldInput";
import FieldSelect from "./components/FieldSelect";
import FieldInputLine from "./components/FieldInputLine";
import DialogButtons from "./components/DialogButtons";

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

  const dialog = {
    title: "Edit Category",
    description: "Add at least one task in this category",
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

    if (!name || tasks.length === 0) {
      return;
    }

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
      <DialogHeader title={dialog.title} description={dialog.description} />

      <form onSubmit={handleSubmitNewCategory}>
        <Flex direction="column" gap="3">
          <Flex justify="between">
            <FieldInput
              title="Category Name"
              defaultValue={name}
              onUpdate={onUpdateName}
            />

            <FieldSelect
              title="Color"
              selected={color}
              onSelect={onUpdateColor}
            />
          </Flex>

          {tasks.map((task, idx) => (
            <FieldInputLine
              task={task}
              idx={idx}
              key={task.id}
              isButtonDisabled={tasks.length === 1}
              onUpdate={handleUpdateTask}
              onAddField={handleAddTaskField}
              onRemoveField={handleRemoveTaskField}
            />
          ))}
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <DialogButtons />
        </Flex>
      </form>
    </Dialog.Content>
  );
};

export default EditCategoryDialog;
