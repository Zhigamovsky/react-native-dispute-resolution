import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { ViewStyle } from "react-native";

export interface HeaderPageProps {
  title: string,
  navigation: StackNavigationProp<any> | DrawerNavigationProp<any>,
  enableBackButton?: boolean,
  enableMenuButton?: boolean,
}

interface ContainerPageDefaultProps {
  scrollable?: boolean,
  background?: string,
  containerStyle?: ViewStyle,
  scrollviewStyle?: ViewStyle,
  containerScrollviewStyle?: ViewStyle,
  headerProps?: HeaderPageProps,
  enableBottomController?: boolean
}

export type ContainerPageProps = ContainerPageDefaultProps

export interface BottomControllerProps {
  
}