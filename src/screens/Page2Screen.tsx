
import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { appStyles } from '../theme/appThema'

interface Props extends StackScreenProps<any,any>{}

export const Page2Screen = ( { navigation }: Props ) => {

  useEffect(() => {
    navigation.setOptions({
      title: "Hola mundo",
      headerBackTitle: ''
    })
  }, [])
  

  return (
    <View style={ appStyles.globalMargin }>
        <Text style={ appStyles.title }>
            Page2Screen
        </Text>
        <Button 
          title='Page3Screen'
          onPress={ () => navigation.navigate('Page3Screen') }
        />
    </View>
  )
}
