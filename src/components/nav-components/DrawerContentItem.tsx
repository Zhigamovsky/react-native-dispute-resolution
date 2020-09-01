import React from 'react'
import styled from 'styled-components/native'

import { DrawerContentItemProps } from "./types"
import { COLORS, FONT, FLEX } from '../../utils'
import { DrawerIcon } from './DrawerIcon'

export const DrawerContentItem: React.FC<DrawerContentItemProps> = ({
  title,
  iconName,
  onPress
}) => {
  return (
    <Container onPress={onPress}>
      <DrawerIcon name={iconName} />
      <Title>{title}</Title>
    </Container>
  )
}

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: ${COLORS.fifthparty};
  box-shadow: 0px 0px 2px black;
  elevation: 3;
  padding: 0 10px;
  ${FLEX('row', 'center', 'flex-start')}
`

const Title = styled.Text`
  margin-left: 15px;
  ${FONT('Bold', 18, 'white')}
`