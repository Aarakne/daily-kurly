import { ReactNode } from 'react'
import Logo from '../../assets/kurly.svg'
import styled from '@emotion/styled'
import Link from 'next/link'

interface LayoutProps {
  children: ReactNode
}

const Wrapper = styled.div``

const Top = styled.div`
  width: 100vw;
  height: 40px;
  position: fixed;
  top: 0px;

  padding-left: 15px;

  display: flex;
  align-items: center;

  background-color: #5f0080;
`

const Content = styled.div`
  margin: 40px 0;
`

const Bottom = styled.div`
  width: 100vw;
  height: 40px;
  position: fixed;
  bottom: 0px;

  background-color: #fff;

  border-top: 1px solid #aaa;
`

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Top>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </Top>
      <Content>{children}</Content>
      <Bottom></Bottom>
    </Wrapper>
  )
}

export default Layout
