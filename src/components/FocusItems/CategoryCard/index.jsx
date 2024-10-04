/* eslint-disable react/prop-types */
import { Text } from "@radix-ui/themes";

import CardCategory from "./CardCategory";
import CardTask from "./CardTask";

const CategoryCard = ({ focusItems }) => {
  return (
    <>
      {focusItems.length === 0 && (
        <Text size="2" color="gray">
          Create a category with at least one task on what you want to focus.
        </Text>
      )}

      {focusItems.map((item) => (
        <CardCategory card={item} key={item.category.id}>
          {item.tasks.map((task) => (
            <CardTask task={task} key={task.id} />
          ))}
        </CardCategory>
      ))}
    </>
  );
};

export default CategoryCard;
