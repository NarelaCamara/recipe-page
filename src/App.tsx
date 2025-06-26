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

    ingredents: [
      "2-3 large eggs",
      "Salt, to taste",
      "Pepper, to taste",
      "1 tablespoon of butter or oil",
      "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
    ],
    instructions: [
      {
        title: "Beat the eggs",
        description:
          "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
      },
      {
        title: "Heat the pan",
        description:
          "Place a non-stick frying pan over medium heat and add butter or oil.",
      },
      {
        title: "Cook the omelette",
        description:
          "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
      },
      {
        title: "Add fillings (optional)",
        description:
          "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
      },
      {
        title: "Fold and serve",
        description:
          "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
      },
      {
        title: "Enjoy",
        description: "Serve hot, with additional salt and pepper if needed.",
      },
    ],
    nutrition: [
      { name: "Calories", porcentaje: "277kcal" },
      { name: "Carbs", porcentaje: "0g" },
      { name: "Protein", porcentaje: "20g" },
      { name: "Fat", porcentaje: "22g" },
    ],
  };

  return (
    <div className="container">
      <Card food={food} />
    </div>
  );
}

export default App;
