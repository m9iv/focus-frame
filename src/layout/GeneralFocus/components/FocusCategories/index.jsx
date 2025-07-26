import { useState } from 'react'
// Radix Components
import { Button, Card } from '@radix-ui/themes'
// Common Components
import CategoryDetailsDialog from '../CategoryDetailsDialog'
// Local Components
import FocusTask from '../FocusTask'
// Contexts
import { useTasks } from '/src/contexts/TasksContext'

function FocusCategories() {
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const { tasks, updateCategory, deleteCategory } = useTasks()

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

  function handleUpdateCategory(updatedCategory) {
    updateCategory(selectedCategory.id, updatedCategory)
    setIsOpenDialog(false)
    setSelectedCategory(null)
  }

  function handleDeleteCategory() {
    deleteCategory(selectedCategory.id)
    setIsOpenDialog(false)
    setSelectedCategory(null)
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
            <FocusTask
              color={task.category.color}
              task={curVariant}
              categoryId={task.id}
              key={curVariant.id}
            />
          ))}
        </Card>
      ))}

      {isOpenDialog && (
        <CategoryDetailsDialog
          isOpen={isOpenDialog}
          onClose={handleCloseCategoryDetails}
          selectedData={selectedCategory}
          onDelete={handleDeleteCategory}
          onSubmit={handleUpdateCategory}
        />
      )}
    </>
  )
}

export default FocusCategories
