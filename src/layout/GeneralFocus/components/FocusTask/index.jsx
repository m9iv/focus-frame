// Radix Components
import { Card, Flex, Switch, Text } from '@radix-ui/themes'
// Contexts
import { useTasks } from '/src/contexts/TasksContext'
// Styles
import styles from './FocusTask.module.css'

function FocusTask({ color, task, categoryId }) {
  const { isLoading, planTask } = useTasks()

  return (
    <Card variant="surface" className={styles.focusTask} key={task.id}>
      <Flex justify="between" align="center">
        <Text as="div" size="2">
          {task.name}
        </Text>

        <Switch
          size="1"
          color={color}
          defaultChecked={task.isPlaned}
          onClick={() => planTask(categoryId, task.id)}
          disabled={isLoading}
          highContrast
        />
      </Flex>
    </Card>
  )
}

export default FocusTask
