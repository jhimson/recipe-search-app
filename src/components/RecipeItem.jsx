/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Loader from 'react-loader-spinner';
import Modal from './Modal';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const RecipeItem = ({
  loading,
  image,
  title,
  cuisineType,
  dishType,
  ingredients,
  calories,
}) =>
  loading ? (
    <div className="flex items-center justify-center p-2 m-2 space-x-10 space-y-10 bg-blue-200">
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={9000} // 3 secs
      />
    </div>
  ) : (
    <>
      <Modal ingredients={ingredients} />
      <div className="flex flex-col items-center justify-start p-5 mt-5 bg-blue-200 rounded-lg">
        <h1 className="font-mono text-xl font-bold tracking-widest text-center">
          {title}
        </h1>
        <h2 className="mb-5 text-sm">
          <span className="font-bold text-gray-500">Calories:</span>{' '}
          <span className="font-mono">{Math.round(calories) || 'N/A'}</span>
        </h2>
        <img
          src={image}
          alt="image not available"
          className="border-2 border-gray-400 rounded-full shadow-lg"
        />
        <div className="flex w-full mt-5 space-x-1 tracking-widest shadow-lg">
          <div className="w-1/2 p-2 px-3 bg-blue-400 border-2 border-blue-600 rounded-md">
            <span className="font-bold">Cuisine:</span>{' '}
            <span className="font-mono capitalize">{cuisineType || 'N/A'}</span>
          </div>
          <div className="w-1/2 p-2 px-3 text-sm bg-blue-400 border-2 border-blue-600 rounded-md">
            <span className="font-bold">Dish:</span>{' '}
            <span className="font-mono capitalize">{dishType || 'N/A'}</span>
          </div>
        </div>
        {/* <div className="w-full text-left ingredients">
        <h1 className="mt-5 font-mono text-xl">Ingredients:</h1>
        <ul>
          {ingredients.length !== 0
            ? ingredients.map((ingredient) => (
                <li key={ingredient} className="text-sm text-gray-600">
                  {ingredient}
                </li>
              ))
            : null}
        </ul>
      </div> */}
      </div>
    </>
  );

export default RecipeItem;
