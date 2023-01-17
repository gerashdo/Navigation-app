import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabScreen1 } from '../screens/TabScreen1';
import { TabScreen2 } from '../screens/TabScreen2';
import { TabScreen3 } from '../screens/TabScreen3';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabScreen1" component={ TabScreen1 } />
      <Tab.Screen name="TabScreen2" component={ TabScreen2 } />
      <Tab.Screen name="TabScreen3" component={ TabScreen3 } />
    </Tab.Navigator>
  );
}
