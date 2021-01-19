/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';

const Listings = ({ searchResults }) => (
  <div className="Listings">
    <h4> The List of Listings:</h4>
    { searchResults.map((home) => (
      <div id={home.home}>
        <p id="home">
          <b id="title">{home.title}</b>
          <br />
          <b id="Rating">⭐  </b>
          {home.rating}
          <b id="location">・</b>
          {home.location}
          <button id="share">📤 Share</button>
          <button id="save">❤️ Save</button>
          <span id="photos">
            <p id="p1" alt="1" src={home.photoUrls[0]} />
            <img id="p2" alt="2" src={home.photoUrls[1]} />
            <img id="p3" alt="3" src={home.photoUrls[2]} />
            <img id="p4" alt="4" src={home.photoUrls[3]} />
            <img id="p5" alt="5" src={home.photoUrls[4]} />
          </span>
        </p>
        {/* {home.photoUrls.map((photo, i) => {
          i += 1;
          return (
            <img alt="listing" className={home.home} id={i} src={photo} />
          );
        })} */}
      </div>
    ))}
  </div>
);

export default Listings;
