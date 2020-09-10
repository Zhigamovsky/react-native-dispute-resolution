import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Animated, Easing } from 'react-native'

import { IMenuButtonProps } from './types'
import { COLORS } from '../../utils'

const MenuButton: React.FC<IMenuButtonProps> = ({
  onPress
}) => {
  const ANIMATION_TIMING: number = 500
  const [rotateAnimation] = useState<Animated.Value>(new Animated.Value(0))
  const [opacityAnimation] = useState<Animated.Value>(new Animated.Value(0))

  const startAnimation = (toValue: number, value: Animated.Value) => {
    Animated.timing(
      value, {
        toValue,
        duration: ANIMATION_TIMING,
        easing: Easing.sin,
        useNativeDriver: true
      }
    ).start()
  }

  useEffect(() => {
    startAnimation(1, rotateAnimation)
    startAnimation(1, opacityAnimation)
  }, [])
  
  return (
    <TouchContainer 
      activeOpacity={0.3} 
      onPress={onPress}
    >
      <Animated.View
        style={{
          transform: [{
            rotateZ: rotateAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '90deg']
            })
          }],
          opacity: opacityAnimation
        }}
      >
        <Ionicons 
          name='apps' 
          size={25} 
          color={'white'} 
        />
      </Animated.View>
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