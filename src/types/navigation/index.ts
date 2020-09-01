import { StackNavigationProp } from '@react-navigation/stack'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { NavigationProp } from '@react-navigation/native';

export type NavigationVariants = 'stack' | 'tabs' | 'drawer' | 'root';

export interface NavigationFetus {
  title: string,
  path: string
}

export interface NavigationRudiment extends NavigationFetus {
  type?: NavigationVariants,
  child?: NavigationFetus['path']
}

export interface NavigationTree {
  Root: {
    AuthorizatinRudiment: NavigationRudiment
  },
  AuthorizationBranch: {
    SwitcherFetus: NavigationFetus,
    AuthorizationFetus: NavigationFetus,
    RegistrationFetus: NavigationFetus,
    DrawerRudiment: NavigationRudiment
  },
  DrawerBranch: {
    GeneralStackRudiment: NavigationRudiment,
    FriendsStackRudiment: NavigationRudiment,
    HelpStackRudiment: NavigationRudiment
  }
}

export enum ENavTypes {
  STACK_ELEMENT = 'NAVIGATION_STACK_ELEMENT',
  DRAWER_ELEMENT = 'NAVIGATION_DRAWER_ELEMENT'
}

export interface Route<Params extends object = {}> {
  key: string,
  name: string,
  params: Params
}

export interface NavElement<Type extends ENavTypes = ENavTypes.STACK_ELEMENT, Params extends object = {}> {
  navigation: 
    Type extends ENavTypes.STACK_ELEMENT 
      ? StackNavigationProp<any> : 
    Type extends ENavTypes.DRAWER_ELEMENT 
      ? DrawerNavigationProp<any> : 
    NavigationProp<any>,
  route: Route<Params>
}

export interface SwitcherScreenProps
  extends NavElement<ENavTypes.STACK_ELEMENT> {

}

export interface AuthorizationScreenProps
  extends NavElement<ENavTypes.STACK_ELEMENT> {

}

export interface RegistrationScreenProps 
  extends NavElement<ENavTypes.STACK_ELEMENT> {
  
}

export interface GeneralScreenProps
  extends NavElement<ENavTypes.DRAWER_ELEMENT> {
  
}
 
export interface FriendsScreenProps
  extends NavElement<ENavTypes.DRAWER_ELEMENT> {
  
}

export interface HelpScreenProps
  extends NavElement<ENavTypes.DRAWER_ELEMENT> {
  
}