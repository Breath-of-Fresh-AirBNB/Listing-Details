/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';

const Listings = ({ searchResults }) => (
  <div className="Listings">
    { searchResults.map((home) => (
      <div className="home" key={home.home}>
        <b id="title">{home.title}</b>
        <br />
        <div className="infoBar">
          <b id="ratingLocation">⭐ {home.rating} ・ {home.location}</b>
          <div id="shareSave">
            <button id="share" className="btn btn-outline-success" type="submit">📤 Share</button>
            <button id="save" className="btn btn-outline-success" type="submit">❤️ Save</button>
          </div>
        </div>
        <div id="photos">
          <img className="img-fluid" id="p1" alt="1" src={home.photoUrls[0]} />
          <img className="img-fluid" id="p2" alt="2" src={home.photoUrls[1]} />
          <img className="img-fluid" id="p3" alt="3" src={home.photoUrls[2]} />
          <img className="img-fluid" id="p4" alt="4" src={home.photoUrls[3]} />
          <img className="img-fluid" id="p5" alt="5" src={home.photoUrls[4]} />
          <button id="allPhotos" className="btn btn-outline-success" type="submit">Show all photos</button>
        </div>
      </div>
    ))}
  </div>
);

export default Listings;
