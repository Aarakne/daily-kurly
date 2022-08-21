import styled from '@emotion/styled'
import FilterIcon from '../../assets/filter.svg'
import Category2 from './Category2'

const CATEGORYS = ['한식', '중식', '일식', '양식', '디저트']

const Wrapper = styled.div`
  width: 100vw;

  display: flex;
  justify-content: center;

  padding: 0 4vw;
`

const Box = styled.div`
  width: 100%;
  max-width: 340px;

  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`

const FilterButton = styled.button`
  height: 22px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f2f2f2;

  border: 1px solid #5f0080;
  border-radius: 3px;
`

const Category2s = () => {
  return (
    <Wrapper>
      <Box>
        <FilterButton>
          <FilterIcon />
          11
        </FilterButton>
        {CATEGORYS.map((category) => (
          <Category2 key={category} categoryTitle={category} />
        ))}
      </Box>
    </Wrapper>
  )
}

export default Category2s
