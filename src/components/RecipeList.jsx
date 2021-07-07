import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ list, loading }) => (
  <div className="grid p-3 mt-5 bg-gray-100 lg:grid-cols-2 lg:gap-x-2 xl:grid-cols-3">
    {list.map((item) => (
      <RecipeItem
        loading={loading}
        key={item.recipe}
        title={item.recipe.label}
        image={item.recipe.image}
        cuisineType={item.recipe.cuisineType}
        dishType={item.recipe.dishType}
        ingredients={item.recipe.ingredientLines}
        calories={item.recipe.calories}
      />
    ))}
  </div>
);

export default RecipeList;
