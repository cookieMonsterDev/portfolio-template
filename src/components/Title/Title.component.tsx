import React from 'react'
import { Title } from './Title.styled'
import { TitleProps } from './Title.types'

export const TitleComponent: React.FC<TitleProps> = ({children}) => {
  return (
    <Title>{children}</Title>
  )
}

