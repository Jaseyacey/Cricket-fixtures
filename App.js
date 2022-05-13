import React from 'react';
import MainNavigator from './src/Components/Navigation/MainNavigator';
import {Provider} from 'react-redux';
import configureStore from './Store/configureStore';

const store = configureStore();
console.log('Store:', store);

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
