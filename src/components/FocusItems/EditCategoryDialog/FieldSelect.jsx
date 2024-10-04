/* eslint-disable react/prop-types */
import { Text, Select } from "@radix-ui/themes";

import { colors } from "../../../_data";

const FieldSelect = ({ title, selected, onSelect }) => {
  return (
    <label>
      <Text as="div" size="2" mb="1" weight="bold">
        {title}
      </Text>

      <Select.Root defaultValue={selected} onValueChange={onSelect}>
        <Select.Trigger color={selected} variant="soft" />

        <Select.Content color={selected}>
          {colors.map((selected, i) => (
            <Select.Item value={selected} key={i}>
              {selected}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </label>
  );
};

export default FieldSelect;
