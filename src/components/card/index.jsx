import React from 'react'
import Button from '../button'
import * as S from './style'

export default function Card({title, secondary, body, buttonText, onClick}) {
  return (
    <S.CardStyle>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardSecondaryText>{secondary}</S.CardSecondaryText>
        <S.CardBodyText>{body}</S.CardBodyText>
        <S.CardAction>
            <Button onClick={onClick}>{buttonText}</Button>
        </S.CardAction>
    </S.CardStyle>
  )
}


