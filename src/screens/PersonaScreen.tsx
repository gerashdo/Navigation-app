import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { appStyles } from '../theme/appThema'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigators/StackNavigator'

// interface routeParams {
//     name: string;
//     id: number;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{}

export const PersonaScreen = ( { navigation, route }: Props ) => {

    // const params = route.params as routeParams
    const params = route.params

    useEffect(() => {
        navigation.setOptions({
            title: params.name
        })
    }, [])

    return (
        <View style={ appStyles.globalMargin }>
            <Text style={ appStyles.title }>
                {
                    JSON.stringify( params, null, 3)
                }
            </Text>
        </View>
  ) 
}
