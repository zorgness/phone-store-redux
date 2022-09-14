import React, {useState} from 'react'
// import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import Phone from '../images/phone.png'
import { buyPhone } from '../redux/phone/actionPhone'

const PhoneComponent = props => {


  const [totalPhone, setTotalPhone] = useState(1)

  const count = useSelector(state => state.phone.phones)
  const dispatch = useDispatch()

  const available = count < 1 ? props.warning : count;

  return (

    <div className="container">

      <img src={Phone} alt="phone" />

      <p>{count > 0 ? 'Available:' : ''}<span id="count">{available}</span></p>

      <div className="btnContainer">

        <button id="btn-phone" onClick={() => dispatch(buyPhone(totalPhone))}>Buy phone</button>

        <input type="text" value={totalPhone} onChange={e => setTotalPhone(e.target.value)} />

      </div>


    </div>
  )
}

export default PhoneComponent


// const mapStateToProps = (state) => {

//   return {
//     phones: state.phone.phones

//   }
// }

// const mapDispatchToProps = (dispatch) => {

//   return {
//     buyPhone: totalPhone => dispatch(buyPhone(totalPhone))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps )(PhoneComponent)
