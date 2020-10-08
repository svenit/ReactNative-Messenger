import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import redux from './src/configs/redux';
import AppStackNavigator from './routes/AppStackNavigator';

console.disableYellowBox = true;

const App = () => {
  return (
    <Provider store={redux.store}>
      <NavigationContainer>
        <AppStackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;