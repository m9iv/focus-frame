// Radix Components
import { Box } from '@radix-ui/themes'
import { CalendarIcon } from '@radix-ui/react-icons'
// Common Components
import SectionHeader from '/src/components/SectionHeader'

function EverydaySteps() {
  return (
    <Box width="450px">
      <SectionHeader title="Everyday Steps" icon={<CalendarIcon />} />
    </Box>
  )
}

export default EverydaySteps
