
import React from 'react'
import { Text, View } from 'react-native'
import { appStyles } from '../theme/appThema'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';


export const TabScreen1 = () => {
  return (
    <View style={ appStyles.globalMargin }>
        <Text style={ appStyles.title }>
            Icons
        </Text>
        <Text>
          <TouchableIcon iconName="rocket" />
          <TouchableIcon iconName="arrow-back-circle" />
          <TouchableIcon iconName="chatbubble-ellipses" />
        </Text>
    </View>
  )
}
