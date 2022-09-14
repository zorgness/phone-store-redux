import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Tv from '../images/tv.png'
import { buyTv} from '../redux/tv/actionTv'

const TvContainer = props => {

  const [totalTv, setTotalTv] = useState(1)

  const count = useSelector(state => state.tv.tvs)

  const dispatch = useDispatch()

  const available = count < 1 ? props.warning : count ;


  return (

    <div className="container">

      <img src={Tv} alt="tv" />


      <p>{count > 0 ? 'Available:' : ''}<span id="count">{available}</span></p>

      <div className="btnContainer">

          <button id="button" onClick={() => dispatch(buyTv(totalTv))}>Buy tv</button>

          <input type="text" value={totalTv} onChange={e => setTotalTv(e.target.value)} />

      </div>


    </div>
  )
}

export default TvContainer
