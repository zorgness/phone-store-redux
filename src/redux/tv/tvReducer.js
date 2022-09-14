import { BUY_TV } from "./type";

const initialStateTv = {

  tvs: 15
}

const tvReducer = (state=initialStateTv, action) => {
  switch (action.type) {
    case BUY_TV:
      return {
        ...state,
        tvs: state.tvs - action.payload
      }



    default: return state;

  }
}

export default tvReducer;
