import React from 'react'
import styled from 'styled-components/native'
import { StyleSheet, Platform } from 'react-native'
import { Header as NativeHeader } from 'react-native-elements'

import { FONT, isDeviceSize } from '../../utils'
import { HeaderPageProps } from './types'
import * as Buttons from '../../components/navbuttons-components'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { COLORS } from '../../utils/css'

type DrawerNavProp = DrawerNavigationProp<any>

const Header: React.FC<HeaderPageProps> = ({
  title, 
  navigation,
  enableBackButton = false,
  enableMenuButton = false,
}) => (
  // <Wrapper>
    <NativeHeader
      statusBarProps={{
        barStyle: 'light-content',
        backgroundColor: COLORS.secondary,
        animated: true
      }}
      containerStyle={header}
      centerComponent={<Title>{title}</Title>}
      leftComponent={
        enableBackButton 
          ? <Buttons.Back onPress={navigation.goBack} /> :
        enableMenuButton && (navigation as DrawerNavProp).openDrawer
          ? <Buttons.Menu onPress={(navigation as DrawerNavProp).openDrawer} /> : <></>
      }
    />
  // </Wrapper>
)

const { header } = StyleSheet.create({
  header: {
    backgroundColor: COLORS.fifthparty,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  }
})

const Wrapper = styled.View`
  width: 100%;
  elevation: 2;
  box-shadow: 0px 1px 1px #00000019;
  ${Platform.OS === 'ios' ? `
    background: #FFFFFF00;
    margin-bottom: 0.5px;
  ` : ``}
`

const Title = styled.Text`
  margin-top: 5px;
  ${FONT('Bold', isDeviceSize.select({
    s: 16,
    _default: 18
  }), COLORS.mainFont)}
`

export default Header;