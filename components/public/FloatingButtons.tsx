import styled from '@emotion/styled'
import MyIcon from '../../assets/my.svg'
import WriteIcon from '../../assets/write.svg'

const Wrapper = styled.div`
  position: fixed;

  display: flex;
  flex-direction: column;
  gap: 6px;

  right: 4vw;
  bottom: 30px;
`

const FloatingButton = styled.button`
  width: 50px;
  height: 50px;

  color: #fff;

  background-color: #5f0080;

  border-radius: 100%;
`

const FloatingButtons = () => {
  return (
    <Wrapper>
      <FloatingButton>
        <MyIcon />
      </FloatingButton>
      <FloatingButton>
        <WriteIcon />
      </FloatingButton>
    </Wrapper>
  )
}

export default FloatingButtons
