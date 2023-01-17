import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatsScreen } from '../screens/ChatsScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { colors } from '../theme/appThema';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{ backgroundColor: 'white'}}
        screenOptions={ ({ route }) => ({
            tabBarShowIcon: true,
            tabBarPressColor: colors.primary,
            tabBarIndicatorStyle: {
                backgroundColor: colors.primary
            },
            tabBarStyle: {
                elevation: 0,
                shadowColor: 'transparent'
            },
            tabBarIcon: ({ focused, color }) => {
                let iconName = ''
                switch( route.name ){
                    case 'ChatsScreen':
                        iconName='Ch'
                        break
                    case 'ContactsScreen':
                        iconName='Co'
                        break
                    case 'AlbumsScreen':
                        iconName='Al'
                        break
                }

                return <Text style={{ color }}>{ iconName }</Text>
            }
        })}
    >
      <Tab.Screen name="ChatsScreen" options={{ tabBarLabel: 'Chats' }} component={ ChatsScreen } />
      <Tab.Screen name="ContactsScreen" options={{ tabBarLabel: 'Contactos' }} component={ ContactsScreen } />
      <Tab.Screen name="AlbumsScreen" options={{ tabBarLabel: 'Albums' }} component={ AlbumsScreen } />
    </Tab.Navigator>
  );
}
