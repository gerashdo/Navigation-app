import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/authContext';
import { appStyles } from '../theme/appThema';

export const ContactsScreen = () => {

  const { signIn, logout, authState } = useContext( AuthContext )

  return (
    <View style={ appStyles.globalMargin }>
        <Text style={ appStyles.title }>
            ContactsScreen
        </Text>
        {
          authState.isLoggedIn 
          ? <Button 
            title='LogOut'
            onPress={ logout }
          />
          :(
            <Button 
              title='SignIn'
              onPress={ signIn }
            />
          )
        }
    </View>
  )
}
