/**
 * @jest-environment jsdom
 */
/* eslint-disable */
const React = require('react');
const { shallow, configure } = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-15');
import App from '../client/src/components/App.jsx';

configure({ adapter: new EnzymeAdapter() });

it("renders without crashing", () => {
  shallow(<App />);
});