export interface ChoiceItemProps {
  id: string,
  title: string,
  iconName: string,
  onPress: (id: ChoiceItemProps['id']) => void
}