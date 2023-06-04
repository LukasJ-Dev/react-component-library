import React from 'react'
import { StyledButton } from './style'
import {theme} from '../../styles/themes';

export default function Button(props) {
  const color = props.color ? props.color : theme.colors.primary;
  return (
    <StyledButton color={color} {...props}>{props.children}</StyledButton>
  )
}
