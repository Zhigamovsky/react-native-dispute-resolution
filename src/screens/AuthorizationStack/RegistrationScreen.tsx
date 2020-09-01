import React from 'react'
import styled from 'styled-components/native'

import { RegistrationScreenProps } from '../../types/navigation'
import { FLEX } from '../../utils'
import Container from '../../components/screen-components/Container'
import { NavTree } from '../../config/navigation-tree'
import { Button } from '../../components/form-components'

const RegistrationScreen: React.FC<RegistrationScreenProps> = ({
  navigation
}) => {
  return (
    <Container 
      headerProps={{
        title: NavTree.AuthorizationBranch.RegistrationFetus.title,
        navigation,
        enableBackButton: true
      }}
    >
      <InnerContainer>
        <Button 
          template='fill-grey'
          title='Зарегистрироваться'
          onPress={() => navigation.navigate(NavTree.AuthorizationBranch.DrawerRudiment.path)} 
        />
      </InnerContainer>
    </Container>
  )
}

const InnerContainer = styled.View`
  width: 70%;
  height: 100%;
  ${FLEX('column')}
`

export default RegistrationScreen