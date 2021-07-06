import React from 'react';

const RecipeList = ({ list }) => (
  <div className="p-3 bg-gray-200">
    <ul>
      {list.map((item) => (
        <li key={item.recipe.label}>{item.recipe.label}</li>
      ))}
    </ul>
  </div>
);

export default RecipeList;
