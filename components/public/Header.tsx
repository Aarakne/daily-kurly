import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import ArrowBackIcon from '../../assets/arrow-back.svg'

interface HeaderProps {
  title: string
  right?: string
}

interface WrapperProps {
  backgroundColor?: string
}

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: ${50}px;

  position: fixed;
  overflow: hidden;
  z-index: 99;
  top: 40px;

  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  justify-items: center;
  align-items: center;

  background-color: white;

  font-weight: bold;
`

const Left = styled.div``
const Center = styled.div``
const Right = styled.div`
  padding-right: 3vw;
`

export default function Header({ title, right }: HeaderProps) {
  const router = useRouter()

  return (
    <Wrapper>
      <Left
        onClick={() => {
          router.back()
        }}
      >
        <ArrowBackIcon />
      </Left>
      <Center>{title}</Center>
      {right && (
        <Right
          onClick={() => {
            router.push('/my-page')
          }}
        >
          {right}
        </Right>
      )}
    </Wrapper>
  )
}
