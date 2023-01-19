

import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../theme/appThema';

interface Props {
    iconName: string
}

export const TouchableIcon = ({ iconName }: Props) => {
  return (
    <TouchableOpacity
        
    >
        <Icon name={ iconName } size={60} color={ colors.primary } />
    </TouchableOpacity>
  )
}
