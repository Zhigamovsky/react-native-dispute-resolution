import React, { useEffect } from 'react'
import styled from 'styled-components/native'

import { SwitcherScreenProps } from '../../types/navigation'
import { FLEX } from '../../utils'
import Container from '../../components/screen-components/Container'
import { NavTree } from '../../config/navigation-tree'

const SwitherScreen: React.FC<SwitcherScreenProps> = ({
  navigation
}) => {

  useEffect(() => {
    navigation.navigate(NavTree.AuthorizationBranch.AuthorizationFetus.path)
  }, [])

  return (
    <Container>
      <InnerContainer />
    </Container>
  )
}

const InnerContainer = styled.View`
  width: 100%;
  
  height: 100%;
  ${FLEX('column')}
` 

// background: blue;

export default SwitherScreen