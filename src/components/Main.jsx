import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// ! Components
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import Header from './Header';

// !-------------------------------->

const Main = () => {
  const [recipes, setRepices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const submitSearch = async (word) => {
    setIsLoading(true);
    const { data } = await Axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${word}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
    );
    setRepices(data.hits);
    setIsLoading(false);
  };

  return (
    <div>
      <Header />
      <SearchBar submitSearch={submitSearch} />
      <RecipeList list={recipes} loading={isLoading} />
    </div>
  );
};
export default Main;
