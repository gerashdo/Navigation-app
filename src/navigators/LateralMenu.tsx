import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Image, useWindowDimensions, View } from 'react-native';
import { appStyles } from '../theme/appThema';

const Drawer = createDrawerNavigator();

export const LateralMenu = () => {

    const { width } = useWindowDimensions()
    const isLargeScreen = width >= 768;

  return (
    <Drawer.Navigator
        screenOptions={{
            drawerType: isLargeScreen ? 'permanent':'front',
        }}
        drawerContent={ ( props ) => <InnerLateralMenuContent { ...props } /> }
    >
      <Drawer.Screen name="StackNavigator" options={{ title: "Home" }} component={ StackNavigator } />
      <Drawer.Screen name="SettingsScreen" options={{ title: "Settings" }} component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}

const InnerLateralMenuContent = ( props: DrawerContentComponentProps ) => {

  return (
    <DrawerContentScrollView>
      <View style={ appStyles.avatarContainer }>
        <Image
          style={ appStyles.avatar }
          source={{
            uri: 'https://www.milton.edu/wp-content/uploads/2019/11/avatar-placeholder.jpg'
          }}
        />
      </View>
    </DrawerContentScrollView>
  )
}