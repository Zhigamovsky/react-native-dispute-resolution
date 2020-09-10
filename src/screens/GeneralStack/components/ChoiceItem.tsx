import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Dimensions, Animated, StyleSheet, Easing, EasingFunction, Vibration } from 'react-native'

import { ChoiceItemProps, StartCustomAnimationFunc, ChoiceItemAnimationState } from "./types"
import { COLORS, FLEX, FONT } from '../../../utils'
import { SheetFLEX } from '../../../utils/css'

export const ChoiceItem: React.FC<ChoiceItemProps> = ({
  id,
  title, 
  iconName,
  delayMounting,
  onPress: onPressCallback
}) => {
  const ANIMATION_TIMING: number = 1500
  const [animation] = useState<ChoiceItemAnimationState>({
    scale: new Animated.Value(0),
    radius: new Animated.Value(100),
    opacity: new Animated.Value(0)
  })

  const startCustomAnimation: StartCustomAnimationFunc = (
    toValue, value, 
    duration = ANIMATION_TIMING, 
    easing = Easing.bounce
  ) => {
    Animated.timing(
      value, {
        toValue,
        duration,
        easing,
        useNativeDriver: true
      }
    ).start()
  }

  const onPress = () => {
    Vibration.vibrate(50)
    onPressCallback(id)
  }

  const AnimationEvents = {
    showAll: (delay?: number) => {
      setTimeout(() => {
        startCustomAnimation(10, animation.radius)
        startCustomAnimation(1, animation.scale)
        startCustomAnimation(1, animation.opacity)
      }, (delay || 0))
    },
    pressInRounde: () => {
      startCustomAnimation(30, animation.radius, ANIMATION_TIMING / 3)
      startCustomAnimation(0.9, animation.scale, ANIMATION_TIMING / 3)
    },
    pressOutRoude: () => {
      startCustomAnimation(10, animation.radius, ANIMATION_TIMING / 5, Easing.elastic(2))
      startCustomAnimation(1, animation.scale, ANIMATION_TIMING / 4, Easing.elastic(2))
    }
  }

  useEffect(() => {
    AnimationEvents.showAll(delayMounting * 1000)
  }, [])

  return (
    <TouchContainer
      onPress={onPress}
      activeOpacity={1}
      onPressIn={AnimationEvents.pressInRounde}
      onPressOut={AnimationEvents.pressOutRoude}
    >
      <Animated.View 
        style={
          [containerStyle, {
            borderRadius: animation.radius,
            transform: [{
              scale: animation.scale.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              })
            }],
            opacity: animation.opacity
          }
        ]}
      >
        <Ionicons name={iconName} size={80} color={COLORS.main} />
        <Title>{title}</Title>
      </Animated.View>
    </TouchContainer>
  )
}

const { containerStyle } = StyleSheet.create({
  containerStyle: {
    backgroundColor: COLORS.fifthparty,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 15,
    width: '100%',
    aspectRatio: 1,
    ...SheetFLEX('column', 'center', 'space-evenly')
  }
})

const TouchContainer = styled.TouchableOpacity`
  width: 48%;
  aspect-ratio: 1;
  margin-bottom: 4%;
`

// width: 48%;
//   margin-bottom: 4%;
//   aspect-ratio: 1;
//   background: ${COLORS.fifthparty};
//   box-shadow: 0px 0px 3px black;
//   elevation: 3;
//   border-radius: 30px;
//   ${FLEX('column', 'center', 'space-evenly')}

const Title = styled.Text`
  ${FONT('Bold', 18, 'white')}
  text-transform: uppercase;
`

// ${Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2}