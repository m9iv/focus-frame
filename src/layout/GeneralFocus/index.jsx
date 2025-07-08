// Radix Components
import { Box, Flex } from '@radix-ui/themes'
import { RocketIcon } from '@radix-ui/react-icons'
// Common Components
import SectionHeader from '/src/components/SectionHeader'
// GeneralFocus Components
import FocusCategories from './components/FocusCategories'
import NewCategoryButton from './components/NewCategoryButton'

function GeneralFocus() {
  return (
    <Box width="350px">
      <SectionHeader title="General Focus" icon={<RocketIcon />} />

      <Flex direction="column" gap="6" maxWidth="350px" pt="5">
        <FocusCategories />
        {/* <NewCategoryButton /> */}
      </Flex>
    </Box>
  )
}

export default GeneralFocus
