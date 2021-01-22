/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';

const PhoneListings = ({ searchResults }) => (
  <div classNameName="Listings">
    { searchResults.map((home) => (
      <div classNameName="home" key={home.home}>
        <div className="PhotoInfoBar">
          <span id="back"> Homes ・ Airbnb </span>
          <button id="photoShare" type="submit">📤</button>
          <button id="photoSave" type="submit">❤️</button>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" />
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" />
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={home.photoUrls[0]} className="d-block w-100" alt="1" />
            </div>
            <div className="carousel-item">
              <img src={home.photoUrls[1]} className="d-block w-100" alt="2" />
            </div>
            <div className="carousel-item">
              <img src={home.photoUrls[2]} className="d-block w-100" alt="3" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </a>
        </div>
        <b id="title">{home.title}</b>
        <br />
        <div classNameName="infoBar">
          <b id="ratingLocation">⭐ {home.rating} ・ {home.location}</b>
        </div>
      </div>
    ))}
  </div>
);

export default PhoneListings;
