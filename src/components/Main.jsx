import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// ! Components
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
// !-------------------------------->

const Main = () => {
  const [recipes, setRepices] = useState([]);
  const submitSearch = async (word) => {
    console.log(word);
    const { data } = await Axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${word}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
    );
    setRepices(data.hits);
  };

  return (
    <div className="h-screen">
      <SearchBar submitSearch={submitSearch} />
      <RecipeList list={recipes} />
    </div>
  );
};
export default Main;
