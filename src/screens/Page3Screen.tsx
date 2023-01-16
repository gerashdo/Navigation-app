
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'

interface Props extends StackScreenProps<any,any>{}

export const Page3Screen = ( { navigation }: Props ) => {
  return (
    <View>
        <Text>
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
