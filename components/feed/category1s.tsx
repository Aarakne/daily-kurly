import styled from '@emotion/styled'
import Category1 from './category1'

const CATEGORYS = ['재료별', '상황/난이도별', '음식분류별']

const Wrapper = styled.div`
  d
`

const Category1s = () => {
  return (
    <Wrapper>
      {CATEGORYS.map((category) => (
        <Category1 key={category} categoryTitle={category} />
      ))}
    </Wrapper>
  )
}

export default Category1s
