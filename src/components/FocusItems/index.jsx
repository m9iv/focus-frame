import { useState } from "react";

import { Flex, Box, Button, Text } from "@radix-ui/themes";
import { RocketIcon, PlusCircledIcon } from "@radix-ui/react-icons";

import SectionHeader from "../common/SectionHeader";
import FocusCards from "./components/FocusCards";
import CategoryDetailsDialog from "./components/CategoryDetailsDialog";

import { testFocusItems } from "../../_data";

const FocusItems = () => {
  const [focusItems, setFocusItems] = useState(testFocusItems);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleUpdateFocusItems = (payload) => {
    if (selectedCategory != null) {
      const idx = focusItems.findIndex(
        (item) => item.category.id === payload.category.id
      );
      const updatedFocusItems = [...focusItems];
      updatedFocusItems[idx] = payload;
      setFocusItems(updatedFocusItems);
    } else {
      setFocusItems((items) => [...items, payload]);
    }

    setIsOpenDialog(false);
    setSelectedCategory(null);
  };

  const handleOpenCategoryDetails = (categoryId) => {
    if (categoryId != null) {
      const categoriesCopy = [...focusItems];
      const foundCategory = categoriesCopy.find(
        (item) => item.category.id === categoryId
      );

      if (foundCategory != null) {
        setSelectedCategory(foundCategory);
      }
    }

    setIsOpenDialog(true);
  };

  const handleCloseCategoryDetails = () => {
    setIsOpenDialog(false);
    setSelectedCategory(null);
  };

  return (
    <Box width="350px">
      <SectionHeader title="Focus" icon={<RocketIcon />} />

      <Flex direction="column" gap="6" maxWidth="350px" pt="5">
        <FocusCards
          focusItems={focusItems}
          onOpenCategoryDetails={handleOpenCategoryDetails}
          onSubmit={handleUpdateFocusItems}
        />

        <Flex gap="2" justify="center" align="center">
          <Button
            onClick={() => handleOpenCategoryDetails(null)}
            variant="ghost"
            width="100%"
          >
            <PlusCircledIcon /> <Text size="1">Add new category</Text>
          </Button>
        </Flex>
      </Flex>

      {isOpenDialog && (
        <CategoryDetailsDialog
          isOpen={isOpenDialog}
          onClose={handleCloseCategoryDetails}
          selectedData={selectedCategory}
          onSubmit={handleUpdateFocusItems}
        />
      )}
    </Box>
  );
};

export default FocusItems;
