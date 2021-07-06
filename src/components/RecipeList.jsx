import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ list }) => (
  <div className="p-3 mt-5 bg-gray-200">
    {list.map((item) => (
      <RecipeItem
        key={item.recipe}
        title={item.recipe.label}
        image={item.recipe.image}
        cuisineType={item.recipe.cuisineType}
        dishType={item.recipe.dishType}
        ingredients={item.recipe.ingredientLines}
      />
    ))}
  </div>
);

export default RecipeList;
