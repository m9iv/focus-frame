import { Card, Button } from "@radix-ui/themes";

const Category = ({ children, focusItem, onToggleDialog }) => {
  return (
    <Card variant="ghost" key={focusItem.category.id}>
      <Button
        variant="soft"
        size="1"
        color={focusItem.category.color}
        onClick={() => onToggleDialog(focusItem.category.id)}
      >
        {focusItem.category.name}
      </Button>

      {children}
    </Card>
  );
};

export default Category;
