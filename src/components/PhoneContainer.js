import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Phone from '../images/phone.png'
import { buyPhone } from '../redux/phone/actionPhone'

const PhoneContainer = props => {


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

export default PhoneContainer
