import React from 'react'
// import { connect } from 'react-redux'
import Phone from '../images/phone.png'
import { useSelector, useDispatch } from 'react-redux'
import { buyPhone } from '../redux/phone/actionPhone'

const PhoneComponent = () => {

  const count = useSelector(state => state.phones)
  const dispatch = useDispatch()


  return (
    <div className="container">

      <img src={Phone} alt="phone" />

      <p>Available: <span id="count">{count}</span> </p>

      <button onClick={() => dispatch(buyPhone())}>Buy phone</button>

    </div>
  )
}

// const mapStateToProps = (state) => {

//   return {
//     phones: state.phones
//   }
// }

// const mapDispatchToProps = (dispatch) => {

//   return {
//     buyPhone: () => dispatch(buyPhone())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps )(PhoneComponent)

export default PhoneComponent
