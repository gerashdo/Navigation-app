import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { BasicLateralMenu } from './src/navigators/BasicLateralMenu';
import { LateralMenu } from './src/navigators/LateralMenu';
import { AuthProvider } from './src/context/authContext';
// import { StackNavigator } from './src/navigators/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/* <BasicLateralMenu /> */}
        <LateralMenu />
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

export default App