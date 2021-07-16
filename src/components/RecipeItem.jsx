/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
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
}) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  return loading ? (
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
      {modalIsVisible ? (
        <Modal
          ingredients={ingredients}
          isOpen={modalIsVisible}
          setIsOpen={setModalIsVisible}
        />
      ) : null}
      <div className="flex flex-col items-center w-3/4 px-5 py-10 my-10 bg-white border-2 border-gray-200 rounded-lg shadow-2xl lg:w-11/12 ">
        <h1 className="font-serif text-xl font-bold tracking-widest text-center">
          {title}
        </h1>
        <h2 className="mb-5 text-sm">
          <span className="font-bold text-gray-500">Calories:</span>{' '}
          <span className="font-mono">{Math.round(calories) || 'N/A'}</span>
        </h2>
        <img
          src={image}
          alt="image not available"
          className="object-cover mb-5 border-2 border-gray-400 rounded-full h-60"
        />
        <div className="flex justify-center w-full mt-5 space-x-1 shadow-lg">
          <div className="w-1/2 p-2 px-2 break-words bg-blue-400 border-2 border-blue-600 rounded-md lg:w-1/2">
            <span className="font-bold">Cuisine:</span>{' '}
            <span className="font-mono capitalize">{cuisineType || 'N/A'}</span>
          </div>
          <div className="w-1/2 p-2 px-3 text-sm break-words bg-blue-400 border-2 border-blue-600 rounded-md lg:w-1/2">
            <span className="font-bold">Dish:</span>{' '}
            <span className="font-mono capitalize">{dishType || 'N/A'}</span>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <button
            onClick={() => setModalIsVisible(true)}
            className="w-1/2 py-2 mt-5 font-semibold bg-white border-2 border-gray-400 rounded-lg shadow-lg lg:w-1/2 hover:bg-gray-400 hover:text-white focus:outline-none hover:border-white"
          >
            View Ingredients
          </button>
        </div>
      </div>
    </>
  );
};

export default RecipeItem;
