/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';

const Search = ({ searchHandler }) => (
  <nav id="nav" className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <img alt="Airbnb logo" id="logo" src="https://dwglogo.com/wp-content/uploads/2015/12/Airbnb-Symbol.png" />
      <form className="d-flex" onSubmit={searchHandler}>
        <input id="searchBar" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      </form>
      <div className="right">
        <button id="hostLink" className="btn btn-outline-success" type="submit">Become a host</button>
        <button id="region" className="btn btn-outline-success" type="submit"></button>
        <button id="loginLink" className="btn btn-outline-success" type="submit"></button>
      </div>
    </div>
  </nav>
);

export default Search;
