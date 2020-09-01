import React from 'react'
import styled from 'styled-components/native'
import { Animated } from 'react-native'

import { ContainerPageProps } from './types'
import { FLEX, COLORS } from '../../utils'
import Header from './Header'
import { BottomController } from './BottomController'

const Container: React.FC<ContainerPageProps> = ({
  scrollable = false,
  background = COLORS.thirdparty,
  children,
  containerStyle = {},
  scrollviewStyle = {},
  containerScrollviewStyle = {},
  headerProps,
  enableBottomController = false
}) => (
  <>
    { headerProps && (
      <Header {...headerProps} />
    )}
    <SafeView 
      background={background} 
      style={containerStyle}
    >
    {
      scrollable ? (
        <SafeScrollView
          style={scrollviewStyle}
          contentContainerStyle={containerScrollviewStyle}
        >
          {children}
        </SafeScrollView>
      ) : children
    }
    </SafeView>
    {
      enableBottomController && (
        <BottomController />
      )
    }
  </>
)

const SafeView = styled.SafeAreaView<{
  background: string
}>`
  flex: 1;
  ${FLEX('column', 'center', 'flex-start')}
  ${({background}) => `background-color: ${background};`}
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: 10px;
`;

const SafeScrollView = styled.ScrollView`
  width: 100%;
`;

export default Container;