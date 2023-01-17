import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatsScreen } from '../screens/ChatsScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ChatsScreen" component={ ChatsScreen } />
      <Tab.Screen name="ContactsScreen" component={ ContactsScreen } />
      <Tab.Screen name="AlbumsScreen" component={ AlbumsScreen } />
    </Tab.Navigator>
  );
}
