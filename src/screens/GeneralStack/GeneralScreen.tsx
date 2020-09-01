import React from 'react'
import styled from 'styled-components/native'

import { GeneralScreenProps } from '../../types/navigation'
import { FLEX } from '../../utils'
import Container from '../../components/screen-components/Container'
import { NavTree } from '../../config/navigation-tree'
import { ChoiceItem } from './components'
import { ChoiceList } from './components/config'

const GeneralScreen: React.FC<GeneralScreenProps> = ({
  navigation
}) => {

  const NavEvents = {
    to: (path: string) => {
      /* navigation.navigate(path) */
    }
  }

  return (
    <Container 
      headerProps={{
        title: NavTree.DrawerBranch.GeneralStackRudiment.title,
        navigation,
        enableMenuButton: true
      }}
      enableBottomController
      scrollable
    >
      <InnerContainer>
        {
          ChoiceList.map(choice => (
            <ChoiceItem 
              {...choice}
              onPress={() => NavEvents.to(choice.path)}
            />
          ))
        }
        {
          ChoiceList.map(choice => (
            <ChoiceItem 
              {...choice}
              onPress={() => NavEvents.to(choice.path)}
            />
          ))
        }
      </InnerContainer>
    </Container>
  )
}

const InnerContainer = styled.View`
  width: 100%;
  padding: 4% 4% 7%;
  height: 100%;
  ${FLEX('row', 'center', 'space-between', 'wrap')}
`

export default GeneralScreen