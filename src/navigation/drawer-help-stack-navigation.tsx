import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import { NavElement } from "../types/navigation"
import { NavTree } from "../config/navigation-tree"
import * as Screens from './../screens/HelpStack'

const StackNavigator = createStackNavigator();

export const HelpStackNavigator: React.FC<NavElement> = ({
  navigation
}) => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={NavTree.DrawerBranch.HelpStackRudiment.path}
    >
      <StackNavigator.Screen
        name={NavTree.DrawerBranch.HelpStackRudiment.path}
        component={Screens.Help} 
      />
    </StackNavigator.Navigator>
  )
}