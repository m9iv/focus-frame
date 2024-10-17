import { Text } from "@radix-ui/themes";

import Category from "./components/Category";
import Task from "./components/Task";

const FocusCards = ({ focusItems, onOpenCategoryDetails }) => {
  return (
    <>
      {focusItems.length === 0 && (
        <Text size="2" color="gray">
          Create a category with at least one task on what you want to focus.
        </Text>
      )}

      {focusItems.map((focusItem) => (
        <Category
          focusItem={focusItem}
          onToggleDialog={onOpenCategoryDetails}
          key={focusItem.category.id}
        >
          {focusItem.tasks.map((task) => (
            <Task task={task} key={task.id} />
          ))}
        </Category>
      ))}
    </>
  );
};

export default FocusCards;
