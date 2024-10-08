import { Heading } from "@radix-ui/themes";

const SectionHeader = ({ icon, title }) => {
  return (
    <Heading size="4" as="h2" color="purple">
      {icon} {title}
    </Heading>
  );
};

export default SectionHeader;
