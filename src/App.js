import './App.css';
import PhoneContainer from './components/PhoneContainer';
import TvContainer from './components/TvContainer';
import CommentContainer from './components/CommentContainer';
import UserComponent from './components/UserComponent';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {

  return (

    <Provider store={store}>
      <div className="section-one">

          <PhoneContainer warning={"out of stock"} />

          <TvContainer warning={"out of stock"} />

          <UserComponent />

          <CommentContainer />

      </div>
    </Provider>
  );
}





export default App;
