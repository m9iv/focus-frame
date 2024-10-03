import { useState } from "react";

import { Flex } from "@radix-ui/themes";

// Data
import { testFocusItems } from "./_data";

// Components
import Header from "./components/Header";
import FocusItems from "./components/FocusItems";
import EverydayPlans from "./components/EverydayPlans";
import LearningProgress from "./components/LearningProgress";

const App = () => {
  // [focusItems] = {category} + [tasks]
  const [focusItems, setFocusItems] = useState(testFocusItems);

  const handleSetFocusItems = (newItems) => {
    setFocusItems((items) => [...items, newItems]);
  };

  return (
    <>
      <Header />

      <Flex gap="9" justify="center">
        <FocusItems
          focusItems={focusItems}
          onAddFocusItems={handleSetFocusItems}
        />
        <EverydayPlans />
      </Flex>

      <LearningProgress />
    </>
  );
};

export default App;
