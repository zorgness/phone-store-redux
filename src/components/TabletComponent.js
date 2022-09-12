import React from 'react';
import Tablet from '../images/tablet.png';

const TabletComponent = () => {
  return (
    <div className="container">

    <img src={Tablet} alt="phone" />

    <p>Available: </p>

    <button>Buy tablet</button>

  </div>
  )
}

export default TabletComponent
