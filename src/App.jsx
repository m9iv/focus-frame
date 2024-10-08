import { Flex } from "@radix-ui/themes";

// Components
import Header from "./components/Header";
import FocusItems from "./components/FocusItems";
import EverydayPlans from "./components/EverydayPlans";
import LearningProgress from "./components/LearningProgress";

const App = () => {
  return (
    <>
      <Header />

      <Flex gap="9" justify="center">
        <FocusItems
        // onAddTimespanOfCategory
        />

        <EverydayPlans
        // timespansGroupedDays={{ 'Monday}: [], }}
        />
      </Flex>

      <LearningProgress />
    </>
  );
};

export default App;
