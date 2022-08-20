import styled from '@emotion/styled'
import { ReactNode } from 'react'
import Header from './Header'

interface ContainerProps {
  children: ReactNode
  headerTitle: string
  headerLeft: string
  headerRight: string
  headerBackgroundColor?: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  background-color: white;

  margin-top: 50px;
`

export default function Container({
  children,
  headerTitle,
  headerLeft,
  headerRight,
  headerBackgroundColor,
}: ContainerProps) {
  return (
    <Wrapper>
      <Header
        title={headerTitle}
        left={headerLeft}
        right={headerRight}
        backgroundColor={headerBackgroundColor}
      />
      <Content>{children}</Content>
    </Wrapper>
  )
}
