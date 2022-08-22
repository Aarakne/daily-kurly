import styled from '@emotion/styled'
import MyIcon from '../../assets/my.svg'
import WriteIcon from '../../assets/write.svg'
import { useRouter } from 'next/router'

const Wrapper = styled.div`
  position: fixed;

  display: flex;
  flex-direction: column;
  gap: 6px;

  right: 4vw;
  bottom: 55px;
`

const FloatingButton = styled.button`
  width: 50px;
  height: 50px;

  color: #fff;

  background-color: #5f0080;

  border-radius: 100%;
`

const FloatingButtons = () => {
  const router = useRouter()

  const onClickMyButton = () => {
    router.push('/my-page')
  }

  const onClickWriteButton = () => {
    router.push('/posts/upload')
  }

  return (
    <Wrapper>
      <FloatingButton onClick={onClickMyButton}>
        <MyIcon />
      </FloatingButton>
      <FloatingButton onClick={onClickWriteButton}>
        <WriteIcon />
      </FloatingButton>
    </Wrapper>
  )
}

export default FloatingButtons
