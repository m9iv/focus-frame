// Radix Components
import { Box, Callout, Flex } from '@radix-ui/themes'
import { InfoCircledIcon, RocketIcon } from '@radix-ui/react-icons'
// Common Components
import SectionHeader from '/src/components/SectionHeader'
// GeneralFocus Components
import FocusCategories from './components/FocusCategories'
import NewCategoryButton from './components/NewCategoryButton'
// Contexts
import { useTasks } from '/src/contexts/TasksContext'

function GeneralFocus() {
  const { isLoading, tasks } = useTasks()

  return (
    <Box width="350px">
      <SectionHeader title="General Focus" icon={<RocketIcon />} />

      {!tasks.length && !isLoading && (
        <Box pt="5">
          <Callout.Root color="blue">
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>

            <Callout.Text>
              Create a category with at least one task on what you want to
              focus.
            </Callout.Text>
          </Callout.Root>
        </Box>
      )}

      <Flex direction="column" gap="6" maxWidth="350px" pt="5">
        <FocusCategories />
        <NewCategoryButton />
      </Flex>
    </Box>
  )
}

export default GeneralFocus
