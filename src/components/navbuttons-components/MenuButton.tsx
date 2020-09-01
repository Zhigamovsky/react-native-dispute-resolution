import React from 'react'
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { IMenuButtonProps } from './types'
import { COLORS } from '../../utils'

const MenuButton: React.FC<IMenuButtonProps> = ({
  onPress
}) => {
  return (
    <TouchContainer 
      activeOpacity={0.3} 
      onPress={onPress}
    >
      <Ionicons 
        name='apps' 
        size={25} 
        color={'white'} 
      />
    </TouchContainer>
  )
}
const TouchContainer = styled.TouchableOpacity`
  padding: 0 10px 0 10px;
`;

const Image = styled.Image`
  height: 32px;
  width: 32px;
  resize-mode: contain;
`;

export default MenuButton;