import "./App.css";
import viteLogo from "./assets/food.avif";
import { Card } from "./component/card/card";

function App() {
  const food = {
    name: "Simple Omelette Recipe",
    image: viteLogo,
    description:
      "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
    preparation: {
      total: "Approximately 10 minutes",
      preparation: "5 minutes",
      cooking: "5 minutes",
    },

    ingredents: ["2-3 large eggs"],
    instructions: [
      {
        title: "Beat the eggs",
        description:
          "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
      },
    ],
    nutrition: [
      { name: "Calories", porcentaje: "277kcal" },
      { name: "Calories", porcentaje: "277kcal" },
    ],
  };

  return (
    <div className="container">
      <Card food={food} />
    </div>
  );
}

export default App;
