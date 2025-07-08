// Radix Components
import { Card, Flex, Text } from '@radix-ui/themes'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
// Styles
import styles from './FocusTask.module.css'

function FocusTask({ task }) {
  return (
    <Card
      variant="surface"
      gap="3"
      className={`${styles.focusTask} ${task.isPlaned ? 'active' : ''}`}
      key={task.id}>
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
  )
}

export default FocusTask
