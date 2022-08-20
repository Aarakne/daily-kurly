import styled from '@emotion/styled'
import { useRouter } from 'next/router'

interface HeaderProps {
  title: string
  left: string
  right: string
  backgroundColor?: string
}

interface WrapperProps {
  backgroundColor?: string
}

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: ${50}px;

  position: fixed;
  overflow: hidden;
  z-index: 999;
  top: 0;

  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  justify-items: center;
  align-items: center;
  padding: 0 3.2vw;

  background-color: ${(props) => props.backgroundColor ?? '#fff'};

  color: ${(props) => (props.backgroundColor ? '#fff' : 'black')};
  font-weight: bold;
`

const Left = styled.div``
const Center = styled.div``
const Right = styled.div``

export default function Header({
  title,
  left,
  right,
  backgroundColor,
}: HeaderProps) {
  const router = useRouter()

  return (
    <Wrapper backgroundColor={backgroundColor}>
      <Left
        onClick={() => {
          router.back()
        }}
      >
        {left}
      </Left>
      <Center>{title}</Center>
      <Right
        onClick={() => {
          router.push('/my-page')
        }}
      >
        {right}
      </Right>
    </Wrapper>
  )
}
