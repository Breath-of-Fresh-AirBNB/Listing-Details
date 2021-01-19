/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';

const Search = ({ searchHandler }) => (
  <div className="Nav">
    <img alt="Airbnb logo" id="logo" src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo.png" />
    <input id="searchBar" type="text" placeholder="Start Your Search" />
    <button id="searchButton" onClick={searchHandler}>Go!</button>
    <button id="hostLink">Become A Host</button>
    <button id="loginLink">Login</button>
  </div>
);

export default Search;
