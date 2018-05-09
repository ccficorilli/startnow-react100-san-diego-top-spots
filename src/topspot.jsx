import React from 'react';

export default props => (
  <div className='well'>
    <h4>{props.name}</h4>
<<<<<<< HEAD
    <p>{props.description}</p>      
        <iframe src={  
              'https://www.google.com/maps/embed/v1/place?q=' 
              + props.location[0] + ',' + props.location[1] 
              + '&key=AIzaSyCMVSehMOv4PEXdm7VkncGtCX84wEJId7w'
              }
        />
      
=======
    <p>{props.description}</p>
    <div className='bucket'>
        <iframe className='map-canvas' src={ 'https://www.google.com/maps/embed/v1/place?q=' 
      + props.location[0] + ',' + props.location[1]
      + '&key=AIzaSyCMVSehMOv4PEXdm7VkncGtCX84wEJId7w' } />
    </div>   
>>>>>>> 5f6737f57ae786ee43a9b79da564f008e7bfecf4
  </div>
);