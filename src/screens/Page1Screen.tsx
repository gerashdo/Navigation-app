
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Button, Text, View } from 'react-native'
import { appStyles } from '../theme/appThema'

interface Props extends StackScreenProps<any, any>{}

export const Page1Screen = ({ navigation }: Props) => {

  return (
    <View style={ appStyles.globalMargin }>
        <Text style={ appStyles.title }>
            Page1Screen
        </Text>
        <Button 
          title='Page2Screen'
          onPress={ () => navigation.navigate('Page2Screen')}
        />
    </View>
  )
}
