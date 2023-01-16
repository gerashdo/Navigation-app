
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { appStyles } from '../theme/appThema'

interface Props extends StackScreenProps<any,any>{}

export const Page2Screen = ( { navigation }: Props ) => {
  return (
    <View style={ appStyles.globalMargin }>
        <Text>
            Page2Screen
        </Text>
        <Button 
          title='Page3Screen'
          onPress={ () => navigation.navigate('Page3Screen') }
        />
    </View>
  )
}
