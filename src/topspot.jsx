import React from 'react';
export default props => (
  <div className='well'>
    <h4>{props.name}</h4>
    <p>{props.description}</p>
    <div className='bucket'>
        <iframe className='map-canvas' src={ 'https://www.google.com/maps/embed/v1/place?q=' 
      + props.location[0] + ',' + props.location[1]
      + '&key=AIzaSyCMVSehMOv4PEXdm7VkncGtCX84wEJId7w' } />
    </div>   
  </div>
);