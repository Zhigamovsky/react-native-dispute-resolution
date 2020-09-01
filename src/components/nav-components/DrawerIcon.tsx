import React from 'react'
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { DrawerIconProps } from "./types"
import { COLORS, FLEX } from '../../utils'

export const DrawerIcon: React.FC<DrawerIconProps> = ({
  name
}) => {
  return (
    <Container>
      <Ionicons 
        style={{ marginRight: -2 }}
        name={name}
        size={25}
        color={'lightgrey'}
      />
    </Container>
  )
}

const Container = styled.View`
  width: 35px;
  height: 35px;
  border-radius: 17.5px;
  box-shadow: 2px 2px 5px black;
  elevation: 3;
  ${FLEX()}
  background: #353535;
`