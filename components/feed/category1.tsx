import styled from '@emotion/styled'

interface Category1Props {
  categoryTitle: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`

const Box = styled.div`
  width: 70px;
  height: 70px;

  background-color: #f2f2f2;

  border-radius: 8px;
`

const Title = styled.p`
  font-size: 13.5px;
`

const Category1 = ({ categoryTitle }: Category1Props) => {
  return (
    <Wrapper>
      <Box />
      <Title>{categoryTitle}</Title>
    </Wrapper>
  )
}

export default Category1
