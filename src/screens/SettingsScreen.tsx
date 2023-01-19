
import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../context/authContext'
import { appStyles, colors } from '../theme/appThema'

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
        {
          authState.favoriteIcon && (
            <Icon name={ authState.favoriteIcon } size={60} color={ colors.primary } />
          )
        }
    </View>
  )
}
