import React from 'react';
import Tv from '../images/tv.png';

const TvComponent = () => {
  return (
    <div className="container">

    <img src={Tv} alt="phone" />

    <p>Available: </p>

    <button>Buy phone</button>

  </div>
  )
}

export default TvComponent
