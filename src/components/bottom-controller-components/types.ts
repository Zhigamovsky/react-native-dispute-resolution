import { Animated, EasingFunction } from 'react-native'

export interface BookmarkProps {
  state: boolean,
  onChangeState: (state: BookmarkProps['state']) => void
}

export interface BookmarkAnimationState {
  translateYArrowUp: Animated.Value,
  translateYArrowDown: Animated.Value,
  opacityArrowUp: Animated.Value,
  opacityArrowDown: Animated.Value
}

export interface StartAnimationEffectFunc {
  (
    toValue: number, 
    value: Animated.Value, 
    duration?: number, 
    easing?: EasingFunction
  ): void
}