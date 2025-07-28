import { useState } from 'react'
// Radix Components
import { Dialog, Flex } from '@radix-ui/themes'
// Local Components
import DialogHeader from './components/DialogHeader'
import FieldInput from './components/FieldInput'
import FieldSelect from './components/FieldSelect'
import FieldInputLine from './components/FieldInputLine'
import DialogButtons from './components/DialogButtons'

const DEFAULT_CATEGORY = {
  name: '',
  color: 'lime',
  id: null,
}

const DEFAULT_TASKS = [
  {
    name: '',
    isPlaned: false,
    id: crypto.randomUUID(),
  },
]

function CategoryDetailsDialog({
  isOpen,
  selectedData,
  onClose,
  onDelete,
  onSubmit,
}) {
  const [categoryData, setCategoryData] = useState(
    selectedData?.category ?? DEFAULT_CATEGORY
  )

  const [tasksData, setTasksData] = useState(
    selectedData?.variants ?? DEFAULT_TASKS
  )

  const isNewCategory = categoryData.id == null

  const title = isNewCategory ? 'Add new category' : 'Edit category'
  const description = isNewCategory
    ? 'Add at least one task in this category'
    : ''

  const resetFields = () => {
    setCategoryData(DEFAULT_CATEGORY)
    setTasksData(DEFAULT_TASKS)
  }

  const handleUpdateCategoryName = (newValue) => {
    const updatedCategory = {
      ...categoryData,
      name: newValue,
    }

    setCategoryData(updatedCategory)
  }

  const handleUpdateCategoryColor = (newColor) => {
    const updatedCategory = {
      ...categoryData,
      color: newColor,
    }

    setCategoryData(updatedCategory)
  }

  const handleUpdateTask = (curId, newValue) => {
    const taskIndex = tasksData.findIndex((task) => task.id === curId)
    const newTasks = [...tasksData]

    if (taskIndex === -1) {
      return
    }

    newTasks[taskIndex] = {
      ...newTasks[taskIndex],
      name: newValue,
    }

    setTasksData(newTasks)
  }

  const handleAddTaskField = () => {
    const newTasks = [...tasksData]

    newTasks.push({
      name: '',
      isPlaned: false,
      id: crypto.randomUUID(),
    })

    setTasksData(newTasks)
  }

  const handleRemoveTaskField = (curId) => {
    const newTasks = [...tasksData]
    const filteredTasks = newTasks.filter((item) => item.id !== curId)

    setTasksData(filteredTasks)
  }

  const handleSubmitCategory = () => {
    if (!categoryData.name || !tasksData[0].name) {
      return
    }

    if (isNewCategory) {
      const newCategoryData = { ...categoryData }
      const updatedCategoryData = {
        ...newCategoryData,
        id: crypto.randomUUID(),
      }
      const newCategory = { category: updatedCategoryData, variants: tasksData }
      onSubmit(newCategory)
    } else {
      const updatedCategory = { category: categoryData, variants: tasksData }
      onSubmit(updatedCategory)
    }

    handleClose()
  }

  const handleClose = () => {
    onClose()
    resetFields()
  }

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Content maxWidth="450px">
        <DialogHeader title={title} description={description} />

        <Flex direction="column" gap="3">
          <Flex justify="between">
            <FieldInput
              title="Category Name"
              defaultValue={categoryData.name}
              onUpdate={handleUpdateCategoryName}
            />

            <FieldSelect
              title="Color"
              selected={categoryData.color}
              onSelect={handleUpdateCategoryColor}
            />
          </Flex>

          {tasksData.map((task, idx) => (
            <FieldInputLine
              task={task}
              idx={idx}
              key={task.id}
              isButtonDisabled={tasksData.length === 1}
              onUpdate={handleUpdateTask}
              onAddField={handleAddTaskField}
              onRemoveField={handleRemoveTaskField}
            />
          ))}
        </Flex>

        <Flex gap="3" mt="4" justify={isNewCategory ? 'end' : 'between'}>
          <DialogButtons
            isNewCategory={isNewCategory}
            onClose={handleClose}
            onSubmit={handleSubmitCategory}
            onDelete={onDelete}
          />
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default CategoryDetailsDialog
