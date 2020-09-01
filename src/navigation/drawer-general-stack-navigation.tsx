import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import { NavElement } from "../types/navigation"
import { NavTree } from "../config/navigation-tree"
import * as Screens from './../screens/GeneralStack'

const StackNavigator = createStackNavigator();

export const GeneralStackNavigator: React.FC<NavElement> = ({
  navigation
}) => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={NavTree.DrawerBranch.GeneralStackRudiment.path}
    >
      <StackNavigator.Screen
        name={NavTree.DrawerBranch.GeneralStackRudiment.path}
        component={Screens.General} 
      />
    </StackNavigator.Navigator>
  )
}