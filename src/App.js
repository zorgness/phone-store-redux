import './App.css';
import PhoneContainer from './components/PhoneContainer';
import TvContainer from './components/TvContainer';
import CommentContainer from './components/CommentContainer';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {

  return (

    <Provider store={store}>
      <div className="section-one">

          <PhoneContainer warning={"out of stock"} />

          <TvContainer warning={"out of stock"} />

          <CommentContainer />

      </div>
    </Provider>
  );
}





export default App;
