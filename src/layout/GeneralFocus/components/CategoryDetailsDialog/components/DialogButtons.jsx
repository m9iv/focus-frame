import { Button } from "@radix-ui/themes";

const DialogButtons = ({ isNewCategory, onClose, onDelete, onSubmit }) => {
  return (
    <>
      {!isNewCategory && (
        <Button type="button" onClick={onDelete} color="red">
          Delete
        </Button>
      )}

      <div>
        <Button
          type="button"
          onClick={onClose}
          variant="soft"
          color="gray"
          mr="3"
        >
          Cancel
        </Button>

        <Button type="button" onClick={onSubmit}>
          Save
        </Button>
      </div>
    </>
  );
};

export default DialogButtons;
