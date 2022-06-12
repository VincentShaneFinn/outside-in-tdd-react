import {RestaurantScreen} from './components/RestaurantScreen';
import {Provider} from 'react-redux';
import store from './store';

export default function App() {
  return (<div>
    <Provider store={store}>
      <RestaurantScreen />
    </Provider>
  </div>);
}