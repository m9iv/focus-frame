import { Button } from "@radix-ui/themes";

const DialogButtons = ({ onClose, onSubmit }) => {
  return (
    <>
      <Button type="button" onClick={onClose} variant="soft" color="gray">
        Cancel
      </Button>

      <Button type="button" onClick={onSubmit}>
        Save
      </Button>
    </>
  );
};

export default DialogButtons;
