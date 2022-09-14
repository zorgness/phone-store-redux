// import { configureStore} from '@reduxjs/toolkit';
import { createStore, combineReducers } from 'redux';
import phoneReducer from './phone/reducerPhone';
import tvReducer from './tv/tvReducer';



const rootReducer = combineReducers(
  {
   phone: phoneReducer,
   tv: tvReducer
  })


const store = createStore(rootReducer);



// const store = configureStore({
//   reducer: {
//     phone: phoneReducer,
//      tv: tvReducer
//    }});

export default store;
