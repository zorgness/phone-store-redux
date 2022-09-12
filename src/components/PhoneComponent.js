import React from 'react'
import Phone from '../images/phone.png'


const PhoneComponent = () => {
  return (
    <div className="container">

      <img src={Phone} alt="phone" />

      <p>Available: <span id="count"></span> </p>

      <button>Buy phone</button>

    </div>
  )
}

export default PhoneComponent
