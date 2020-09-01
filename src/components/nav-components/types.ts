import { DrawerContentOptions, DrawerContentComponentProps } from "@react-navigation/drawer";

export type DrawerContentProps = DrawerContentComponentProps<DrawerContentOptions>

export interface DrawerContentItemProps {
  title: string,
  iconName: string,
  onPress: () => void
}

export interface DrawerIconProps {
  name: string
}