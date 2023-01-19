import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/authContext';
import { appStyles } from '../theme/appThema';

export const ContactsScreen = () => {

  const { signIn, authState } = useContext( AuthContext )

  return (
    <View style={ appStyles.globalMargin }>
        <Text style={ appStyles.title }>
            ContactsScreen
        </Text>
        {
          authState.isLoggedIn 
          ? null
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
