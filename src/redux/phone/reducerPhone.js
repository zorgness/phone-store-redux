import { BUY_PHONE } from "./type";
// import { createSlice } from '@reduxjs/toolkit'

const initialStatePhone = {

  phones: 5
}

const phoneReducer = (state=initialStatePhone, action) => {
  switch (action.type) {
    case BUY_PHONE:
      return {
        ...state,
        phones: state.phones - 1
      }



    default: return initialStatePhone;

  }
}

export default phoneReducer;

// export const phoneSlice = createSlice({
//   name: BUY_PHONE,
//   initialState: {

//       phones: 5
//     },
//     reducers: {
//         decrement: state => state -= 1
//     }

// })

// export const { decrement } = phoneSlice.actions
// export default phoneSlice.reducer
