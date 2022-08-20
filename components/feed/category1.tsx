import styled from '@emotion/styled'

interface Category1Props {
  categoryTitle: string
}

const Wrapper = styled.div``

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: #f2f2f2;
`

const Title = styled.p``

const Category1 = ({ categoryTitle }: Category1Props) => {
  return (
    <Wrapper>
      <Box />
      <Title>{categoryTitle}</Title>
    </Wrapper>
  )
}

export default Category1
