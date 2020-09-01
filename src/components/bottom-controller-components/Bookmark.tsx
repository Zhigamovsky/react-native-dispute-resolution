import React from 'react'
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { BookmarkProps } from './types'
import { COLORS, FLEX } from '../../utils'
import { BOTTOM_CONTROLLER } from '../../config/dimensions'

export const Bookmark: React.FC<BookmarkProps> = ({
  state,
  onChangeState
}) => {
  return (
    <Container 
      activeOpacity={1}
      onPress={() => onChangeState(!state)}
    >
      {
        state ? (
          <Ionicons name='caret-up' size={20} color={'white'} />
        ) : (
          <Ionicons name='caret-down' size={20} color={'white'} />
        )
      }
    </Container>
  )
}

export const Container = styled.TouchableOpacity`
  height: ${BOTTOM_CONTROLLER.BOOKMARK.height}px;
  width: 60px;
  margin-top: -10px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  
  background: ${COLORS.fifthparty};
  ${FLEX()}
  z-index: 10;
  box-shadow: 0px -1px 4px #353535;
  elevation: 3;
`
// border-bottom-width: 0;
//   border: 2px solid #888;

//caret-down
//caret-up