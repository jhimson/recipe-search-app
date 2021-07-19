import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ list, loading }) =>
  list.length !== 0 ? (
    <div className="grid justify-center grid-cols-1 mt-10 bg-gray-50 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-y-5">
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
          instructions={item.recipe.url}
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
