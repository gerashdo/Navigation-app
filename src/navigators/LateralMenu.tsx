import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { appStyles, colors } from '../theme/appThema';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';


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
      <Drawer.Screen name="Tabs" options={{ title: "Home" }} component={ Tabs } />
      <Drawer.Screen name="SettingsScreen" options={{ title: "Settings" }} component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}

const InnerLateralMenuContent = ( { navigation }: DrawerContentComponentProps ) => {

  return (
    <DrawerContentScrollView>
      {/* Avatar */}
      <View style={ appStyles.avatarContainer }>
        <Image
          style={ appStyles.avatar }
          source={{
            uri: 'https://www.milton.edu/wp-content/uploads/2019/11/avatar-placeholder.jpg'
          }}
        />
      </View>

      {/* Botones */}
      <View style={ appStyles.menuContainer }>
        <TouchableOpacity 
          onPress={ () => navigation.navigate('Tabs')}
          style={{ 
            ...appStyles.menuItem,
            flexDirection: 'row',
            gap: 5,
          
          }}
        >
          <Icon name='compass' size={ 25 } color="black"/>
          <Text style={ appStyles.menuItemText }>
            Navegacion
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={ () => navigation.navigate('SettingsScreen')}
          style={{ 
            ...appStyles.menuItem,
            flexDirection: 'row',
            gap: 5,
          
          }}
        >
          <Icon name='settings' size={ 25 } color="black"/>
          <Text style={ appStyles.menuItemText }>
            Ajustes
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}