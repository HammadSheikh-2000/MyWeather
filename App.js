import { Provider } from 'react-redux';
import store from './components/redux/storeRedux';
import StackNav from './components/Navigation/StackNavigation';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <Provider store={store}>
    <StatusBar barStyle="default"/>
    <StackNav/>
    </Provider>
  );
}
