/* eslint-disable react/prop-types */
import { Card, Button } from "@radix-ui/themes";

const CardCategory = ({ children, card }) => {
  return (
    <Card variant="ghost" key={card.category.id}>
      <Button variant="soft" size="1" color={card.category.color}>
        {card.category.name}
      </Button>

      {children}
    </Card>
  );
};

export default CardCategory;
