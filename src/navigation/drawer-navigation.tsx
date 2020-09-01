import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer"

import { NavElement } from "../types/navigation"
import { NavTree } from "../config/navigation-tree"
import { FriendsStackNavigator } from './drawer-friends-stack-navigation'
import { GeneralStackNavigator } from './drawer-general-stack-navigation'
import { HelpStackNavigator } from './drawer-help-stack-navigation'
import { DrawerContent } from '../components/nav-components'

const DrawerNavigator = createDrawerNavigator();

export const DrawerStackNavigator: React.FC<NavElement> = ({
  navigation
}) => {
  return (
    <DrawerNavigator.Navigator
      drawerContent={props => (
        <DrawerContent 
          {...props} 
        />
      )}
      hideStatusBar={false}
      initialRouteName={NavTree.DrawerBranch.GeneralStackRudiment.path}
    >
      <DrawerNavigator.Screen
        name={NavTree.DrawerBranch.GeneralStackRudiment.path}
        component={GeneralStackNavigator} 
      />
      <DrawerNavigator.Screen
        name={NavTree.DrawerBranch.FriendsStackRudiment.path}
        component={FriendsStackNavigator} 
      />
      <DrawerNavigator.Screen
        name={NavTree.DrawerBranch.HelpStackRudiment.path}
        component={HelpStackNavigator} 
      />
    </DrawerNavigator.Navigator>
  )
}