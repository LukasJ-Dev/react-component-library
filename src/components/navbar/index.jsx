import React from 'react'
import * as S from './style'
import {theme} from "../../styles/themes";

export default function Navbar({title, items, color=theme.colors.primary}) {


  return (
    <S.StyledNavbar color={color}>
      <S.NavTitle>
        {title}
      </S.NavTitle>
      <S.NavItems>
        {items.map(item => 
        <S.NavItem key={item.name + item.url}>
          <S.NavLink  href={item.url}>{item.name}</S.NavLink>
        </S.NavItem>)}
      </S.NavItems>
      </S.StyledNavbar>
  )
}
