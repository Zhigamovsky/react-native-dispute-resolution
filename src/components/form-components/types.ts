import { TouchableOpacityProperties, ViewStyle, TextStyle } from "react-native";

export interface DividerProps {
  height?: number | string,
  width?: number | string,
  background?: string
}

export type TButtonTemplateVariants = 'fill-yellow' | 'fill-grey';

export type TButtonTemplate = {
  slug: TButtonTemplateVariants,
  backgroundColor: string,
  fontColor: string
}

export type TButtonTemplates = {
  [mode in TButtonTemplateVariants]: TButtonTemplate
}

export interface IButtonStyledProps {
  height?: number,
  heightUnit?: 'px' | '%',
  width?: number,
  widthUnit?: 'px' | '%',
  template?: TButtonTemplateVariants,
  roundedValues?: [number, number, number, number]
}

export interface IButtonProps extends IButtonStyledProps {
  title: string,
  onPress: () => void,
  nativeProperties?: TouchableOpacityProperties,
  containerStyle?: ViewStyle,
  titleStyle?: TextStyle
}