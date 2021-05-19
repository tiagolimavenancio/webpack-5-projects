import { useState } from "react";

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 3,
};

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);

const Recipes = () => {
  const [recipe, setRecipe] = useState({});

  return (
    <div>
      <h3>Current Recipes:</h3>
      <button onClick={() => setRecipe(elvenShieldRecipe)}>
        Elven Shield Recipe
      </button>
      <button onClick={() => setRecipe(elvenGauntletsRecipe)}>
        Elven Gauntlet Recipe
      </button>

      <ul>
        {Object.keys(recipe).map((key) => (
          <li key={key}>
            {key}: {recipe[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
