/**
 * @jest-environment jsdom
 */
/* eslint-disable */
const React = require('react');
const { shallow, mount, render, configure } = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-15');
const { toJson } = require('enzyme-to-json')
import App from '../client/src/components/App.jsx';
import Listings from '../client/src/components/Listings.jsx';
import Search from '../client/src/components/Search.jsx';

const sample = [
  {
      "_id": "6008fe45f8b3093164c1862e",
      "home": 101,
      "title": "Modular Home",
      "location": "Mars",
      "rating": 1,
      "__v": 0,
      "photoUrls": [
          "https://feclistingphotos.s3.us-east-2.amazonaws.com/Mars/101/1.webp",
          "https://feclistingphotos.s3.us-east-2.amazonaws.com/Mars/101/2.webp"
      ]
  }
];

configure({ adapter: new EnzymeAdapter() });

describe("App", () => {
  // it("matches snapshot", () => {
  //   const tree = shallow(<App />);
  //   expect(toJson(tree)).toMatchSnapShot();
  // });
  it("renders with no errors", () => {
    const data = sample;
    const wrapper = mount(<App data={sample} />);
    expect(wrapper.props().data).toEqual(data);
  });
});

describe("Listings", () => {
  it("renders with no errors", () => {
    const searchResults = sample;
    const wrapper = mount(<Listings searchResults={sample} />);
    expect(wrapper.props().searchResults).toEqual(searchResults);
  });
});

describe("Search", () => {
  it("renders with no errors", () => {
    shallow(<Search />);
  });
});
