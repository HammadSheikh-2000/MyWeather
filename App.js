import { Provider } from 'react-redux';
import store from './components/redux/storeRedux';
import StackNav from './components/Navigation/StackNavigation';

export default function App() {
  return (
    <Provider store={store}>
    <StackNav/>
    </Provider>
  );
}
