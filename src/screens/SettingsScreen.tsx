
import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../context/authContext'
import { appStyles } from '../theme/appThema'

export const SettingsScreen = () => {

  const { authState } = useContext( AuthContext )

  return (
    <View style={ appStyles.globalMargin }>
        <Text style={ appStyles.title }>
            SettingsScreen
        </Text>
        <Text>
          { JSON.stringify( authState, null, 4 )}
        </Text>
    </View>
  )
}
