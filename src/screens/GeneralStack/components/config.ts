import { ChoiceItemProps } from "./types";

export const ChoiceList: Array<Omit<ChoiceItemProps, 'onPress'> & { path: string }> = [
  {
    id: 'choice-item-1',
    title: 'Random',
    path: 'some-path-to-screen',
    iconName: 'ios-aperture-sharp'
  },
  {
    id: 'choice-item-2',
    title: 'Vote',
    path: 'some-path-to-screen',
    iconName: 'ios-newspaper-sharp'
  },
  {
    id: 'choice-item-3',
    title: 'RPS',
    path: 'some-path-to-screen',
    iconName: 'logo-firebase'
  },
  {
    id: 'choice-item-4',
    title: 'Last of Us',
    path: 'some-path-to-screen',
    iconName: 'pulse'
  }
]