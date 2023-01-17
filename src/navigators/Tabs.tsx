import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TabScreen1 } from '../screens/TabScreen1';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appThema';
import { Platform, Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {

    return Platform.OS === 'ios'
        ? <TabIOS />
        : <TabAndroid />
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

export const TabAndroid = ()=>  {
  return (
    <BottomTabAndroid.Navigator
        screenOptions={ ({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: colors.primary,
            tabBarStyle:{
                borderTopColor: colors.primary,
                borderTopWidth: 0,
                elevation: 0,
            },
            tabBarIcon: ({ focused, color }) => {
                let iconName = ''
                switch( route.name ){
                    case 'TabScreen1':
                        iconName = 'caret-up'
                        break
                    case 'TabScreen2':
                        iconName='caret-forward-circle'
                        break
                    case 'Stack':
                        iconName='copy'
                        break
                    default:
                        iconName='alert-circle'
                        break
                    }

                return <Icon name={ iconName } size={ 20 } color={ color }/>
            }
        })}
    >
      <BottomTabAndroid.Screen name="TabScreen1" 
            options={{ tabBarLabel: 'Tab 1' }} 
            component={ TabScreen1 } 
        />
        <BottomTabAndroid.Screen name="TabScreen2" 
            options={{ tabBarLabel: 'Tab 2' }}  
            component={ TopTabsNavigator } 
        />
        <BottomTabAndroid.Screen name="Stack" 
        // options={{ headerShown: false  }}
            options={{ tabBarLabel: 'Stack' }}  
            component={ StackNavigator } 
        />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

export const TabIOS = () => {
  return (
    <BottomTabIOS.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={ ({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: colors.primary,
            tabBarStyle:{
                borderTopColor: colors.primary,
                borderTopWidth: 0,
                elevation: 0,
            },
            tabBarIcon: ({ focused, color, size }) => {
                let iconName = ''
                switch( route.name ){
                    case 'TabScreen1':
                        iconName = 'caret-up'
                        break
                    case 'TabScreen2':
                        iconName='caret-forward-circle'
                        break
                    case 'Stack':
                        iconName='copy'
                        break
                    default:
                        iconName='alert-circle'
                        break
                    }

                return <Icon name={ iconName } size={ 20 } color={ color }/>
            }
        })}
    >
        <BottomTabIOS.Screen name="TabScreen1" 
            options={{ tabBarLabel: 'Tab 1' }} 
            component={ TabScreen1 } 
        />
        <BottomTabIOS.Screen name="TabScreen2" 
            options={{ tabBarLabel: 'Tab 2' }}  
            component={ TopTabsNavigator } 
        />
        <BottomTabIOS.Screen name="Stack" 
        // options={{ headerShown: false  }}
            options={{ tabBarLabel: 'Stack' }}  
            component={ StackNavigator } 
        />
    </BottomTabIOS.Navigator>
  );
}
