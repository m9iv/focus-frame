import { Dialog } from "@radix-ui/themes";

const DialogHeader = ({ title, description }) => {
  return (
    <>
      <Dialog.Title>{title}</Dialog.Title>

      <Dialog.Description size="2" mb="4" color="gray">
        {description}
      </Dialog.Description>
    </>
  );
};

export default DialogHeader;
