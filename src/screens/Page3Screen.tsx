
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { appStyles } from '../theme/appThema'

interface Props extends StackScreenProps<any,any>{}

export const Page3Screen = ( { navigation }: Props ) => {
  return (
    <View style={ appStyles.globalMargin }>
        <Text style={ appStyles.title }>
            Page3Screen
        </Text>
        <Button 
          title='Regresar Page2Screen'
          onPress={ () => navigation.pop() }
        />
        <Button 
          title='Regresar al inicio'
          onPress={ () => navigation.popToTop() }
        />
    </View>
  )
}
