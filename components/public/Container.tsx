import styled from '@emotion/styled'
import { ReactNode } from 'react'
import Header from './Header'

interface ContainerProps {
  children: ReactNode
  headerTitle: string
}

const Content = styled.div`
  margin-top: 90px;
`

export default function Container({ children, headerTitle }: ContainerProps) {
  return (
    <>
      {headerTitle && <Header title={headerTitle} />}
      <Content>{children}</Content>
    </>
  )
}
