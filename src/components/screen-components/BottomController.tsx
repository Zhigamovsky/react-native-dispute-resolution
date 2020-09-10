import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { StyleSheet, Animated, Easing } from 'react-native'

import { BottomControllerProps } from './types'
import { BOTTOM_CONTROLLER } from '../../config/dimensions'

import * as Self from '../bottom-controller-components'
import { COLORS, FLEX } from '../../utils'
import { SheetFLEX } from '../../utils/css'
import { StartAnimationEffectFunc } from '../bottom-controller-components/types'

export const BottomController: React.FC<BottomControllerProps> = ({
  
}) => {
  const ANIMATION_TIMING: number = 1500
  const [isCollapsed, toggleCollapsed] = useState<boolean>(true)
  const [animationContainerTranslate] = useState<Animated.Value>(new Animated.Value(-10))
  const [animationBackdropOpacity] = useState<Animated.Value>(new Animated.Value(0))
  const [visibilityBackdrop, toggleVisibilityBackdrop] = useState<boolean>(false)
  
  const startAnimationEffect: StartAnimationEffectFunc = (
    toValue, 
    animatedValue, 
    duration = ANIMATION_TIMING,
    easing = Easing.elastic(1)
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
      startAnimationEffect(-40, animationContainerTranslate)
      startAnimationEffect(1, animationBackdropOpacity, ANIMATION_TIMING / 3, Easing.ease)
    },
    slideDown: () => {
      startAnimationEffect(-10, animationContainerTranslate)
      startAnimationEffect(0, animationBackdropOpacity, ANIMATION_TIMING / 3, Easing.ease)
    }
  }

  useEffect(() => {
    switch (isCollapsed) {
      case true: AnimationEffects.slideDown(); break;
      case false: AnimationEffects.slideUp(); break;
    }
  }, [isCollapsed])
  
  useEffect(() => {
    animationBackdropOpacity.addListener(({value}) => {
      if(value > 0.1) toggleVisibilityBackdrop(true)
      else toggleVisibilityBackdrop(false)
    })
  }, [])

  return (
    <GlobalView pointerEvents='box-none'>
      <Animated.View 
        pointerEvents={visibilityBackdrop ? 'auto' : 'box-none'}
        style={[backdropStyle, {
          opacity: animationBackdropOpacity
        }]}
      />
      <Animated.View
        style={[containerStyle, {
          transform: [{ 
            translateY: animationContainerTranslate 
          }]
        }]}
      >
        <Self.Bookmark 
          state={isCollapsed} 
          onChangeState={toggleCollapsed}
        />
        <Animated.View style={innerContainerStyle}>
          <List>
            
          </List>
        </Animated.View> 
      </Animated.View>
    </GlobalView>
  )
}

const { containerStyle, innerContainerStyle, backdropStyle } = StyleSheet.create({
  containerStyle: {
    height: 50,
    bottom: -40,
    position: 'absolute',
    width: '100%',
    ...SheetFLEX('column')
  },
  innerContainerStyle: {
    width: '100%'
  },
  backdropStyle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#00000060'
  }
})

const List = styled.View`
  height: ${BOTTOM_CONTROLLER.CONTROLLER.height}px;
  width: 100%;
  background: ${COLORS.fifthparty};
  box-shadow: 0px -3px 5px #353535;
  elevation: 3;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`

const GlobalView = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  ${FLEX('column', 'center', 'flex-end')}
`