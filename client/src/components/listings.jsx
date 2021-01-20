/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';

const Listings = ({ searchResults }) => (
  <div className="Listings">
    { searchResults.map((home) => (
      <div className="home" id={home.home}>
        <b id="title">{home.title}</b>
        <br />
        <b id="Rating">⭐ {home.rating}</b>
        <span>  ・  </span>
        <b id="location">{home.location}</b>
        <button id="share">📤 Share</button>
        <button id="save">❤️ Save</button>
        <div id="photos">
          <img className="p1" alt="1" src={home.photoUrls[0]} />
          <img className="p2" alt="2" src={home.photoUrls[1]} />
          <img className="p3" alt="3" src={home.photoUrls[2]} />
          <img className="p4" alt="4" src={home.photoUrls[3]} />
          <img className="p5" alt="5" src={home.photoUrls[4]} />
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
