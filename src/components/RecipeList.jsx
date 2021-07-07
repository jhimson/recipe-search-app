import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ list, loading }) =>
  list.length !== 0 ? (
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
  ) : (
    <div className="flex items-center justify-center w-full mt-10">
      <h1 className="p-5 text-2xl font-semibold text-center bg-red-200 border-2 border-red-300 rounded-lg w-80 tracki ng-widest">
        {' '}
        No Recipes Found!
      </h1>
    </div>
  );

export default RecipeList;
