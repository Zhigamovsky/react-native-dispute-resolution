import React from 'react'
import styled from 'styled-components/native'

import { AuthorizationScreenProps } from '../../types/navigation'
import { FLEX } from '../../utils'
import Container from '../../components/screen-components/Container'
import { NavTree } from '../../config/navigation-tree'
import { Button, Divider } from '../../components/form-components'

const AuthorizationScreen: React.FC<AuthorizationScreenProps> = ({
  navigation
}) => {
  return (
    <Container 
      headerProps={{
        title: NavTree.AuthorizationBranch.AuthorizationFetus.title,
        navigation,
        enableBackButton: false
      }}
      // scrollable
    >
      <InnerContainer>
        <Button 
          title='Войти'
          onPress={() => navigation.navigate(NavTree.AuthorizationBranch.DrawerRudiment.path)} 
        />
        <Divider />
        <Button 
          template='fill-grey'
          title='Создать пользователя'
          onPress={() => navigation.navigate(NavTree.AuthorizationBranch.RegistrationFetus.path)} 
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

export default AuthorizationScreen