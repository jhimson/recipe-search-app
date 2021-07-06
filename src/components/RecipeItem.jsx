/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const RecipeItem = ({
  image,
  title,
  cuisineType,
  dishType,
  ingredients,
  calories,
}) => (
  <div className="flex flex-col items-center justify-center p-5 mt-5 bg-blue-200 rounded-lg">
    <h1 className="mb-5 font-mono text-xl font-bold text-center">{title}</h1>
    <img src={image} alt="image not available" className="rounded-full" />
    <div className="flex mt-5 space-x-5">
      <div className="p-2 px-3 bg-blue-400 rounded-md">
        <span className="font-bold">Cuisine:</span>{' '}
        <span className="font-mono capitalize">{cuisineType || 'N/A'}</span>
      </div>
      <div className="p-2 px-3 text-sm bg-blue-400 rounded-md">
        <span className="font-bold">Dish:</span>{' '}
        <span className="font-mono capitalize">{dishType || 'N/A'}</span>
      </div>
    </div>
    <div className="ingredients">
      <h1 className="mt-5 font-mono text-xl">Ingredients:</h1>
      <ul>
        {ingredients.length !== 0
          ? ingredients.map((ingredient) => (
              <li key={ingredient} className="text-sm">
                {ingredient}
              </li>
            ))
          : null}
      </ul>
    </div>
  </div>
);

export default RecipeItem;
