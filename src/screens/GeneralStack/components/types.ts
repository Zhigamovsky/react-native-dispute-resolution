import { Animated, EasingFunction } from "react-native";

export interface ChoiceItemProps {
  id: string,
  title: string,
  iconName: string,
  onPress: (id: ChoiceItemProps['id']) => void,
  delayMounting: number
}

export interface StartCustomAnimationFunc {
  (
    toValue: number, 
    value: Animated.Value, 
    duration?: number, 
    easing?: EasingFunction
  ): void
}

export interface ChoiceItemAnimationState {
  scale: Animated.Value,
  radius: Animated.Value,
  opacity: Animated.Value
}