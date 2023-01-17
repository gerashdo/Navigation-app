import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TabScreen1 } from '../screens/TabScreen1';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appThema';
import { Platform, Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';

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
                        iconName='T1'
                        break
                    case 'TabScreen2':
                        iconName='T1'
                        break
                    case 'Stack':
                        iconName='T1'
                        break
                }

                return <Text style={{ color }}>{ iconName }</Text>
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
                        iconName='T1'
                        break
                    case 'TabScreen2':
                        iconName='T1'
                        break
                    case 'Stack':
                        iconName='T1'
                        break
                }

                return <Text style={{ color }}>{ iconName }</Text>
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
