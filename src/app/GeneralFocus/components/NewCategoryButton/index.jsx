import { useState } from 'react'
// Radix Components
import { PlusCircledIcon } from '@radix-ui/react-icons'
import { Button, Flex, Text } from '@radix-ui/themes'
// Common Components
import CategoryDetailsDialog from '../CategoryDetailsDialog'
// Contexts
import { useTasks } from '/src/contexts/TasksContext'

function NewCategoryButton() {
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const { tasks, createCategory } = useTasks()

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

  function handleUpdateTasks(newCategory) {
    createCategory(newCategory)
  }

  return (
    <>
      <Flex gap="2" justify="center" align="center">
        <Button
          onClick={() => handleOpenCategoryDetails(null)}
          variant="ghost"
          width="100%">
          <PlusCircledIcon /> <Text size="1">Add new category</Text>
        </Button>
      </Flex>

      {isOpenDialog && (
        <CategoryDetailsDialog
          isOpen={isOpenDialog}
          onClose={handleCloseCategoryDetails}
          selectedData={selectedCategory}
          onSubmit={handleUpdateTasks}
        />
      )}
    </>
  )
}

export default NewCategoryButton
