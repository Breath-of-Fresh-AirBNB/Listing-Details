import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    this.getAll();
  }

  // get data from db
  getAll() {
    axios.get('/listings')
      .then(() => {
        this.setState(
        );
      });
  }

  render() {
    return (
      <div>
        FEC Kyle Parry
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
