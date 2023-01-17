import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { BasicLateralMenu } from './src/navigators/BasicLateralMenu';
import { LateralMenu } from './src/navigators/LateralMenu';
// import { StackNavigator } from './src/navigators/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <BasicLateralMenu /> */}
      <LateralMenu />
    </NavigationContainer>
  )
}

export default App