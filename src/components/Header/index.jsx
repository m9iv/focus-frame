// Radix Components
import { Box, Section, Container, Flex, Heading, Text } from '@radix-ui/themes'
// Styles
import styles from './Header.module.css'

const Header = () => {
  return (
    <Box py="5">
      <Section size="2">
        <Container size="1">
          <Flex justify="center" gap="2">
            <img className={styles.logo} src="/logo.png" alt="Logo" />

            <Flex direction="column">
              <Heading as="h1" size="7" weight="bold">
                Focus Frame
              </Heading>

              <Text color="gray" size="1">
                Dream, plan, learn and analize
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Section>
    </Box>
  )
}

export default Header
