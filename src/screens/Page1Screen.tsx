
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Button, Text, TouchableOpacity, View } from 'react-native'
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
        <Button 
          title='Ir a persona'
          onPress={ () => navigation.navigate('PersonaScreen', {
            name: 'Pedro',
            id: 1
          })}
        />

        <View style={{
          flexDirection: 'row',
          gap: 10
        }}>
          <TouchableOpacity
            style={{
              ...appStyles.bigButton,
              backgroundColor: '#3DCFE4'
            }}
            onPress={ () => navigation.navigate('PersonaScreen', {
              name: 'Pedro',
              id: 1
            })}
            >
            <Text style={ appStyles.bigButtonText }>Pedro</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              ...appStyles.bigButton,
              backgroundColor: '#067987'
            }}
            onPress={ () => navigation.navigate('PersonaScreen', {
              name: 'Maria',
              id: 2
            })}
            >
            <Text style={ appStyles.bigButtonText }>Maria</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
