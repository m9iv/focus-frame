// Radix Components
import { Card, Flex, Switch, Text } from '@radix-ui/themes'
// Styles
import styles from './FocusTask.module.css'

function FocusTask({ task }) {
  return (
    <Card variant="surface" className={styles.focusTask} key={task.id}>
      <Flex justify="between" align="center">
        <Text as="div" size="2">
          {task.name}
        </Text>

        <Switch size="1" defaultChecked={task.isPlaned} />
      </Flex>
    </Card>
  )
}

export default FocusTask
