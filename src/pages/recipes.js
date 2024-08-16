import { Ingredient } from "../components/Ingredientngredient";
import { Step } from "@/components/Step";

const RecipesPages = () => {
  return (
    <div>
      {data.map((food) => {
        return (
          <div>
            {food.ingredients.map((ingredient, index) => {
              return (
                <Ingredient
                  key={index}
                  name={ingredient.name}
                  amount={ingredient.amount}
                  measurement={ingredient.measurement}
                />
              );
            })}
            {food.steps.map((value, index) => {
              return <Step key={index} steps={value} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default RecipesPages;

const data = [
  {
    name: "Baked Salmon",
    ingredients: [
      { name: "Salmon", amount: 1, measurement: "l lb" },
      { name: "Pine Nuts", amount: 1, measurement: "cup" },
      { name: "Butter Lettuce", amount: 2, measurement: "cups" },
      { name: "Yellow Squash", amount: 1, measurement: "med" },
      { name: "Olive Oil", amount: 0.5, measurement: "cup" },
      { name: "Garlic", amount: 3, measurement: "cloves" },
    ],
    steps: [
      "Preheat the oven to 350 degrees.",
      "Spread the olive oil around a glass baking dish.",
      "Add the salmon, garlic, and pine nuts to the dish.",
      "Bake for 15 minutes.",
      "Add the yellow squash and put back in the oven for 30 mins.",
      "Remove from oven and let cool for 15 minutes. Add the lettuce and serve.",
    ],
  },
  {
    name: "Baked Salmon",
    ingredients: [
      { name: "Whitefish", amount: 1, measurement: "l lb" },
      { name: "Cheese", amount: 1, measurement: "cup" },
      { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
      { name: "Tomatoes", amount: 2, measurement: "large" },
      { name: "Tortillas", amount: 3, measurement: "med" },
    ],
    steps: [
      "Cook the fish on the grill until hot.",
      "Place the fish on the 3 tortillas.",
      "Top them with lettuce, tomatoes, and cheese",
    ],
  },
];
