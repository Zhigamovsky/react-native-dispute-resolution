import React, { useState, useContext, useMemo } from 'react'
import { 
  DrawerContentScrollView,
  DrawerNavigationProp,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer'
import styled from 'styled-components/native'

import { DrawerContentProps } from "./types"
import { COLORS } from '../../utils'
import { DrawerContentItem } from './DrawerContentItem'
import { Divider } from '../form-components'
import { NavTree } from '../../config/navigation-tree'

export const DrawerContent: React.FC<DrawerContentProps> = props => {
  
  const Events = {
    toGeneral: () => {
      props.navigation.navigate(NavTree.DrawerBranch.GeneralStackRudiment.path)
    },
    toFriends: () => {
      props.navigation.navigate(NavTree.DrawerBranch.FriendsStackRudiment.path)
    },
    toHelp: () => {
      props.navigation.navigate(NavTree.DrawerBranch.HelpStackRudiment.path)
    },
    exit: () => {
      props.navigation.navigate(NavTree.AuthorizationBranch.AuthorizationFetus.path)
    }
  }
  

  return (
    <DrawerContentScrollView 
      {...props}
      style={{
        backgroundColor: COLORS.main
      }}
    >
      <Divider height={10} />
      <DrawerContentItem 
        title='Главная'
        iconName='home-outline'
        onPress={Events.toGeneral}
      />
      <Divider height={10} />
      <DrawerContentItem 
        title='Друзья'
        iconName='md-people-sharp'
        onPress={Events.toFriends}
      />
      <Divider height={10} />
      <DrawerContentItem 
        iconName='md-help-buoy-outline'
        title='Помощь'
        onPress={Events.toHelp}
      />
      <Divider height={10} />
      <DrawerContentItem 
        iconName='ios-exit'
        title='Выйти'
        onPress={Events.exit}
      />
    </DrawerContentScrollView>
  )
}