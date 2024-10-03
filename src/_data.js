export const colors = [
  "gray",
  "gold",
  "bronze",
  "brown",
  "yellow",
  "amber",
  "orange",
  "tomato",
  "red",
  "ruby",
  "crimson",
  "pink",
  "plum",
  "purple",
  "violet",
  "iris",
  "indigo",
  "blue",
  "cyan",
  "teal",
  "jade",
  "green",
  "grass",
  "lime",
  "mint",
  "sky",
];

export const testFocusItems = [
  {
    category: {
      name: "Front-end",
      color: "green",
      id: crypto.randomUUID(),
    },
    tasks: [
      {
        name: "React",
        isPlaned: true,
        id: crypto.randomUUID(),
      },
      {
        name: "CSS/HTML",
        isPlaned: false,
        id: crypto.randomUUID(),
      },
    ],
  },
  {
    category: {
      name: "Reading Books",
      color: "sky",
      id: crypto.randomUUID(),
    },
    tasks: [
      {
        name: "Read The Invincible",
        isPlaned: true,
        id: crypto.randomUUID(),
      },
    ],
  },
];
