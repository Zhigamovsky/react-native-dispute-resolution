import React, { useState } from 'react'
import styled from 'styled-components/native'

import { BottomControllerProps } from './types'
import { BOTTOM_CONTROLLER } from '../../config/dimensions'

import * as Self from '../bottom-controller-components'
import { COLORS, FLEX } from '../../utils'

export const BottomController: React.FC<BottomControllerProps> = ({
  
}) => {
  const [isCollapsed, toggleCollapsed] = useState<boolean>(true)

  return (
    <Container isCollapsed={isCollapsed}>
      <Self.Bookmark 
        state={isCollapsed} 
        onChangeState={toggleCollapsed}
      />
      
      <CollapsedContainer isCollapsed={isCollapsed}>
        <List>
          
        </List>
      </CollapsedContainer>
    </Container>
  )
}

const Container = styled.View<{
  isCollapsed: boolean
}>`

  background: #35353500;
  ${FLEX('column')}
  ${({isCollapsed}) => isCollapsed ? `
    height: ${BOTTOM_CONTROLLER.COLLAPSED.height}px;
    margin-top: -${BOTTOM_CONTROLLER.BOOKMARK.height + 5}px;
  ` : `
    height: ${BOTTOM_CONTROLLER.EXPANDED.height}px;
    margin-top: -${BOTTOM_CONTROLLER.BOOKMARK.height + 5}px;
  `}
`

const List = styled.View`
  height: ${BOTTOM_CONTROLLER.CONTROLLER.height}px;
  width: 100%;
  background: ${COLORS.fifthparty};
  box-shadow: 0px -3px 5px #353535;
  elevation: 3;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`

// border: 0px solid #888;
//   border-top-width: 2px;
//   border-left-width: 2px;
//   border-right-width: 2px;
//   border-top-left-radius: 25px;
//   border-top-right-radius: 25px;

const CollapsedContainer = styled.View<{
  isCollapsed: boolean
}>`
  width: 100%;
  ${({isCollapsed}) => isCollapsed ? `
    height: 0;
  ` : `
    height: ${BOTTOM_CONTROLLER.CONTROLLER.height}px;
  `}
`