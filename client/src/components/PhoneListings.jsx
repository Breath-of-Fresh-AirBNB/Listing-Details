/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';

const PhoneListings = ({ searchResults }) => (
  <div className="Listings">
    { searchResults.map((home) => (
      <div className="home" key={home.home}>
        <div className="PhotoInfoBar">
          <span id="back"> Homes ・ Airbnb </span>
          <button id="photoShare" type="submit">
            <svg id="upload" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
            </svg>
          </button>
          <button id="photoSave" type="submit">
            <svg id="heart" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </button>
        </div>
        <div id="photoCarousel" className="carousel slide" data-ride="carousel">
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
            <div className="carousel-item">
              <img src={home.photoUrls[3]} className="d-block w-100" alt="4" />
            </div>
            <div className="carousel-item">
              <img src={home.photoUrls[4]} className="d-block w-100" alt="5" />
            </div>
            <div className="carousel-item">
              <img src={home.photoUrls[5]} className="d-block w-100" alt="6" />
            </div>
            <div className="carousel-item">
              <img src={home.photoUrls[6]} className="d-block w-100" alt="7" />
            </div>
            <div className="carousel-item">
              <img src={home.photoUrls[7]} className="d-block w-100" alt="8" />
            </div>
            <div className="carousel-item">
              <img src={home.photoUrls[8]} className="d-block w-100" alt="9" />
            </div>
            <div className="carousel-item">
              <img src={home.photoUrls[9]} className="d-block w-100" alt="10" />
            </div>
            <div className="carousel-item">
              <img src={home.photoUrls[10]} className="d-block w-100" alt="11" />
            </div>
            <div className="carousel-item">
              <img src={home.photoUrls[11]} className="d-block w-100" alt="12" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#photoCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#photoCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </a>
        </div>
        <b id="title">{home.title}</b>
        <br />
        <div classNameName="infoBar">
          <b id="ratingLocation">
            ⭐
            {home.rating}
            ・
            {home.location}
          </b>
        </div>
      </div>
    ))}
  </div>
);

export default PhoneListings;
