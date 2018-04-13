import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';


class App extends Component {
  constructor(props) {    
    super(props);
    this.showGmaps = this.showGmaps.bind(this);
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
  showGmaps() {console.log(this.state.location)
              return '"' + 'https://www.google.com/maps/embed/v1/place?q=' 
              + this.state.location[0] + '%2c%20' + this.state.location[1] 
              + '&key=AIzaSyCMVSehMOv4PEXdm7VkncGtCX84wEJId7w' + '"'
              }
                
  render() {
    console.log(this.state.topspots)
    
    return (
      <div className='container'>
        <div className='App'>
          <h2>San Diego Top Spots</h2>
          <p>A list of the top 30 places to see in San Diego, California.</p>
        </div>
        <div className='jumbotron'>
          {/* <pre>{ JSON.stringify(this.state.topspots, null, 2) }</pre> */}
          { this.state.topspots.map(topspot => (
            <TopSpot
              key={ topspot.id }
              name={ topspot.name }
              description={ topspot.description }
              location={ topspot.location }
            />
          )
          )}
        </div>
      </div>
    );
  }
}

export default App;
