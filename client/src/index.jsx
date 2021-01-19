/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Listings from './components/listings.jsx';
import Search from './components/search.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listings: [],
      searchResults: [],
    };
    this.searchHandler = this.searchHandler.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  // get data from db
  getAll() {
    axios.get('/listings')
      .then(({ data }) => {
        this.setState(
          { listings: data },
        );
      });
  }

  searchHandler(e) {
    e.preventDefault();
    const query = document.querySelector('#searchBar').value;
    document.querySelector('#searchBar').value = '';

    const matches = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const match of this.state.listings) {
      const location = match.location.toLowerCase();
      if (location.includes(query.toLowerCase())) {
        matches.push(match);
      }
      const title = match.title.toLowerCase();
      if (title.includes(query.toLowerCase())) {
        matches.push(match);
      }
    }
    if (matches.length === 0) {
      alert('Sorry... it appears there are no listings for this location');
    } else {
      this.setState({ searchResults: matches });
    }
  }

  render() {
    return (
      <div>
        <Search searchHandler={this.searchHandler} />
        <Listings searchResults={this.state.searchResults} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
