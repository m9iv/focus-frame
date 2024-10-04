import { Dialog, Button } from "@radix-ui/themes";

const DialogButtons = () => {
  return (
    <>
      <Dialog.Close>
        <Button variant="soft" color="gray">
          Cancel
        </Button>
      </Dialog.Close>

      <Dialog.Close>
        <Button type="submit">Save</Button>
      </Dialog.Close>
    </>
  );
};

export default DialogButtons;
