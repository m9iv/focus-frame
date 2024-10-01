import { useState } from "react";

import { Flex } from "@radix-ui/themes";

import Header from "./components/Header";
import FocusItems from "./components/FocusItems";
import EverydayPlans from "./components/EverydayPlans";
import LearningProgress from "./components/LearningProgress";

const focusItemsData = [
  {
    category: {
      name: "Front-end",
      color: "green",
    },
    tasks: [
      {
        name: "JavaScript",
        isPlaned: false,
      },
      {
        name: "React",
        isPlaned: true,
      },
      {
        name: "CSS/HTML",
        isPlaned: false,
      },
      {
        name: "TypeScript",
        isPlaned: false,
      },
    ],
  },
  {
    category: {
      name: "3D",
      color: "orange",
    },
    tasks: [
      {
        name: "Modeling Ellie's player in Blender",
        isPlaned: true,
      },
      {
        name: "Learn FreeCAD",
        isPlaned: false,
      },
    ],
  },
  {
    category: {
      name: "Reading Books",
      color: "sky",
    },
    tasks: [
      {
        name: "Read The Invincible",
        isPlaned: true,
      },
    ],
  },
];

const App = () => {
  const [items, setItems] = useState([]);

  return (
    <>
      <Header />

      <Flex gap="9" justify="center">
        <FocusItems items={focusItemsData} />
        <EverydayPlans />
      </Flex>

      <LearningProgress />
    </>
  );
};

export default App;
