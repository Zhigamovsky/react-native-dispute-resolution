import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import { NavElement } from "../types/navigation"
import { NavTree } from "../config/navigation-tree"
import * as Screens from './../screens/AuthorizationStack'
import { DrawerStackNavigator } from './drawer-navigation'

const StackNavigator = createStackNavigator();

export const AuthorizationStackNavigator: React.FC<NavElement> = ({
  navigation
}) => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={NavTree.AuthorizationBranch.SwitcherFetus.path}
    >
      <StackNavigator.Screen
        options={{
          gestureEnabled: false,
          
        }}
        name={NavTree.AuthorizationBranch.SwitcherFetus.path}
        component={Screens.Switcher} 
      />
      <StackNavigator.Screen
        name={NavTree.AuthorizationBranch.AuthorizationFetus.path}
        component={Screens.Authorization} 
      />
      <StackNavigator.Screen
        name={NavTree.AuthorizationBranch.RegistrationFetus.path}
        component={Screens.Registration} 
      />
      <StackNavigator.Screen
        name={NavTree.AuthorizationBranch.DrawerRudiment.path}
        component={DrawerStackNavigator} 
      />
    </StackNavigator.Navigator>
  )
}