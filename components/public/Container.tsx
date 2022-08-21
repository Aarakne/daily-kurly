import styled from '@emotion/styled'
import { ReactNode } from 'react'
import Header from './Header'

interface ContainerProps {
  children: ReactNode
  headerTitle: string
  headerLeft: string
  headerRight: string
  isHeader: boolean
}

const Content = styled.div`
  margin-top: 50px;
`

export default function Container({
  children,
  headerTitle,
  headerLeft,
  headerRight,
  isHeader,
}: ContainerProps) {
  return (
    <>
      {isHeader && (
        <Header title={headerTitle} left={headerLeft} right={headerRight} />
      )}
      <Content>{children}</Content>
    </>
  )
}
