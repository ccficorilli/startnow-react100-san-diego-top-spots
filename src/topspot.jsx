import React from 'react';

export default props => (
  <div className='well'>
    <h4>{props.name}</h4>
    <p>{props.description}</p>
      <div className='bucket'>
        <iframe src={ this.showGmaps } />
      </div>
  </div>
);