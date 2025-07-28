import { Heading, Text } from '@radix-ui/themes'

function SectionHeader({ icon, title }) {
  return (
    <Heading size="4" as="h2">
      <Text color="ruby">{icon}</Text> <Text>{title}</Text>
    </Heading>
  )
}

export default SectionHeader
