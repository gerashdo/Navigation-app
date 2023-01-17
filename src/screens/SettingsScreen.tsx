
import React from 'react'
import { Text, View } from 'react-native'
import { appStyles } from '../theme/appThema'

export const SettingsScreen = () => {
  return (
    <View style={ appStyles.globalMargin }>
        <Text style={ appStyles.title }>
            SettingsScreen
        </Text>
    </View>
  )
}
