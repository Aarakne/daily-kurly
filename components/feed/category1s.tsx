import styled from '@emotion/styled'
import Category1 from './category1'

const CATEGORYS = ['재료별', '상황/난이도별', '음식분류별']

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 15px;

  border-bottom: 1px solid #eee;
`

const Box = styled.div`
  display: flex;
  justify-content: space-between;

  min-width: 300px;
  max-width: 375px;
`

const Category1s = () => {
  return (
    <Wrapper>
      <Box>
        {CATEGORYS.map((category) => (
          <Category1 key={category} categoryTitle={category} />
        ))}
      </Box>
    </Wrapper>
  )
}

export default Category1s
