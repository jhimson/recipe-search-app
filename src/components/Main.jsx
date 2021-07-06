import React, { useState } from 'react';
import Axios from 'axios';
// ! Components
import SearchBar from './SearchBar';
// !-------------------------------->

const Main = () => {
  const [recipes, setRepices] = useState(null);
  const submitSearch = async (word) => {
    console.log(word);
    const { data } = await Axios.get(``);
  };
  return (
    <div className="h-screen">
      <SearchBar submitSearch={submitSearch} />
    </div>
  );
};
export default Main;
