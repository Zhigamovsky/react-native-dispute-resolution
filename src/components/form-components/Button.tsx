//@ts-ignore
import Ripple from 'react-native-material-ripple'
import React from 'react'
import styled from 'styled-components/native'
import { StyleSheet, Platform } from 'react-native'

import { FLEX, FONT, isDeviceSize, COLORS } from '../../utils'
import { IButtonProps, TButtonTemplates, TButtonTemplate } from './types'

const ButtonTemplates: TButtonTemplates = {
  'fill-yellow': {
    slug: 'fill-yellow',
    backgroundColor: COLORS.fifthparty,
    fontColor: COLORS.mainFont,
  },
  'fill-grey': {
    slug: 'fill-grey',
    backgroundColor: COLORS.secondary,
    fontColor: COLORS.secondaryFont,
  }
}

export const Button: React.FC<IButtonProps> = ({
  title,
  onPress,
  height = isDeviceSize.select({
    s: 40,
    _default: 50
  }),
  heightUnit = 'px',
  width = 100,
  widthUnit = '%',
  template = 'fill-yellow',
  roundedValues = isDeviceSize.select({
    s: [7, 7, 7, 7],
    _default: [10, 10, 10, 10]
  }),
  nativeProperties = {},
  containerStyle = {},
  titleStyle = {},
}) => {
  const { rippleStyle } = StyleSheet.create({
    rippleStyle: {
      elevation: 2,
      shadowRadius: 2,
      shadowOpacity: 0.3,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      padding: isDeviceSize.select({
        s: 7,
        _default: 10
      }),
      backgroundColor: ButtonTemplates[template].backgroundColor,
      width: widthUnit == '%' ? width + widthUnit : width,
      height: heightUnit == '%' ?  height + heightUnit : height,
      borderTopLeftRadius: roundedValues[0],
      borderTopRightRadius: roundedValues[1],
      borderBottomRightRadius: roundedValues[2],
      borderBottomLeftRadius: roundedValues[3],
      flexDirection: 'row',
      justifyContent: 'center'
    }
  })
  return (
    <>
      <Ripple 
        style={[rippleStyle, containerStyle]} 
        rippleSize={500} 
        rippleDuration={300}
        onPress={onPress}
        rippleColor={'#353535FF'}
      >
        <Title 
          style={titleStyle}
          template={ButtonTemplates[template]}
        >{title}</Title>
      </Ripple>
    </>
  )
}

const Title = styled.Text<{
  template: TButtonTemplate
}>`
  ${Platform.OS == 'ios' ? `padding-top: 5px;` : ``}
  text-align: center;
  ${({template}) => FONT('Bold', isDeviceSize.select({
    s: 14,
    _default: 16
  }), template.fontColor)}
`;