import { Dialog } from "@radix-ui/themes";

const DialogHeader = ({ title, children }) => {
  return (
    <>
      <Dialog.Title>{title}</Dialog.Title>

      <Dialog.Description size="2" mb="4" color="gray">
        {children}
      </Dialog.Description>
    </>
  );
};

export default DialogHeader;
