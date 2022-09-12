import { configureStore} from "redux";
import phoneReducer from "../redux/phone/reducerPhone"

const store = configureStore(phoneReducer);

export default store;
