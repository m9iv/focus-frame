import { Text, TextField } from "@radix-ui/themes";

const FieldInput = ({ title, defaultValue, onUpdate }) => {
  return (
    <label>
      <Text as="div" size="2" mb="1" weight="bold">
        {title}
      </Text>

      <TextField.Root
        defaultValue={defaultValue}
        onChange={(e) => onUpdate(e.target.value)}
        placeholder="Enter category"
        style={{ width: "300px" }}
      />
    </label>
  );
};

export default FieldInput;
