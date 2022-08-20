import styled from '@emotion/styled'
import Category2 from './category2'

const CATEGORYS = ['한식', '중식', '일식', '양식', '디저트']

const Wrapper = styled.div``

const FilterButton = styled.button``

const Category2s = () => {
  return (
    <Wrapper>
      <FilterButton>필터</FilterButton>
      {CATEGORYS.map((category) => (
        <Category2 key={category} categoryTitle={category} />
      ))}
    </Wrapper>
  )
}

export default Category2s
