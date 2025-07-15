import { useState } from 'react'
// Radix Components
import { Button, Callout, Card } from '@radix-ui/themes'
import { InfoCircledIcon } from '@radix-ui/react-icons'
// Common Components
import Spinner from '/src/components/Spinner'
import CategoryDetailsDialog from '../CategoryDetailsDialog'
// Local Components
import FocusTask from '../FocusTask'
// Contexts
import { useTasks } from '/src/contexts/TasksContext'

function FocusCategories() {
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const { tasks, isLoading } = useTasks()

  function handleOpenCategoryDetails(categoryId) {
    if (categoryId != null) {
      const categoriesCopy = [...tasks]
      const foundCategory = categoriesCopy.find(
        (item) => item.category.id === categoryId
      )

      if (foundCategory != null) {
        setSelectedCategory(foundCategory)
      }
    }

    setIsOpenDialog(true)
  }

  function handleCloseCategoryDetails() {
    setIsOpenDialog(false)
    setSelectedCategory(null)
  }

  if (isLoading)
    return (
      <Card variant="ghost">
        <Spinner />
      </Card>
    )

  if (!tasks.length) {
    return (
      <Callout.Root color="blue">
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>

        <Callout.Text>
          Create a category with at least one task on what you want to focus.
        </Callout.Text>
      </Callout.Root>
    )
  }

  return (
    <>
      {tasks.map((task) => (
        <Card key={task.category.id}>
          <Button
            variant="soft"
            size="1"
            color={task.category.color}
            onClick={() => handleOpenCategoryDetails(task.category.id)}>
            {task.category.name}
          </Button>

          {task.variants.map((curVariant) => (
            <FocusTask task={curVariant} key={curVariant.id} />
          ))}
        </Card>
      ))}

      {isOpenDialog && (
        <CategoryDetailsDialog
          isOpen={isOpenDialog}
          onClose={handleCloseCategoryDetails}
          selectedData={selectedCategory}
          // onDelete={handleDeleteCategory}
          // onSubmit={handleUpdateFocusItems}
        />
      )}
    </>
  )
}

export default FocusCategories
