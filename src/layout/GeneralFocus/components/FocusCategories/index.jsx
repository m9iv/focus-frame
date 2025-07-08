// Radix Components
import { Button, Callout, Card } from '@radix-ui/themes'
import { InfoCircledIcon } from '@radix-ui/react-icons'
//Common Components
import Spinner from '/src/components/Spinner'
// Local Components
import FocusTask from '../FocusTask'
// Contexts
import { useTasks } from '/src/contexts/TasksContext'

function FocusCategories() {
  const { tasks, isLoading } = useTasks()

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
        <Card variant="ghost" key={task.category.id}>
          <Button
            variant="soft"
            size="1"
            color={task.category.color}
            onClick={() => console.log('FocusCategories CLICK')}>
            {task.category.name}
          </Button>

          {task.variants.map((curVariant) => (
            <FocusTask task={curVariant} key={curVariant.id} />
          ))}
        </Card>
      ))}
    </>
  )
}

export default FocusCategories

{
  /* <Card variant="ghost" key={focusItem.category.id}>
    <Button
      variant="soft"
      size="1"
      color={focusItem.category.color}
      onClick={() => onToggleDialog(focusItem.category.id)}>
      {focusItem.category.name}
    </Button>

    {children}
  </Card> */
}
