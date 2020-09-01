import React from 'react'
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { ChoiceItemProps } from "./types"
import { Dimensions } from 'react-native'
import { COLORS, FLEX, FONT } from '../../../utils'

export const ChoiceItem: React.FC<ChoiceItemProps> = ({
  id,
  title, 
  iconName,
  onPress
}) => {
  return (
    <Container 
      onPress={() => onPress(id)}
      activeOpacity={0.2}
    >
      <Ionicons name={iconName} size={80} color={COLORS.main} />
      <Title>{title}</Title>
    </Container>
  )
}

const Container = styled.TouchableOpacity`
  width: 48%;
  margin-bottom: 4%;
  aspect-ratio: 1;
  background: ${COLORS.fifthparty};
  box-shadow: 0px 0px 3px black;
  elevation: 3;
  border-radius: 30px;
  ${FLEX('column', 'center', 'space-evenly')}
`;

const Title = styled.Text`
  ${FONT('Bold', 18, 'white')}
  text-transform: uppercase;
`

// ${Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2}