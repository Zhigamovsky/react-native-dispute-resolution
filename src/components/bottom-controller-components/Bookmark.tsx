import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Animated, Easing, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { BookmarkProps, BookmarkAnimationState, StartAnimationEffectFunc } from './types'
import { COLORS, FLEX } from '../../utils'
import { BOTTOM_CONTROLLER } from '../../config/dimensions'
import { SheetFLEX } from '../../utils/css'

export const Bookmark: React.FC<BookmarkProps> = ({
  state,
  onChangeState: onChangeStateCallback
}) => {
  const ANIMATION_TIMING: number = 1500
  const [animations] = useState<BookmarkAnimationState>({
    translateYArrowDown: new Animated.Value(-25),
    translateYArrowUp: new Animated.Value(0),
    opacityArrowDown: new Animated.Value(0),
    opacityArrowUp: new Animated.Value(1)
  })

  const startAnimationEffect: StartAnimationEffectFunc = (
    toValue, 
    animatedValue, 
    duration = ANIMATION_TIMING,
    easing = Easing.elastic(1.5)
  ) => {
    Animated.timing(
      animatedValue, {
        toValue,
        duration,
        easing,
        useNativeDriver: true
      }
    ).start()
  }

  const AnimationEffects = {
    slideUp: () => {
      startAnimationEffect(0, animations.translateYArrowDown)
      startAnimationEffect(-25, animations.translateYArrowUp)
      startAnimationEffect(1, animations.opacityArrowDown, ANIMATION_TIMING / 2)
      startAnimationEffect(0, animations.opacityArrowUp, ANIMATION_TIMING / 2)
    },
    slideDown: () => {
      startAnimationEffect(25, animations.translateYArrowDown)
      startAnimationEffect(0, animations.translateYArrowUp)
      startAnimationEffect(0, animations.opacityArrowDown, ANIMATION_TIMING / 2)
      startAnimationEffect(1, animations.opacityArrowUp, ANIMATION_TIMING / 2)
    }
  }

  const onChangeState = () => {
    console.log('pressed')
    onChangeStateCallback(!state)
  }

  useEffect(() => {
    switch (state) {
      case true: AnimationEffects.slideDown(); break;
      case false: AnimationEffects.slideUp(); break;
    }
  }, [state])

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onChangeState}
      containerStyle={touchContainerStyle}
      style={touchStyle}
    >
    {/* <Container 
      activeOpacity={1}
      onPress={onChangeState}
    > */}
      <InnerContainer>
        <Animated.View
          style={[
            commonArrowStyle, {
              transform: [{
                translateY: animations.translateYArrowUp
              }],
              opacity: animations.opacityArrowUp
            }
          ]}
        >
          <Ionicons name='caret-up' size={20} color={'white'} />
        </Animated.View>
        <Animated.View 
          style={[
            commonArrowStyle, {
              transform: [{
                translateY: animations.translateYArrowDown
              }],
              opacity: animations.opacityArrowDown
            }
          ]}
        >
          <Ionicons name='caret-down' size={20} color={'white'} />
        </Animated.View>
      </InnerContainer>
      {/* </Container> */}
    </TouchableOpacity>
  )
}

const { commonArrowStyle, touchContainerStyle, touchStyle } = StyleSheet.create({
  commonArrowStyle: {
    position: 'absolute',
  },
  touchContainerStyle: {
    ...SheetFLEX(),
    height: BOTTOM_CONTROLLER.BOOKMARK.height,
    width: 60,
    zIndex: 10
  },
  touchStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: COLORS.fifthparty,
    height: BOTTOM_CONTROLLER.BOOKMARK.height,
    width: 60,
    marginTop: 0
  }
})

const Container = styled.TouchableOpacity`
  height: ${BOTTOM_CONTROLLER.BOOKMARK.height}px;
  width: 60px;
  margin-top: -10px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: ${COLORS.fifthparty};
  ${FLEX()}
  z-index: 10;
  box-shadow: 0px -1px 4px #353535;
  elevation: 3;
`

const InnerContainer = styled.View`
  overflow: hidden;
  width: 100%;
  height: 100%;
  ${FLEX()}
`