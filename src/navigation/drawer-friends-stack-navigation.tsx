import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import { NavElement } from "../types/navigation"
import { NavTree } from "../config/navigation-tree"
import * as Screens from './../screens/FriendsStack'

const StackNavigator = createStackNavigator();

export const FriendsStackNavigator: React.FC<NavElement> = ({
  navigation
}) => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={NavTree.DrawerBranch.FriendsStackRudiment.path}
    >
      <StackNavigator.Screen
        name={NavTree.DrawerBranch.FriendsStackRudiment.path}
        component={Screens.Friends} 
      />
    </StackNavigator.Navigator>
  )
}