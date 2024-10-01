import { Box, Section, Container, Flex, Heading, Text } from "@radix-ui/themes";
import { TransformIcon } from "@radix-ui/react-icons";

const Header = () => {
  return (
    <Box py="5">
      <Section size="2">
        <Container size="1">
          <Flex justify="center" gap="2">
            <TransformIcon width="32" height="32" color="gray" />

            <Flex direction="column">
              <Heading as="h1" size="7" weight="bold">
                FocusFrame
              </Heading>

              <Text color="gray" size="1">
                Dream, plan, learn and analize
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Section>
    </Box>
  );
};

export default Header;
