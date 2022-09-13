import './App.css';
import PhoneComponent from './components/PhoneComponent';
import TabletComponent from './components/TabletComponent';
import TvComponent from './components/TvComponent';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  return (
    <div className="section-one">
    <Provider store={store}>


        <PhoneComponent warning={"out of stock"} />
        <TabletComponent />
        <TvComponent />


    </Provider>
    </div>
  );
}

export default App;
