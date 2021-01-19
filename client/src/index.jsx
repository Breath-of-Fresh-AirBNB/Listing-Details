import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Listings from './components/listings';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listings: [],
    };
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

  render() {
    return (
      <div>
        <h1>FEC Kyle Parry</h1>
        <Listings listings={this.state.listings} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
