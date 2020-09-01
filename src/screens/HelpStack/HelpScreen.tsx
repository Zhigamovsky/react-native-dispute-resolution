import React from 'react'
import styled from 'styled-components/native'

import { HelpScreenProps } from '../../types/navigation'
import { FLEX } from '../../utils'
import Container from '../../components/screen-components/Container'
import { NavTree } from '../../config/navigation-tree'

const HelpScreen: React.FC<HelpScreenProps> = ({
  navigation
}) => {
  return (
    <Container 
      headerProps={{
        title: NavTree.DrawerBranch.HelpStackRudiment.title,
        navigation,
        enableMenuButton: true
      }}
    >
      <InnerContainer />
    </Container>
  )
}

const InnerContainer = styled.View`
  width: 100%;
  height: 100%;
  ${FLEX('column')}
`

export default HelpScreen