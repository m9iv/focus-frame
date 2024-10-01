import { Flex, Box, Heading, Card, Button, Text } from "@radix-ui/themes";

import {
  RocketIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";

const FocusItems = () => {
  return (
    <Box width="350px">
      <Heading size="4" as="h2" color="purple">
        <RocketIcon width="16" height="16" /> Focus
      </Heading>

      <Flex direction="column" gap="6" maxWidth="350px" pt="5">
        <Card variant="ghost">
          <Button variant="soft" size="1" color="green">
            Front-end
          </Button>
          <Card variant="surface" gap="3" className="focus-item">
            <Flex justify="between" align="center">
              <Text as="div" size="2">
                JavaScript
              </Text>
              <ChevronRightIcon color="gray" />
            </Flex>
          </Card>

          <Card variant="surface" gap="3" className="focus-item">
            <Flex justify="between" align="center">
              <Text as="div" size="2">
                CSS/HTML
              </Text>
              <ChevronRightIcon color="gray" />
            </Flex>
          </Card>

          <Card variant="ghost" gap="3" className="focus-item active">
            <Flex justify="between" align="center">
              <Text as="div" size="2">
                React
              </Text>
              <ChevronLeftIcon color="gray" />
            </Flex>
          </Card>

          <Card variant="surface" gap="3" className="focus-item">
            <Flex justify="between" align="center">
              <Text as="div" size="2">
                TypeScript
              </Text>
              <ChevronRightIcon color="gray" />
            </Flex>
          </Card>
        </Card>

        <Card variant="ghost">
          <Button variant="soft" size="1" color="orange">
            3D
          </Button>
          <Card variant="ghost" gap="3" className="focus-item active">
            <Flex justify="between" align="center">
              <Text as="div" size="2">
                Modeling Ellie's player in Blender
              </Text>
              <ChevronLeftIcon color="gray" />
            </Flex>
          </Card>

          <Card variant="surface" gap="3" className="focus-item">
            <Flex justify="between" align="center">
              <Text as="div" size="2">
                Learn FreeCAD
              </Text>
              <ChevronRightIcon color="gray" />
            </Flex>
          </Card>
        </Card>

        <Card variant="ghost">
          <Button variant="soft" size="1" color="sky">
            Reading Books
          </Button>
          <Card variant="ghost" gap="3" className="focus-item active">
            <Flex justify="between" align="center">
              <Text as="div" size="2">
                Read "The Invincible"
              </Text>
              <ChevronLeftIcon color="gray" />
            </Flex>
          </Card>
        </Card>

        <Flex gap="2" justify="center" align="center">
          <Button variant="ghost" width="100%">
            <PlusCircledIcon /> <Text size="1">Add a new category</Text>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default FocusItems;
