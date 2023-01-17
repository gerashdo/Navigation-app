import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatsScreen } from '../screens/ChatsScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { colors } from '../theme/appThema';
import Icon from 'react-native-vector-icons/Ionicons';

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
                
                switch( route.name ){
                    case 'ChatsScreen':
                        return <Icon name='logo-whatsapp' size={ 20 } color={ color }/>
                    case 'ContactsScreen':
                        return <Icon name='people' size={ 20 } color={ color }/>
                    case 'AlbumsScreen':
                        return <Icon name='podium' size={ 20 } color={ color }/>
                    default:
                        return <Icon name='alert-circle' size={ 20 } color={ color }/>
                }
            }
        })}
    >
      <Tab.Screen name="ChatsScreen" options={{ tabBarLabel: 'Chats' }} component={ ChatsScreen } />
      <Tab.Screen name="ContactsScreen" options={{ tabBarLabel: 'Contactos' }} component={ ContactsScreen } />
      <Tab.Screen name="AlbumsScreen" options={{ tabBarLabel: 'Albums' }} component={ AlbumsScreen } />
    </Tab.Navigator>
  );
}
