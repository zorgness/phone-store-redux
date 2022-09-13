import { configureStore } from '@reduxjs/toolkit'
import phoneReducer from './phone/reducerPhone'

const store = configureStore({
  reducer:  phoneReducer
  });

export default store;
