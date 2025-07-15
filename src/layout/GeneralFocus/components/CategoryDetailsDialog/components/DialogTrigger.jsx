/* eslint-disable react/prop-types */
import { Button, Text, Dialog } from "@radix-ui/themes";

const DialogTrigger = ({ title, icon, onClick }) => {
  return (
    <Dialog.Trigger>
      <Button onClick={onClick} variant="ghost" width="100%">
        {icon} <Text size="1">{title}</Text>
      </Button>
    </Dialog.Trigger>
  );
};

export default DialogTrigger;
