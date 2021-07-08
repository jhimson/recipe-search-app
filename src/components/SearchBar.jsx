/* eslint-disable react/button-has-type */
import React, { useState, useRef, useEffect } from 'react';

const SearchBar = ({ submitSearch }) => {
  const [searchBar, setSearchBar] = useState('');
  const searchInput = useRef(null);

  useEffect(() => {
    searchInput.current.focus();
  }, []);
  return (
    <div className="flex items-center justify-center pt-5">
      <div className="w-auto px-4 py-2 text-center bg-gray-200 border-2 border-gray-300 rounded-lg">
        <div className="flex items-center justify-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            value={searchBar}
            onChange={(e) => setSearchBar(e.target.value)}
            className="p-2 border-2 rounded-lg outline-none focus:border-blue-300"
            ref={searchInput}
          />
          <button
            type="button"
            onClick={(e) => {
              submitSearch(searchBar);
              setSearchBar('');
            }}
            className="px-2 py-2 rounded-full focus:outline-none hover:bg-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
