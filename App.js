import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import redux from './src/configs/redux';
import StackNavigator from './routes/StackNavigator';

const App = () => {
  return (
    <Provider store={redux.store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;