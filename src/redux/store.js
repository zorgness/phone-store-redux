import { configureStore } from '@reduxjs/toolkit';
import phoneReducer from './phone/phoneReducer';
import tvReducer from './tv/tvReducer';
import commentReducer from './comment/commentReducer';


const store = configureStore({
  reducer: {
    phone: phoneReducer,
     tv: tvReducer,
     comment: commentReducer
   }});

export default store;
