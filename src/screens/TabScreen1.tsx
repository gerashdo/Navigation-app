
import React from 'react'
import { Text, View } from 'react-native'
import { appStyles } from '../theme/appThema'
import Icon from 'react-native-vector-icons/Ionicons';


export const TabScreen1 = () => {
  return (
    <View style={ appStyles.globalMargin }>
        <Text style={ appStyles.title }>
            Icons
        </Text>
        <Text>
          <Icon name="rocket" size={60} color="#900" />
          <Icon name="arrow-back-circle" size={60} color="#900" />
          <Icon name="chatbubble-ellipses" size={60} color="#900" />
        </Text>
    </View>
  )
}
