/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';

const Listings = ({ searchResults }) => (
  <div className="Listings">
    <h4> The List of Listings:</h4>
    { searchResults.map((home) => (
      <div id={home.home}>
        <div id="home">
          <b id="title">{home.title}</b>
          <br />
          <b id="Rating">⭐ {home.rating}</b>
          <span>  ・  </span>
          <b id="location">{home.location}</b>
          <button id="share">📤 Share</button>
          <button id="save">❤️ Save</button>
          <div id="photos">
            <div id="p1" alt="1" src={home.photoUrls[0]} />
            <div id="p2" alt="2" src={home.photoUrls[1]} />
            <div id="p3" alt="3" src={home.photoUrls[2]} />
            <div id="p4" alt="4" src={home.photoUrls[3]} />
            <div id="p5" alt="5" src={home.photoUrls[4]} />
          </div>
        </div>
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
