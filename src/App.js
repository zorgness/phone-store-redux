import './App.css';
import PhoneContainer from './components/PhoneContainer';
// import TabletComponent from './components/TabletComponent';
import TvComponent from './components/TvContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  return (

    <Provider store={store}>
    <div className="section-one">



        <PhoneContainer warning={"out of stock"} />
        {/* <TabletComponent /> */}
        <TvComponent warning={"out of stock"} />



    </div>
    </Provider>
  );
}





export default App;
