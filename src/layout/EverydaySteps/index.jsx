// Radix Components
import {
  Badge,
  Box,
  Callout,
  Card,
  CheckboxCards,
  Flex,
  Text,
} from '@radix-ui/themes'
import { CalendarIcon, Pencil1Icon } from '@radix-ui/react-icons'
// Common Components
import SectionHeader from '/src/components/SectionHeader'
// Contexts
import { useTasks } from '/src/contexts/TasksContext'

function EverydaySteps() {
  const { isLoading, tasks, plannedTasks } = useTasks()

  return (
    <Box width="450px">
      {tasks.length > 0 && !isLoading && (
        <>
          <SectionHeader
            title="Everyday Steps"
            icon={<CalendarIcon />}
            mb="5"
          />

          <Flex pt="5">
            <Box width="100%">
              {!plannedTasks.length && !isLoading && (
                <Callout.Root color="gray">
                  <Callout.Icon>
                    <Pencil1Icon />
                  </Callout.Icon>

                  <Callout.Text>
                    You haven&apos;t scheduled any tasks for today.
                  </Callout.Text>
                </Callout.Root>
              )}

              {plannedTasks.length > 0 && !isLoading && (
                <Card>
                  <Flex gap="3" direction="column">
                    {plannedTasks.map((task) => (
                      <CheckboxCards.Root
                        key={task.id}
                        color={task.color}
                        className="anix-pop-in">
                        <CheckboxCards.Item value={task.id}>
                          <Badge color={task.color}>{task.category}</Badge>

                          <Text>{task.name}</Text>
                        </CheckboxCards.Item>
                      </CheckboxCards.Root>
                    ))}
                  </Flex>
                </Card>
              )}
            </Box>
          </Flex>
        </>
      )}
    </Box>
  )
}

export default EverydaySteps
