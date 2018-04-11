import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }
  componentWillMount() {
    axios
    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));
  }
  render() {
        return (
      <div className='container'>
        <div className='App'>
          <h2>San Diego Top Spots</h2>
          <p>A list of the top 30 places to see in San Diego, California.</p>
        </div>
        <div className='posted'>
        {/* <pre>{ JSON.stringify(this.state.topspots, null, 2) }</pre>*/}

        </div>
      </div>
    );
  }
}

export default App;
